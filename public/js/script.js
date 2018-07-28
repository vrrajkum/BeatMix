// Create and populate an array with 16 'false' elements
const createArr = () => {
  arr = [];
  for (let i = 0; i < 16; i++) {
    arr.push(false);
  }

  return arr;
}

// Initialize drum arrays
let kicks = createArr();
let snares = createArr();
let hiHats = createArr();
let rideCymbals = createArr();

// Toggle the drum at the given index in the given array
const toggleDrum = (arr, index) => {
  if (!arr || index < 0 || index > 15) {
    return;
  }

  switch (arr) {
    case 'kicks':
      kicks[index] = !kicks[index];
      break;
    case 'snares':
      snares[index] = !snares[index];
      break;
    case 'hiHats':
      hiHats[index] = !hiHats[index];
      break;
    case 'rideCymbals':
      rideCymbals[index] = !rideCymbals[index];
      break;
    default:
      break;
  }
};

// Reset a given array
const clear = (arr) => {
  if (!arr) {
    return;
  }

  switch (arr) {
    case 'kicks':
      kicks = createArr();
      break;
    case 'snares':
      snares = createArr();
      break;
    case 'hiHats':
      hiHats = createArr();
      break;
    case 'rideCymbals':
      rideCymbals = createArr();
      break;
    default:
      break;
  }
};

// Invert all the values in a given array
const invert = (arr) => {
  if (!arr) {
    return;
  }

  switch (arr) {
    case 'kicks':
      kicks = kicks.map(value => !value);
      break;
    case 'snares':
      snares = snares.map(value => !value);
      break;
    case 'hiHats':
      hiHats = hiHats.map(value => !value);
      break;
    case 'rideCymbals':
      rideCymbals = rideCymbals.map(value => !value);
      break;
    default:
      break;
  }
};

// Determine whether synth input is valid
const invalidSynthInput = (x, y, size) => (
  x < 0 || y < 0 || x >= size || y >= size
);

// Determine whether synth input is a corner and return corresponding neighbors
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

// Determine whether synth input is on an edge and return corresponding neighbors
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
