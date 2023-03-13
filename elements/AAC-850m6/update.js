function(instance, properties, context) {

    var preload = properties.preload.toLowerCase();
    var options = {
        controls: properties.controls,
        autoplay: properties.autoplay,
        loop: properties.loop,
        preload: preload,
        muted: properties.muted
    }

    instance.data.options = options;
    
    // store the css skin
    instance.data.skin = properties.skin_file;
    
    function formatTimeStamp(myTime) {
      // Timestamp
      // hh:mm:ss.tttt
      let hours = Math.floor((myTime % (60 * 60)) / (60 * 60));  
      let minutes = Math.floor((myTime % (60 * 60)) / 60);
      let seconds = myTime % 60; // Modulus 60
      let milliseconds = ((myTime % 1).toFixed(4)) * 10000 // The decimal part in milliseconds
      

      if (seconds < 10) {
        seconds = `0${seconds}`;
      }        
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      if (hours < 10) {
        hours = `0${hours}`;
      }
      if (milliseconds < 10) {
        milliseconds = `000${milliseconds}`;
      }
      else if (milliseconds < 100) {
        milliseconds = `00${milliseconds}`;
      }
      else if (milliseconds < 1000) {
        milliseconds = `0${milliseconds}`;
      }
        
      let returnValue = `${hours}:${minutes}:${seconds}.${milliseconds}`;
      console.log(returnValue)
      return returnValue;
    }

    $(document).ready(function() {

        var vjsPlayer = instance.data.vjsPlayer;
        
        if (properties.playback_id) {
            var url = getVideoURL(properties.playback_id);
            var SourceObject = {src: url};
            vjsPlayer.src(SourceObject);
        }
        
        
        vjsPlayer.ready(function () {
            if (properties.timed_cue_event) {
            	// Get the list of cue event
                var triggeredEventList = properties.timed_cue_event .get(0, properties.timed_cue_event .length());
                triggeredEventList.sort(function(a, b){return a-b});
                instance.data.triggerList = triggeredEventList;
                instance.data.triggerId = 0;
                instance.data.triggerShown = false;
            }

        });
        
        if (properties.poster) {
        	vjsPlayer.poster(properties.poster);
        }
        else {
            
           vjsPlayer.poster("//meta.cdn.bubble.io/f1678710929144x382027006196397950/livepeer_poster.jpeg");
            
        }
               
    });

}