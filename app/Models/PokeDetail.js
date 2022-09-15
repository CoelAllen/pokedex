export class PokeDetail{
  constructor(data){
    this.id = data.id
    this.name = data.name
    this.nickName = data.nickName
    // TODO FIGURE OUT IMG
    
    this.imgUrl = data.imgUrl
    this.weight = data.weight
    this.height = data.height
    this.types = data.types
  }

  get CardTemplate(){
    return /*html*/`
    <div class="col-md-6 text-center">
              <div class="bg-danger border border-dark mt-5">
                <h2>${this.name}</h2>
                <h3>${this.nickName}</h3>
              </div>
              <img style="width:auto; height: 60vh" src="${this.imgUrl}" alt="">
              <div class="bg-danger border border-dark border-5 mt-3 d-flex">
                <div class="border border-secondary border-5 bg-light w-100 mx-5 d-flex flex-wrap p-3">
                  <p class="col-6">height: ${this.height}</p>
                  <p class="col-6">Weight: ${this.weight}</p>
                  <p class="col-6">Types: ${this.types}</p>
                  <div class=" d-flex w-100 justify-content-end mx-5 my-2">
                    <button class="btn btn-outline-danger w-40">Catch</button>
                  </div>
                </div>
              </div>
            </div>
    `
  }
}