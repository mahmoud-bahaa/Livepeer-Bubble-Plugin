function(instance, properties, context) {
   var track;
    
   if (properties.video_src) {
        //var url = getVideoURL(properties.playback_id);

        track = new videojs.VideoTrack({
              src: properties.video_src,
              kind: "main"
          });
	}

	// Add the track to the player's video track list.
	if (track) {
        instance.data.vjsPlayer.videoTracks().addTrack(track);
	}

}