export interface Product {
  desc: string;
  price: number;
}

const phone: Product = {
  desc: "Nokia A1",
  price: 150.0,
};

const tablet: Product = {
  desc: "Ipad Air",
  price: 350.0,
};

const shoppingCart = [phone, tablet];

const tax = 0.15;

interface TaxCalcOptions {
  tax: number;
  products: Product[];
}

export function taxCalculation(options: TaxCalcOptions): [number, number] {
  let total = 0;
  /* Sin destructurar
  options.products.forEach( product => {
    total += product.price;
  });
  */
  /* Destructurando product para obtener solo price que es lo único que necesito*/
  options.products.forEach(({ price }) => {
    total += price;
  });
  return [total, total * options.tax];
}

/* Sin destructurar
const result = taxCalculation({
  products: shoppingCart,
  tax: tax,
});

console.log("Total", result[0]);
console.log("Tax", result[1]);
*/
/* Destructurando result*/
const [total, totalTax] = taxCalculation({
  products: shoppingCart,
  tax: tax,
});

console.log("06 - Total", total);
console.log("06 - Tax", totalTax);
