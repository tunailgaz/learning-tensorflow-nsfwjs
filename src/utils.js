const sharp = require('sharp');
const tfnode = require('@tensorflow/tfjs-node');
const fs = require('fs');

exports.convert_image_to_tensor3d_fomat = async (FILE_PATH) => {
  const file = fs.readFileSync(FILE_PATH);
  const imageBuffer = await sharp(file) // change "file" to "FILE_PATH" for real image files, this one is reading as base64 buffer.
    .resize({ width: 224, height: 224 }).toBuffer();

  return tfnode.node.decodeImage(imageBuffer);
};
