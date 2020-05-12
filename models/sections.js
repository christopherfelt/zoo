import { Alligator, Bear, Crow, Deer, Elephant, Animal } from "./animals.js";

// PRIVATE

let animals = [
  new Alligator("Fred", "red"),
  new Bear("Dan", "black"),
  new Crow("Nance", "yellow"),
  new Deer("Drake", "purple"),
  new Elephant("Edward", "jasmine"),
  new Animal("Phoenix", "black", "fox", "mammal", "pounce on"),
  new Animal("Ted", "mauve", "Giraffe", "mammal", "close-line"),
  new Animal("Amos", "lime", "hippo", "mammal", "bite"),
];

function getAllOfOneType(animalType) {
  let sectionArray = [];
  for (let i = 0; i < animals.length; i++) {
    if (animals[i].type == animalType) {
      sectionArray.push(animals[i]);
    }
  }
  return sectionArray;
}

// PUBLIC
export class Section {
  constructor(animalType) {
    this.type = animalType;
    this.section = getAllOfOneType(animalType);
  }

  addAnimal() {
    if (this.type == "reptile") {
      this.section.push(new Alligator("frank", "green"));
    } else if (this.type == "mammal") {
      this.section.push(new Bear("barry", "brown"));
    } else if (this.type == "bird") {
      this.section.push(new Crow("sisco", "gray"));
    }
  }
}
