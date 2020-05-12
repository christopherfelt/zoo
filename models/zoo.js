import { Section } from "./sections.js";

function drawAnimals(animalObject) {
  let template = "";
  let mammalsSection = document.getElementById("mammals");
  let reptileSection = document.getElementById("reptiles");
  let birdSection = document.getElementById("birds");
  for (let i = 0; i < animalObject.section.length; i++) {
    let an = animalObject.section[i];

    template += /*html*/ `
            <div class="border" onclick="app.zoo['${an.type}s'].section[${i}].attack()">
                <h6>${an.name}</h6>
                <p>${an.species}</p>
            </div>
            `;
  }
  if (animalObject.type == "mammal") {
    mammalsSection.innerHTML = template;
  }
  if (animalObject.type == "reptile") {
    reptileSection.innerHTML = template;
  }
  if (animalObject.type == "bird") {
    birdSection.innerHTML = template;
  }
}

export default class Zoo {
  constructor() {
    this.mammals = new Section("mammal");
    this.reptiles = new Section("reptile");
    this.birds = new Section("bird");
    drawAnimals(this.mammals);
    drawAnimals(this.reptiles);
    drawAnimals(this.birds);
  }
  drawNewMammal() {
    this.mammals.addAnimal();
    drawAnimals(this.mammals);
  }
}
