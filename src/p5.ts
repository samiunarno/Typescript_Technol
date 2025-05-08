//Write a function that takes a string | number and returns:

//The length if it's a string
//The number multiplied by 2 if it's a number

{
  type outputst = {
    st: string;
  };

  type outputnum = {
    num: number;
  };

  const output: outputst = {
    st: "Hello",
  };
  const output2: outputnum = {
    num: 10,
  };

  function processValue(value: string | number): any {
    if (typeof value === "string") {
      return value.length;
    } else if (typeof value === "number") {
      return value * 2;
    }
  }

  console.log(processValue(output.st));
  console.log(processValue(output2.num));
}
