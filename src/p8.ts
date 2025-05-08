//Create an async function that:
// Returns the square of a number after 1 second
// Rejects if the number is negative

{
  async function squarenumber(num: number): Promise<number> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (num < 0) {
          rej("Number is Negetive");
        } else {
          res(num * num);
        }
      }, 1000);
    });
  }
  squarenumber(4).then((result) => {
    console.log("Result : ", result);
  });
  squarenumber(-3).catch((error) => {
    console.log("Neetive Number Not Allowed :");
  });
}
