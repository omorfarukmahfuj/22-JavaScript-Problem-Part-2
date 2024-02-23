function getShoppingTotal(products) {
  let totalPrice = 0;
  for (const product of products) {
    totalPrice += product.price;
  }
  return totalPrice;
}

const product = [
  { name: 'shampoo', price: 100 },
  { name: 'shirt', price: 1200 },
  { name: 'pant', price: 800 },
  { name: 'phone case', price: 300 }
]

console.log(getShoppingTotal(product));