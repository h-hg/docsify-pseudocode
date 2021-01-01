const LANG = 'algorithm';
const SELECTOR = 'pre[data-lang="' + LANG + '"]';

const plugin = (hook, vm) => {
  let config = Object.assign({}, {
    indentSize: '1.2em',
    commentDelimiter: '//',
    lineNumber: false,
    lineNumberPunc: ':',
    noEnd: false,
    captionCount: undefined,
    titlePrefix: 'Algorithm'
  }, vm.config.pseudocode);
  
  hook.beforeEach(function(content) {
    // reset the captionCount for every page
    config.captionCount = 0; 
    return content;
  });

  hook.afterEach(function(html, next) {
    const htmlElement = document.createElement('div');
    htmlElement.innerHTML = html;
    htmlElement.querySelectorAll(SELECTOR).forEach((element) => {
      pseudocode.renderElement(element, config);
      config.captionCount += 1;
    });

    next(htmlElement.innerHTML);
  });
};

export default plugin;
