{
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
  


  function filterBooksByRating(item: book[]): book[] {
    return item.filter((item) => item.rating >= 4);
  }

  const res = filterBooksByRating(book);


  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((acc, arrays) => {
      return acc.concat(arrays);
    });
  }
  console.log(concatenateArrays([1, 2], [3, 4], [5]));
  console.log(concatenateArrays(["a", "b"], ["c"]));

  

  class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
    public getInfo(): string {
      return `make : ${this.make} , year : ${this.year}`;
    }

    public getModel(): string {
      return `model : ${this.make}`;
    }
  }

  class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }
    public getModel(): string {
      return `Model : ${this.model}`;
    }
  }

  const myCar = new Car("Toyota", 2020, "Corolla");
  myCar.getInfo();
  myCar.getModel();





  function processValue(value: string | number): any {
    if (typeof value === "string") {
      return value.length;
    } else if (typeof value === "number") {
      return value * 2;
    }
  }



  function getMostExpensiveProduct(prod: Product[]): any {
    if (prod.length === 0) {
      console.log("object is Empty");
      return null;
    }
    let mostexpensive = prod[0];
    for (let i = 0; i < prod.length; i++) {
      if (prod[i].price > mostexpensive.price) {
        mostexpensive = prod[i];
      }
    }
    return mostexpensive;
  }
  const moreexpensive = getMostExpensiveProduct(products);



  enum days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: days): string {
    switch (day) {
      case days.Sunday:
      case days.Friday:
        return "Weekend";

      case days.Monday:
      case days.Tuesday:
      case days.Wednesday:
      case days.Thursday:
      case days.Saturday:
        return "Weekday";

      default:
        return "Wrong Day";
    }
  }

  const dayType = getDayType(days.Monday);
  const dayType2 = getDayType(days.Friday);


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
    console.log("Negetive Number Not Allowed ");
  });
}
