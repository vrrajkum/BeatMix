// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (reqType, index, newPresetArray) => {
  if (index < 0 || index > 3) {
    return [404];
  }

  switch (reqType) {
    case 'GET':
      return [200, presets[index]];
    case 'PUT':
      presets[index] = newPresetArray;
      return [200, presets[index]];
    default:
      return [400];
  }
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
