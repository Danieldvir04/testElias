function palindrome(str) {
  var newstr = str.replace(/[\W\_]/gi, "").toLowerCase();

  array = newstr.split("").reverse().join("");

  if (newstr === array) {
    return true;
  } else return false;
}
