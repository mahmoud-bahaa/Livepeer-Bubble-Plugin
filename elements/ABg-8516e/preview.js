function(instance, properties) {    
	let box = $('<div id="preview-id"></div>');  
	box.css("height", properties.bubble.height)
	box.css("width", properties.bubble.width)
    box.css("background-image", "url(//meta.cdn.bubble.io/f1678710929144x382027006196397950/livepeer_poster.jpeg)")
	box.css("background-repeat", "no-repeat")
	box.css("background-position", "50% 50%")
	box.css("background-size", "cover")
    
  	instance.canvas.append(box); 
}
