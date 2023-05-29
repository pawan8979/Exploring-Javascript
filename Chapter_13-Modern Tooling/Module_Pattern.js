//Module Pattern

//IIFE
let resultIIFE = (function () {
  let orders = [];
  let addToCart = function (product, quantity) {
    console.log(`${product} ordered ${quantity}`);
    orders.push({ product, quantity });
  };
  return {
    orders,
    addToCart,
  };
})();

resultIIFE.addToCart("BUrger", 3);
resultIIFE.addToCart("Biryani", 5);

console.log(resultIIFE.orders);
