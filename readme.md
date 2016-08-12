## API

```js
var solver=require('hnk-game24-solver');

//return { solvable: true, solutions: [ '((4*3)*2)*1', '((4*3)*2)/1', '(4*3)/(1/2)', '(4+2)*(3+1)' ] }
solver.solve([1,2,3,4]);
```