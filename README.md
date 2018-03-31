# ac-grid

ac-grid is an AngularJS directive for displaying a grid of checkboxes corresponding to the keys of a JSON object. It returns the user selections as an array of selected values.

To use, add an ac-grid element.

```html
<ac-grid ng-model="$ctrl.selections" options="$ctrl.options" per-row="3"></ac-grid>
```

## Installation

1. Install via yarn or npm (recommended) or bower (deprecated)

```shell
yarn add ac-grid --save
```

-- or --

```shell
npm install --save ac-grid
```

-- or --

```shell
bower install ac-grid
```

1. Include the files in your code

```html
<link rel="stylesheet" type="text/css" href="node_modules/ac-grid/ac-grid.css">
...
<script src="node_modules/ac-grid/ac-grid.js"></script>
```

1. Require ac-grid in your angular module.

```javascript
angular.module('myapp', ['ac-grid']);
```

## Usage

```html
<ac-grid ng-model="$ctrl.selections" options="[{ label: 'A', value: 'a' }, { label: 'B', value: 'b' }]" per-row="3"></ac-grid>
```

## Development

### Available Commands

* `npm start`: build the project and run a dev server
* `npm run build`: build the project
* `npm test`: run tests

## License
MIT
