// Create a function that takes a string and an optional boolean.

// If the boolean is true or not provided, return the string in uppercase.
// If the boolean is false, return the string in lowercase.

function formatString(str: string, toUpperCase: boolean = true): any {
  if (toUpperCase) {
    return str.toUpperCase();
  } else {
    return str.toLowerCase();
  }
}

const str = "Hello World";
const upperstr = formatString(str, true);
const lowestr = formatString(str, false);

console.log(str);
console.log(upperstr);
console.log(lowestr);
