function(instance, properties, context) {

   if (properties.video_src) { 
        instance.data.vjsPlayer.src(properties.video_src);
   }

   instance.data.last_triggerred_event = 0;

}