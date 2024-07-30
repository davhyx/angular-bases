export class Person {
  // public name: string;
  // public address: string;

  //Definiéndolo dentro del constructor, al instanciar sabemos que parámetros espera la Class y su Tipo.
  constructor(
    public name: string,
    public lastname: string,
    private address: string = "No address"
  ) {
    //this.name = "Fernando";
    //this.address = "Costa Rica";
  }
}

/* export class Hero extends Person {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string
  ) {
    super(realName, "New York");
  }
} */

//Cambio de extend a priorizar composición
export class Hero {
  //public person: Person;
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person //Al instanciar Person, es como hacer el extend, pero ahora cada class se maneja sin depender de la otra en cuanto a modificar código.
  ) {
    //this.person = new Person(realName);
  }
}

//const ironMan = new Person();
//const ironMan = new Person("Ironman", "New York");
//const ironMan = new Hero("IronMan", 45, "Tony");
const tony = new Person("Tony", "Stark", "New York");
const ironMan = new Hero("IronMan", 45, "Tony", tony);

console.log(ironMan);
