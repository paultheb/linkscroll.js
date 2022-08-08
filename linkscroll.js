var linkscroll = (function (window, undefined) {

  function _toTargetHandler(e) {
    e.preventDefault();
    
    const target = this.getAttribute('data-target');
    const offsetTop = document.querySelector(target).offsetTop;

    scroll({
      top: offsetTop,
      behavior: 'smooth'
    });
  }

  function _toTopHanlder(e) {
    e.preventDefault();
    scroll({
      top: 0,
      behavior: 'smooth'
    })
  }
  function init() {
    
    const toTargetLinks = document.querySelectorAll('.linkscroll-target');
    const toTopLinks = document.querySelectorAll('.linkscroll-top');

    for (const link of toTargetLinks) {
      link.addEventListener('click', _toTargetHandler);
    }

    for (const link of toTopLinks) {
      link.addEventListener('click', _toTopHanlder);
    }
  }

  return {
    init: init
  };

})(window);