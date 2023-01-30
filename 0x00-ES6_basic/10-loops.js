export default function appendToEachArrayValue(array, appendString) {
  let idx = 0;
  const funcArr = array; // Avoiding explicit assignment to function params
  for (const value of funcArr) {
    funcArr[idx] = appendString.concat(value); // Implicit assigment to function param
    idx += 1;
  }
  return array;
}

