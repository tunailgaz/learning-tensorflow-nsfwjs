const path = require('path');
const tf = require('@tensorflow/tfjs');
const nsfwjs = require('nsfwjs');

const load_model_async = (debug = false) => {
  debug ? tf.enableDebugMode() : tf.enableProdMode();
  const MODEL_PATH = `file://${path.normalize(path.join(__dirname, '../model/'))}`;

  return nsfwjs.load(MODEL_PATH, { type: 'graph' });
};

exports.load_model_async = load_model_async;
