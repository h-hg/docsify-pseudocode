# Installation

## Style

Add following link tag to your `index.html` .

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pseudocode@latest/build/pseudocode.min.css">
```

## Math

docsify-pseudocode supports multiple backends to render math formulas. If you want to include any math formulas in your pseudocode, please make sure that either KaTeX or MathJax is properly setup in your document.

Add following script tag to your `index.html` after the script tag of docsify.

**For KaTeX users**

```html
<script src="https://cdn.jsdelivr.net/npm/katex@latest/dist/katex.min.js"></script>
```

**For MathJax 2.x users**

```html
<script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-AMS_CHTML'></script>
<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    tex2jax: {
      inlineMath: [['$','$'], ['\\(','\\)']],
      displayMath: [['$$','$$'], ['\\[','\\]']],
      processEscapes: true,
      processEnvironments: true,
    }
  });
</script>
```

**For MathJax 3.x users**

```html
<script src="https://cdn.jsdelivr.net/npm/mathjax@3.0.0/es5/tex-chtml.js">
<script>
  MathJax = {
    tex: {
      inlineMath: [['$','$'], ['\\(','\\)']],
      displayMath: [['$$','$$'], ['\\[','\\]']],
      processEscapes: true,
      processEnvironments: true,
    }
  }
</script>
```

## Core

Add following script tag to your `index.html` after the script tag of KaTeX or MathJax.

```html
<script src="https://cdn.jsdelivr.net/npm/pseudocode@latest/build/pseudocode.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/h-hg/docsify-pseudocode/dist/docsify-pseudocode.min.js"></script>
```

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- ... -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pseudocode@latest/build/pseudocode.min.css">
</head>

<body>
  <div id="app"></div>
  <script>
    window.$docsify = {
      // ...
    }
  </script>
  <script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/katex@latest/dist/katex.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/pseudocode@latest/build/pseudocode.min.js"></script>
  <script src="https://cdn.jsdelivr.net/gh/h-hg/docsify-pseudocode/dist/docsify-pseudocode.min.js"></script>
</body>
</html>
```
