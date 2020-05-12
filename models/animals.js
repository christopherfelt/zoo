//Alligator, Bear, Crow, Deer, Elephant, Fox, Giraffe, Hippo, Iguana, Jaguar, Kangaroo, Lepoard, Moose, Norwal, Owl, Peguin, Quail, Rhino,
//Snake, T-rex, UglyPerson, Velcro, Walrus, Yeti, Zebra

export class Alligator {
  constructor(name = "", color = "") {
    this.name = name;
    this.color = color;
    this.species = "alligator";
    this.type = "reptile";
    this.attackName = "eat";
    this.danger = 0.7;
    this.damage = 7;
    this.points = 10;
  }

  attack() {
    console.log(`I am gonna ${this.attackName} you`);
  }
}

export class Bear {
  constructor(name = "", color = "") {
    this.name = name;
    this.color = color;
    this.species = "bear";
    this.type = "mammal";
    this.attackName = "maul";
    this.danger = 0.5;
    this.damage = 8;
    this.points = 8;
  }

  attack() {
    console.log(`I am gonna ${this.attackName} you`);
  }
}

export class Crow {
  constructor(name = "", color = "") {
    this.name = name;
    this.color = color;
    this.species = "crow";
    this.type = "bird";
    this.attackName = "peck";
    this.danger = 0.1;
    this.damage = 1;
    this.points = 1;
  }

  attack() {
    console.log(`I am gonna ${this.attackName} you`);
  }
}

export class Deer {
  constructor(name = "", color = "") {
    this.name = name;
    this.color = color;
    this.species = "deer";
    this.type = "mammal";
    this.attackName = "impale";
    this.danger = Math.random();
    this.damage = Math.random() * 11;
    this.points = Math.random() * 11;
  }

  attack() {
    console.log(`I am gonna ${this.attackName} you`);
  }
}

export class Elephant {
  constructor(name = "", color = "") {
    this.name = name;
    this.color = color;
    this.species = "Elephant";
    this.type = "mammal";
    this.attackName = "crush";
    this.danger = Math.random();
    this.damage = Math.random() * 11;
    this.points = Math.random() * 11;
  }

  attack() {
    console.log(`I am gonna ${this.attackName} you`);
  }
}

export class Animal {
  constructor(name = "", color = "", species = "", type = "", attackName = "") {
    this.name = name;
    this.color = color;
    this.species = species;
    this.type = type;
    this.attackName = attackName;
    this.danger = Math.random();
    this.damage = Math.random() * 11;
    this.points = Math.random() * 11;
  }

  attack() {
    console.log(`I am gonna ${this.attackName} you`);
  }
}
