function getCheapestPhone(phones) {
  let min = phones[0];
  for (const phone of phones) {
    if (phone.price < min.price) {
      min = phone;
    }
  }
  return min;
}

const phones = [
  { name: 'Samsung', price: 20000, camera: '12mp', color: 'black' },
  { name: 'Apple', price: 50000, camera: '8mp', color: 'silver' },
  { name: 'Xiomi', price: 15000, camera: '6mp', color: 'olive' },
  { name: 'Oppo', price: 36000, camera: '8mp', color: 'white' },
  { name: 'Walton', price: 10000, camera: '4mp', color: 'nevy' }
]

console.log(getCheapestPhone(phones));