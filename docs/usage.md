# Usage

## Configuration

The following options are currently supported:

- `indentSize`: `int`, the indent size of inside a control block, e.g. `if`, `for`, etc. The unit must be in `em`.
- `commentDelimiter`: `string`, the delimiters used to start and end a comment region. Note that only line comments are supported.
- `lineNumber`: `Boolean`, Whether line numbering is enabled.
- `lineNumberPunc`: `string`, The punctuation that follows line number.
- `noEnd`: `Boolean`, whether block ending, like `end if`, `end procedure`, etc., are showned.
- `titlePrefix`: `string`, the prefix in the title of the algorithm.

The default values of these options are:

```javascript
window.$docsify = {
  pseudocode: {
    indentSize: '1.2em',
    commentDelimiter: '//',
    lineNumber: false,
    lineNumberPunc: ':',
    noEnd: false,
    titlePrefix: 'Algorithm'
  }
}
```

## Write

````markdown
```algorithm
// write your pseudocode here
```
````

## Grammar

The grammar of pseudocode.js is mostly compatible with algorithmic package with a few improvement to make it even more easier to use.

A example of quick sort algorithm is as follows.

<!-- tabs:start -->

<!-- tab:Source Code -->

[quicksort](code/quicksort.md ':include :type=code text')

<!-- tab:Preview -->

[quicksort](code/quicksort.md ':include :type=code algorithm')

<!-- tabs:end -->

More details, please see [SaswatPadhi/pseudocode.js](https://github.com/SaswatPadhi/pseudocode.js) and [pseudocode.js](https://saswatpadhi.github.io/pseudocode.js).
