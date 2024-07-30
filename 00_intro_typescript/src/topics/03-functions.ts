/* Function normal */
function addNumbers(a: number, b: number) {
  return a + b;
}
const result: number = addNumbers(1, 2);
console.log({ result }); //console.log usando {} para imprimir objetos
/* ** */

/* Function Arrow o Lambda */
const addNumbersArrow = (a: number, b: number): string => {
  return `${a + b}`; //Usar ` para trabajar con templates string capaces de resolver variables
};
const resultArrow: string = addNumbersArrow(1, 2);
/* ** */

console.log({ resultArrow });

/* Function con argumentos opcionales '?' */
function multiply(num1: number, num2?: number, base: number = 2) {
  return num1 * base;
}
const resultMultiply: number = multiply(5);
console.log({ resultMultiply });
/* ** */

/* Function con Objetos como argumentos */
interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}
const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
};
const strider: Character = {
  name: "Strider",
  hp: 50,
  showHp() {
    console.log(`Puntos de vida ${this.hp}`);
  },
};
healCharacter(strider, 20);
strider.showHp();
/* ** */
export {};
