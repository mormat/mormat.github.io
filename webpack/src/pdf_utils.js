

const pdfjs = require('pdfjs-dist');

pdfjs.GlobalWorkerOptions.workerSrc = URL.createObjectURL(
	new Blob([PDFJS_WORKER_SCRIPT], { type: 'application/javascript' })	
);

async function loadPdf(url) {

	const pdfDoc = await pdfjs.getDocument(url).promise;

	const numPages = pdfDoc.numPages;
	const loadPage = async function(numPage, { scale = 1 } = {}) {
	
		const page = await pdfDoc.getPage(numPage);
		
		var viewport = page.getViewport({ scale });
		
		const canvas = document.createElement('canvas');
		canvas.hidden = true;
		canvas.height = viewport.height * scale;
		canvas.width  = viewport.width * scale;
		document.body.appendChild(canvas);
		
		const renderTask = page.render({
			canvasContext: canvas.getContext('2d'),
			viewport: viewport
	    });
	    
	    await renderTask.promise;
	    
	    const result = canvas.toDataURL();
	    document.body.removeChild(canvas);
	    
	    return result;
		
	}

	return { numPages, loadPage }
	
}

function loadPdfFromFile(file) {

	return new Promise(function(res, rej) {
	
		const reader = new FileReader();
		reader.readAsArrayBuffer(file);
		reader.onload = () => res( loadPdf( new Uint8Array(reader.result) ) )
	
	});

}

module.exports = { loadPdf, loadPdfFromFile }
