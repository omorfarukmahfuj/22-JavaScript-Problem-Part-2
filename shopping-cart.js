function getShoppingTotal(products) {
  let totalPrice = 0;
  for (const product of products) {
    const productPrice = product.price * product.quantity;
    totalPrice += productPrice;
  }
  return totalPrice;
}

const product = [
  { name: 'shampoo', price: 100, quantity: 2 },
  { name: 'shirt', price: 1200, quantity: 2 },
  { name: 'pant', price: 800, quantity: 3 },
  { name: 'phone case', price: 300, quantity: 1 }
]

console.log(getShoppingTotal(product));