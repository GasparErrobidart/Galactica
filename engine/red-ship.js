class RedShip extends Ship{

  constructor(){
    super();

    this.DOM.className = this.DOM.className + " red";
    this.speed = 2;
    this.reloadTime = 0.1;
    this.life = 2;
    this._update = this.update.bind(this);
  }

  update(){
    if(this.dead){
      this.remove();
    }else{
      this.move(new Vector2(0,1));
    }

  }

}
