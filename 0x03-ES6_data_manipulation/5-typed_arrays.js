export default function createInt8TypedArray(length, position, value) {
  if (position <= -1 || position >= length) {
    throw Error('Position outside range');
  }
  const nBuffer = new ArrayBuffer(length);
  const nView = new DataView(nBuffer, 0, length);
  const nArray = new Int8Array(nBuffer);
  nArray[position] = value;
  return nView;
}
