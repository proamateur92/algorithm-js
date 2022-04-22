function reverse(str) {
  let last = str[str.length - 1];
  if (str.length === 0) {
    return '';
  }

  return last + reverse(str.slice(0, str.length - 1));
}

console.log(reverse('abcdef'));
