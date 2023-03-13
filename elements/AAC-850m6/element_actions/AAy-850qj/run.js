function(instance, properties, context) {

   if (properties.playback_id) {
        var url = getVideoURL(properties.playback_id);
        var SourceObject = {src: url};
        instance.data.vjsPlayer.src(SourceObject);
    }
    instance.data.last_triggerred_event = 0;

}