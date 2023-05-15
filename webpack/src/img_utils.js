

function cropImage(urlImage, {left = 0, top = 0, width = 1, height = 1}) {

	return new Promise(function(res, err) {

		const img = new Image();
		img.onload = function() {
		
			const canvas = document.createElement('canvas');
			canvas.width  = width  * img.width;
			canvas.height = height * img.height;

			document.body.appendChild(canvas);
			
			const ctx = canvas.getContext("2d");
			ctx.drawImage(
				img, 
				left * img.width,
				top * img.height,
				width  * img.width,
				height * img.height,
				0, 
				0, 
				canvas.width, 
				canvas.height
			);
			
			res(canvas.toDataURL());
			
			document.body.removeChild(canvas);
		}
		img.src = urlImage;
	
	});


}

module.exports = { cropImage }
