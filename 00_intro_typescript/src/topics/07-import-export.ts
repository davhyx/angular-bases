import { Product, taxCalculation } from "./06-function-destructuring";

const shoppingCart: Product[] = [
  {
    desc: "Nokia B2",
    price: 180.0,
  },
  {
    desc: "Ipad Pro",
    price: 650.0,
  },
];

const tax = 0.15;

const [total, totalTax] = taxCalculation({
  products: shoppingCart,
  tax: tax,
});

console.log("07 - Total", total);
console.log("07 - Tax", totalTax);
