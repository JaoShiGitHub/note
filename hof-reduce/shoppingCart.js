const shoppingCart = [
  { name: "Apple", price: 1.99, quantity: 3 },
  { name: "Apple", price: 1.99, quantity: 3 },
  { name: "Xiomi", price: 2.99, quantity: 2 },
  { name: "Samsung", price: 3.99, quantity: 1 },
  { name: "Tesla", price: 3.99, quantity: 1 },
  { name: "Tesla", price: 4.99, quantity: 4 },
  { name: "Nokia", price: 4.99, quantity: 4 },
];

const products = shoppingCart.reduce((productGroup, product) => {
    const name = product.name;
    if(productGroup[name] == null) {
        productGroup[name] = [];
    }
    productGroup[name].push(product);

    return productGroup;
}, {});

console.log(shoppingCart);

// OUTPUT
// {
//     Apple: [
//       { name: 'Apple', price: 1.99, quantity: 3 },
//       { name: 'Apple', price: 1.99, quantity: 3 }
//     ],
//     Xiomi: [ { name: 'Xiomi', price: 2.99, quantity: 2 } ],
//     Samsung: [ { name: 'Samsung', price: 3.99, quantity: 1 } ],
//     Tesla: [
//       { name: 'Tesla', price: 3.99, quantity: 1 },
//       { name: 'Tesla', price: 4.99, quantity: 4 }
//     ],
//     Nokia: [ { name: 'Nokia', price: 4.99, quantity: 4 } ]
//   }

const productGroup = {}
console.log(productGroup["Apple"]) // undefined
productGroup["Apple"] = []
console.log(productGroup) //{ Apple: [] }
productGroup["Apple"].push(shoppingCart[0])
productGroup["Apple"].push(shoppingCart[1])
console.log(productGroup)
// { Apple: 
//   [ { name: 'Apple', price: 1.99, quantity: 3 },
//     { name: 'Apple', price: 1.99, quantity: 3 } ] }