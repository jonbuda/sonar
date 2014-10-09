$(function() {
   var mX, mY, distance,
        $element  = $('.sonar-target');
        $distance = $('.distance');
        audio = document.getElementById('audio');

        audio.playbackRate = 0.8;

    function calculateDistance(elem, mouseX, mouseY) {
        return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) + Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)));
    }

    $(document).mousemove(function(e) {  
        mX = e.pageX;
        mY = e.pageY;
        distance = calculateDistance($element, mX, mY);
        $distance.text(distance)

        if(distance < 100) {
          audio.playbackRate = 4;
        } else if (distance < 200) {
          audio.playbackRate = 3;
        } else if (distance < 310) {
          audio.playbackRate = 2;
        } else if (distance < 460) {
          audio.playbackRate = 1;
        } else {
          audio.playbackRate = 0.8;
        }
    });
});