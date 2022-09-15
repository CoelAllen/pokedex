import { ApiPokesController } from "./Controllers/apiPokesController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { ActivePokeController } from "./Controllers/ActivePokeController.js"
import { SandboxPokesController } from "./Controllers/SandboxPokesController.js"

class App {
  apiPokesController = new ApiPokesController()
  activePokeController = new ActivePokeController()

  sandboxPokesController = new SandboxPokesController ()
}

window["app"] = new App();
