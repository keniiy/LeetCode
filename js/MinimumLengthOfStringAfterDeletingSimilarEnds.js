/**
 * @params {string} s
 * @return {number}
 */
const minimumLength = function (s) {
  let input = s.split("");
  let result;

  if (input.length <= 1) return input.length;

  if (input.length == 2 && input[0] !== input[1]) return input.length;

  for (i = 0; i < input.length; i++) {
    console.log(input[i]);
    console.log(input.length);

    


  }

  return result;
};

const input = "aabccabba";

console.log(minimumLength(input));
