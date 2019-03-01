class RedShip extends Ship{

  constructor(){
    super();

    this.DOM.className = this.DOM.className + " red";
    this.speed = 7;
    this.reloadTime = 0.1;
    this.life = 1;
    this._update = this.update.bind(this);
  }

  update(){
    if(this.life <= 0){
      this.remove();
    }else{
      this.move(new Vector2(0,1));
    }

  }

}
