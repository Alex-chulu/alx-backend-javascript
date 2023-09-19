function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string') {
    throw new Error("Invalid input types");
  }

  const valuesWithStartString = Array.from(set).filter(value => value.startsWith(startString));

  const cleanedString = valuesWithStartString.join('-');

  return cleanedString;
}

module.exports = cleanSet;

