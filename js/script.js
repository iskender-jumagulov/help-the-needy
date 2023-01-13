$(window).load(function() {
    // Make a mouse event function. I used click because I don't like the user to get attacked by stuff out of nowhere (hover). The pointer should be enough of an indicator.
      $('.portrait').on('click', function(e) {
        // Prevent parent DOM from firing any of this.
        e.stopPropagation();
        // Only fire if it is the actual element, no childs allowed.
        if(e.target != this) return;
        // Toggle a class and make siblings remove it.
        $(this).toggleClass('show').siblings().removeClass('show');
      });
      
      // Too keep this intuitive make a second function to remove on document click. (Don't force mouse movements.)
      $(document).click(function() {
        $('.portrait').removeClass('show');
      });
      
    });