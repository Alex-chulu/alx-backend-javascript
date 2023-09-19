function cleanSet(inputSet, startString) {
  const filteredValues = Array.from(inputSet).filter((value) =>
    value.startsWith(startString)
  );

  return filteredValues.join('-');
}

module.exports = cleanSet;

