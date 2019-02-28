class Player extends Ship{

  constructor(){
    super();

    this.DOM.id = "player";
    this.DOM.className = this.DOM.className + " player";
    this.speed = 7;
    this.reloadTime = 0.1;
    this.life = 1;
  }

  onCollision(obj){
    if(obj instanceof Ship){
      // this.life--;
      // console.log(obj);
    }
  }

}
