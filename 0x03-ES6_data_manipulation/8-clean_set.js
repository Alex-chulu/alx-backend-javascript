function cleanSet(inputSet, startString) {
  const filteredValues = new Set();

  inputSet.forEach((value) => {
    if (value.startsWith(startString)) {
      filteredValues.add(value.substring(startString.length));
    }
  });

  return Array.from(filteredValues).join('-');
}

module.exports = cleanSet;

