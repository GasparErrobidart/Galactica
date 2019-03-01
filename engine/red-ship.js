class RedShip extends Ship{

  constructor(){
    super();

    this.DOM.className = this.DOM.className + " red";
    this.speed = 7;
    this.reloadTime = 0.1;
    this.life = 10;
  }

}
