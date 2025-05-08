//Define an interface Product and create a function to
// find the product with the highest price in an array.
// If the array is empty, return null.

{
  interface Product {
    name: string;
    price: number;
  }

  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
  ];

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

  console.log(moreexpensive);
}
