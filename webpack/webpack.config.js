const path = require('path');
const fs = require('fs');
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');

module.exports = function(env, argv) {

	return {
		
		entry: {
            'pdf_utils':   ['./src/pdf_utils.js'],
            'img_utils':   ['./src/img_utils.js'],
        },
        
		plugins: [
			new CopyPlugin({
                patterns: [
                    { from: './public', to: '.' }
                ]
            }),
            new webpack.DefinePlugin({
				PDFJS_WORKER_SCRIPT: JSON.stringify( fs.readFileSync('./node_modules/pdfjs-dist/build/pdf.worker.min.mjs', 'utf8') )
			})
		],
		
		output: {
			filename: '[name].js',
		    library: '[name]',
		    libraryTarget: 'window'
		}
	}
	
}



