var data = { discount: "", products: { name: "", price: "" } };

var data = { discount: "", products: { name: "", price: "" } };

function calculate(data) {
  // your code here 商品的價格*折扣
  let sum = 0;
  for (var i = 0; i < data.products.length; i++) {
    //console.log(data.products[i].price)
    sum = sum + data.products[i].price;
  }
  return sum * (data.discount + 1);
}
const discountedPrice = calculate({
  discount: 0.1,
  products: [
    { name: "Product 1", price: 100 },
    { name: "Product 2", price: 700 },
    { name: "Product 3", price: 250 },
  ],
});
console.log(discountedPrice);
