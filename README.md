# synchronized-array-shuffle

Shuffle multiple arrays [randomly](https://www.npmjs.com/package/knuth-shuffle) and keep them synchnorized.

## Install & Usage

On the command line:

`npm install synchronized-array-shuffle`

In your file:

```javascript
import synchronizedShuffle from 'synchronized-array-shuffle';

const A = ['a', 'b', 'c'];
const B = ['1', '2', '3'];

const [ A_shuffled, B_shuffled ] = synchronizedShuffle([ A, B ]);

// possible output
console.log(A_shuffled);
// ['c', 'a', 'b']
console.log(B_shuffled);
// ['3', '1', '2']
```