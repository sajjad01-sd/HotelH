$(document).ready(function() {
    
    
    /* For the sticky navigation */
    $('.js--section-room').waypoint(function(direction) {
        if (direction == "down") {
            $('sticky').addClass('sticky');
        } else {
            $('sticky').removeClass('sticky');
        }
    }, {
      offset: '150px;'
    });

    

});