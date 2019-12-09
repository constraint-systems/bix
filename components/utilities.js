export function pInline(val) {
  return { paddingLeft: val, paddingRight: val };
}

export function pBlock(val) {
  return { paddingTop: val, paddingBottom: val };
}

export function reverseString(string) {
  let _s = string.split('');
  _s = _s.reverse();
  return _s.join('');
}

export function convertCharToByte(char) {
  return reverseString(
    char
      .charCodeAt(0)
      .toString(2)
      .padStart(8, '0')
  );
}

export function convertStringToBytes(string) {
  let chars = string.split('');
  let binary = chars.map(char => convertCharToByte(char));
  return binary;
}

export function convertByteToText(byte) {
  let rev_byte = reverseString(byte);
  return String.fromCharCode(parseInt(rev_byte, 2));
}

export function convertBytesToText(bytes) {
  let char_array = bytes.map(byte => convertByteToText(byte));
  return char_array.join('');
}
