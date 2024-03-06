/**
 * @description solution for first two edge cases not working for thrid edge case
 * @params {string} s
 * @return {number}
 */
const minimumLengthOfStringAfterDeletingSimilarEnds = function (s) {
  let input = s.split("");
  let result;

  while (input.length > 1 && input[0] === input[input.length - 1]) {
    input.pop();
    input.shift();
  }

  return input.length;
};

const input = "cabaabac";

// console.log(minimumLengthOfStringAfterDeletingSimilarEnds(input));

/**
 * @description solution for all edge cases
 * @params {string} s
 * @return {number}
 */
const minimumLengthOfStringAfterDeletingSimilarEnds2 = function (s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end && s[start] === s[end]) {
    start++;
    end--;
  }

  return end - start + 1;
};

console.log(minimumLengthOfStringAfterDeletingSimilarEnds2("aabccabba"));
