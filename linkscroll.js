var linkscroll = (function (window, undefined) {

  let behavior = 'smooth';

  function toTargetHandler(e) {
    e.preventDefault();
    
    const target = this.getAttribute('data-target');
    const offsetTop = document.querySelector(target).offsetTop;

    scroll({
      top: offsetTop,
      behavior: behavior
    });
  }

  function toTopHanlder(e) {
    e.preventDefault();
    scroll({
      top: 0,
      behavior: behavior
    })
  }

  function init(options) {
    behavior = options.behavior;

    const toTargetLinks = document.querySelectorAll('.linkscroll-target');
    const toTopLinks = document.querySelectorAll('.linkscroll-top');

    for (const link of toTargetLinks) {
      link.addEventListener('click', toTargetHandler);
    }

    for (const link of toTopLinks) {
      link.addEventListener('click', toTopHanlder);
    }
  }

  return {
    init: init
  };

})(window);