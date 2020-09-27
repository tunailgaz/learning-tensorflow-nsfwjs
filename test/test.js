const assert = require('assert');
const { describe, it } = require('mocha');
const tf = require('@tensorflow/tfjs');
const sharp = require('sharp');

const tfnode = require('@tensorflow/tfjs-node');
// const tf = require('@tensorflow/tfjs-node');

const nsfwjs = require('nsfwjs');

const path = require('path');

describe('test', function () {
  this.timeout(0);
  it('should test', async () => {
    tf.enableDebugMode();
    const model_url = `file://${path.normalize(path.join(__dirname, '../mobilenet_v2_104_224_1/web_model/'))}`;

    console.log(model_url);
    // tf.node.decodeImage(await sharp('../images/nsfw_1.jpg'))
    const model = await nsfwjs.load(model_url, { type: 'graph' });
    let image_url = path.normalize(path.join(__dirname, '../images/nsfw_2.jpg'));

    console.log(image_url);
    let width = 224;
    let height = 224;
    let image = await sharp(image_url).resize({ width, height }).toBuffer();
    let decodedImage = await tfnode.node.decodeImage(image);

    console.dir(decodedImage);
    const prediction = await model.classify(decodedImage);

    console.dir(prediction);
    assert.strictEqual(1, 1);
  });
});
