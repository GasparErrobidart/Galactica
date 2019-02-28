class Player extends Ship{

  constructor(){
    super();

    this.DOM.id = "player";
    this.DOM.className = this.DOM.className + " player";

    this.speed = 7;
    this.reloadTime = 0.1;
  }

  onCollision(collision){
    console.log("Collision",collision);
  }

}
