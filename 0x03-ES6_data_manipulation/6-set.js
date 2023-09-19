function setFromArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input is not an array");
  }

  return new Set(arr);
}

module.exports = setFromArray;

