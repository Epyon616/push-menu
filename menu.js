$(document).ready(function(){
  var pushMenu = $(".push-menu"),
      menuButton = $(".menu-button"),
      wrapper = $('.wrapper');


  menuButton.click(function(e) {
    pushMenu.toggleClass('open');
    wrapper.toggleClass('menu-open');
    return false;
  });
});
