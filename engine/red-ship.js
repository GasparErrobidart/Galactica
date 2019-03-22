class RedShip extends Ship{

  constructor(){
    super();

    this.DOM.className = this.DOM.className + " red";
    this.speed = 7;
    this.reloadTime = 0.1;
    this.life = 1;
    this._update = Ship.prototype.update.bind(this);
    this._parentLimits = Ship.prototype.limits.bind(this);
  }

  update(){
    if(this.life <= 0) SCORE_BOARD.add(100);
    if(this.life <= 0 || SCENE.isOutside("main",this)){
      this.remove();
    }else{
      this.move(new Vector2(0,1));
    }
  }


  limits(){
    let limits = this._parentLimits();
    let w = this.rect.width(), h = this.rect.height();
    limits.left     = w * -1;
    limits.top      = h * -1;
    limits.bottom  += h*1.1;
    limits.right   += w*1.1;
    return limits;
  }

}
