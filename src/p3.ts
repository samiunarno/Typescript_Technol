// Create a generic function that concatenates multiple
// arrays of the same type using rest parameters.

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, arrays) => {
    return acc.concat(arrays);
  });
}
console.log(concatenateArrays([1, 2], [3, 4], [5]));
console.log(concatenateArrays(["a", "b"], ["c"]));
