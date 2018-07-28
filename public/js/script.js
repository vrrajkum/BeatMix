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

  const mutateArrays = {
    'kicks': kicks[index] = !kicks[index],
    'snares': snares[index] = !snares[index],
    'hiHats': hiHats[index] = !hiHats[index],
    'rideCymbals': rideCymbals[index] = !rideCymbals[index]
  };

  return mutateArrays[arr];
};
