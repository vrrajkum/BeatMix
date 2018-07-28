// Create and populate an array with 16 `false` elements
const createArray = () => {
  const arr = [];
  for (let i = 0; i < 16; i++) {
    arr.push(false);
  }

  return arr;
}

// Initialize drum arrays
let kicks = createArray();
let snares = createArray();
let hiHats = createArray();
let rideCymbals = createArray();

// Toggle the drum at the given index in the given array
const toggleDrum = (arr, index) => {
  if (!arr || index < 0 || index > 15) {
    return;
  }

  const reassignDrum = {
    'kicks': () => kicks[index] = !kicks[index],
    'snares': () => snares[index] = !snares[index],
    'hiHats': () => hiHats[index] = !hiHats[index],
    'rideCymbals': () => rideCymbals[index] = !rideCymbals[index],
    'default': () => console.log("Invalid drum array!")
  };

  reassignDrum[arr] ? reassignDrum[arr]() : reassignDrum['default']();
};

// Reset a given array
const clear = (arr) => {
  if (!arr) {
    return;
  }

  const clearArray = {
    'kicks': () => kicks = createArray(),
    'snares': () => snares = createArray(),
    'hiHats': () => hiHats = createArray(),
    'rideCymbals': () => rideCymbals = createArray(),
    'default': () => console.log("Invalid drum array!")
  };

  clearArray[arr] ? clearArray[arr]() : clearArray['default']();
};

// Invert all the values in a given array
const invert = (arr) => {
  if (!arr) {
    return;
  }

  const invertArray = {
    'kicks': () => kicks = kicks.map(value => !value),
    'snares': () => snares = snares.map(value => !value),
    'hiHats': () => hiHats = hiHats.map(value => !value),
    'rideCymbals': () => rideCymbals = rideCymbals.map(value => !value),
    'default': () => console.log("Invalid drum array!")
  };

  invertArray[arr] ? invertArray[arr]() : invertArray['default']();
};

// Determine whether synth input is valid
const invalidSynthInput = (x, y, size) => (
  x < 0 || y < 0 || x >= size || y >= size
);

// Determine whether synth input is a corner; if so, return the corresponding neighbors
const cornerSynthInput = (x, y, size) => {
  if (x === 0 && y === 0) { // Bottom left corner
    return [[x, y + 1], [x + 1, y]];
  } else if (x === 0 && y === size - 1) { // Top left corner
    return [[x, y - 1], [x + 1, y]];
  } else if (x === size - 1 && y === 0) { // Bottom right corner
    return [[x, y + 1], [x - 1, y]];
  } else if (x === size - 1 && y === size - 1) { // Top right corner
    return [[ x, y - 1], [x - 1, y]];
  } else {
    return false;
  }
};

// Determine whether synth input is on an edge; if so, return the corresponding neighbors
const edgeSynthInput = (x, y, size) => {
  if (x === 0 && y > 0) { // Left edge
    return [[x, y - 1], [x, y + 1], [x + 1, y]];
  } else if (x > 0 && y === size - 1) { // Top edge
    return [[x, y - 1], [x - 1, y], [x + 1, y]];
  } else if (x === size - 1 && y > 0) { // Right edge
    return [[x, y - 1], [x, y + 1], [x - 1, y]];
  } else if (x > 0 && y === 0) { // Bottom edge
    return [[x, y + 1], [x - 1, y], [x + 1, y]];
  } else {
    return false;
  }
};

// Return neighboring synth pads when one is clicked
const getNeighborPads = (x, y, size) => {
  if (invalidSynthInput(x, y, size)) {
    return [];
  } else if (cornerSynthInput(x, y, size)) {
    return cornerSynthInput(x, y, size);
  } else if (edgeSynthInput(x, y, size)) {
    return edgeSynthInput(x, y, size);
  } else {
    return [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]];
  }
};
