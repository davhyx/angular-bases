export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "David",
};
const passenger2: Passenger = {
  name: "David",
  children: ["Eva"],
};

const printChildren = (passenger: Passenger) => {
  const howManyChildren = passenger.children?.length ?? 0;
  console.log(passenger.name + " tiene " + howManyChildren + " hijos.");
};

printChildren(passenger1);
printChildren(passenger2);
