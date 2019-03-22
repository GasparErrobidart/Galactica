class Ship extends Actor {

  constructor(){
    super();

    this.DOM.className = "ship";
    this.speed = 7;
    this.reloadTime = 0.1;
    this._reloading = false;
    this.position.x = 250;
    this.position.y = 250;
    this.life = 10;

  }

  update(){
    if(this.life <= 0){
      this.remove();
    }
  }

  limits(){
    return {
      bottom  : SCENE.layers.main.rect.height() - this.rect.height(),
      right   : SCENE.layers.main.rect.width() - this.rect.width(),
      left : 0,
      top : 0
    };
  }

  move(vector){
    this.position.x += vector.x * this.speed;
    this.position.y += vector.y * this.speed;
    if(this.position.x < this.limits().left)    this.position.x = this.limits().left;
    if(this.position.y < this.limits().top)     this.position.y = this.limits().top;
    if(this.position.x > this.limits().right)   this.position.x = this.limits().right;
    if(this.position.y > this.limits().bottom)  this.position.y = this.limits().bottom;
  }

  onCollision(obj){
    if(obj instanceof Bullet){
      this.life -= 1;
    }
  }

  cannonPosition(){
    return new Vector2(
      (this.position.x + this.rect.width()/2) -4,
      this.position.y
    )
  }

  shoot(){
    if(!this._reloading){
      this._reloading = true;

      let blueBullet = new Bullet(
        this.cannonPosition(),
        new Vector2(0,-1),
        function(){

          // MISSILE
          // return new Vector2(
          //   (this.lifeTime()/50) ** 2,
          //   (this.lifeTime()/50) ** 2
          // );

          // STRAIGHT LASER
          return new Vector2(
            15,
            15
          );

        }
      );

      new BoxCollider(blueBullet);

      SCENE.add(
        blueBullet
      );


      setTimeout(
        ()=> this._reloading = false,
        this.reloadTime * 1000
      )
    }
  }

}
