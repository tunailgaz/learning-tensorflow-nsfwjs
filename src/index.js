const { convert_image_to_tensor3d_fomat } = require('./utils');
const { load_model_async } = require('./loader');

exports.classify_async = async (FILE_PATH = null) => {
  if (!FILE_PATH) {
    throw new Error('classifyAsync requires FILE_PATH.');
  }

  const decoded_image = await convert_image_to_tensor3d_fomat(FILE_PATH);
  const model = await load_model_async(false);

  return model.classify(decoded_image);
};
