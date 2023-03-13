function(instance, properties, context) {
    var track;
    
   if (properties.playback_id) {
        var url = getVideoURL(properties.playback_id);

        track = new videojs.VideoTrack({
              src: url,
              kind: "main"
          });
	}

	// Add the track to the player's video track list.
	if (track) {
        instance.data.vjsPlayer.videoTracks().addTrack(track);
	}

}