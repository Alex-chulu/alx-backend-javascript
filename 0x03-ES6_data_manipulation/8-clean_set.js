export default function cleanSet(set, startString) {
  let respo;
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  respo = Array.from(set).filter((word) => typeof word === 'string' && word.startsWith(startString));
  respo = respo.map((word) => word.slice(startString.length));
  return respo.join('-');
}
