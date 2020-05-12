import Zoo from "./models/zoo.js";

class App {
  zoo = new Zoo();
}

window["app"] = new App();
