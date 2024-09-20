import * as tf from '@tensorflow/tfjs-node';

const model = tf.sequential();

const layer = tf.layers.dense({ units: 1, inputShape: [1] }) ;
model.add( layer );

model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
const ys = tf.tensor2d([3, 3, 3, 3], [4, 1]);

model.fit(xs, ys).then(() => {

	const result = model.predict(tf.tensor2d([2], [1, 1]));
	
	console.log('result', result.print());

});
