(function () {
  'use strict';

  var player = videojs("test", {
    html5: {
      hls: {
        withCredentials: true
      }
    },
    flash: {
      hls: {
        withCredentials: true
      }
    }
  });
  player.play();
})();