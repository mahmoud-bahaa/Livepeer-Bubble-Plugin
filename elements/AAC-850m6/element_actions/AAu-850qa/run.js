function(instance, properties, context) {


  let videoTrackList = instance.data.vjsPlayer.videoTracks();
  let audioTrackList =  instance.data.vjsPlayer.audioTracks();
    
  
  // Loop on videotracklist
  for (let i = 0; i < videoTrackList.length; i++) {
      	let myVideoTrack = videoTrackList[i];
    	instance.data.vjsPlayer.removeTrack(myVideoTrack);  
  }
  
  
  // Loop on audioTrackList
  for (let i = 0; i < audioTrackList.length; i++) {
      	let myAudioTrack = audioTrackList[i];
    	instance.data.vjsPlayer.removeTrack(myAudioTrack); 
  }
    

}