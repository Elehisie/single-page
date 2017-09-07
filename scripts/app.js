(function() {
  var controlMenu = function() {
    var toggler = document.getElementsByClassName('toggler');
    var slideMenu = document.getElementById('slideMenu');
    var defaultNav = document.getElementById('defaultNav');
    
   
    
    for ( i=0; i<toggler.length; i++) {
      toggler[i].addEventListener('click', function() {
        if (slideMenu.style.display == 'flex') {
          // this.style.display = 'flex';
          slideMenu.style.display= 'none';
           defaultNav.style.display = 'flex';
        }
        else {
          // this.style.display = 'none';
          slideMenu.style.display = 'flex';
           defaultNav.style.display = 'none';
        }
      });
    }
    
  };

  controlMenu();
})();