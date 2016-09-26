
$( document ).ready(function() {

  // Menu Sidebar Toggler
  var panelWrap = $('.js-panel-wrap');
  var toggler = $('.js-menu-toggler');
  var activeClass = 'is-menu-open';

  toggler.on('click', function(e) {
    e.preventDefault();

    panelWrap.toggleClass(activeClass);
  });

});

