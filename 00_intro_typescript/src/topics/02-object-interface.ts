//const skills: string[] = ["Bash", "Counter", 'Healing'];

interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string; //? indica opcional
}

const strider: Character = {
  name: "Strider",
  hp: 100,
  skills: ["Bash", "Counter"],
};

strider.hometown = "Rivendel";

console.table(strider);
export {};
