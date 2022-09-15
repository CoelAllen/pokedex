export class ApiPoke {
  constructor(data){
    this.name = data.name
    this.url = data.url
  }

  get ListTemplate(){
    return /*html*/ `
    <div class="selectable no-select p-3" onclick="app.apiPokesController.getPokesDetails('${this.url}')">
      <p><i class="mdi mdi-pokeball"></i>  ${this.name} </p>
      </div>
    `

  }
}