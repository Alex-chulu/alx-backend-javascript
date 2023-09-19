// Check if the function has the value
function hasValuesFromArray(set, arr) {
  if (!(set instanceof Set) || !Array.isArray(arr)) {
    throw new Error("Invalid input types");
  }

  for (const item of arr) {
    if (!set.has(item)) {
      return false;
    }
  }

  return true;
}

module.exports = hasValuesFromArray;

