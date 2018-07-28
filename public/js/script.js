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
  if (!arr || index < 0 || index > 16) {
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
}

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
}
