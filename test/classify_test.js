const assert = require('assert');
const { describe, it } = require('mocha');
const path = require('path');
const { classify_async } = require('../src');
const fs = require('fs');

describe('predictions', function () {
  this.timeout(0);
  it('should detect as Porn', async () => {
    const prediction = await classify_async(path.join(__dirname, './images/nsfw.jpg.base64'));

    assert.strictEqual(prediction[0].className, 'Porn');
    assert.strictEqual(prediction[0].probability > 0.85, true);
  });
  it('should detect as Drawing', async () => {
    const prediction = await classify_async(path.join(__dirname, './images/drawing.jpg.base64'));

    assert.strictEqual(prediction[0].className, 'Drawing');
    assert.strictEqual(prediction[0].probability < 0.85, true);
  });
  it('should detect as Drawing', async () => {
    const prediction = await classify_async(path.join(__dirname, './images/drawing_2.jpg.base64'));

    assert.strictEqual(prediction[0].className, 'Drawing');
  });
  it('should detect as nsfw Hentai', async () => {
    const prediction = await classify_async(path.join(__dirname, './images/hentai.jpg.base64'));

    assert.strictEqual(prediction[0].className, 'Hentai');
  });

  it('should detect as Drawing', async () => {
    const prediction = await classify_async(path.join(__dirname, './images/safe_anime_1.jpg.base64'));

    assert.strictEqual(prediction[0].className, 'Drawing');
  });
  it('should detect as Drawing', async () => {
    const prediction = await classify_async(path.join(__dirname, './images/safe.jpg.base64'));

    assert.strictEqual(prediction[0].className, 'Drawing');
  });

  it('should catch errors', async () => {
    try {
      await classify_async();
    } catch (e) {
      assert.strictEqual(e.message, 'classifyAsync requires FILE_PATH.');
    }
  });
});
