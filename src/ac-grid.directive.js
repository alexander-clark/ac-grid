import gridTemplate from './templates/ac-grid.html';

export default function acGrid() {
  return {
    link: function(scope, iElement, iAttrs, ngModelCtrl) {
      ngModelCtrl.$formatters.push(formatter);

      ngModelCtrl.$parsers.push(parser);

      ngModelCtrl.$render = function() {
        scope.selections = ngModelCtrl.$viewValue;
      };

      scope.$watch('selections', function() {
        var selections = scope.selections || {};
        ngModelCtrl.$setViewValue({ selections: selections });
      }, true);
    },
    require: 'ngModel',
    restrict: 'E',
    scope: {
      disabled: '<',
      ngModel: '=',
      options: '<',
      perRow: '<'
    },
    templateUrl: gridTemplate
  };

  function formatter(modelValue) {
    var value = modelValue || [];
    var selections = {};

    value.map(function(number) {
      selections[number] = true;
    });

    return selections;
  }

  function parser(viewValue) {
    var output = [];

    for (var k in viewValue.selections) {
      if (viewValue.selections[k] === true) {
        output.push(k);
      }
    }

    return output;
  }
}

angular.module('ac-grid').directive('acGrid', acGrid)
