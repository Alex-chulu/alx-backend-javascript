function updateUniqueItems(inputMap) {
  if (!(inputMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [item, quantity] of inputMap.entries()) {
    if (quantity === 1) {
      inputMap.set(item, 100);
    }
  }

  return inputMap;
}

module.exports = updateUniqueItems;

