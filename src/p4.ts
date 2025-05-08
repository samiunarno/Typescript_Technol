//Create a Vehicle class with private make and year properties and a getInfo() method.
//Create a Car class extending Vehicle, adding a private model property and a getModel() method.

{
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

    //only model :

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

  console.log(myCar.getInfo());
  console.log(myCar.getModel());
}
