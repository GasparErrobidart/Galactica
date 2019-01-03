class Player extends Actor{

  constructor(){
    super();

    this.DOM.id = "player";
    this.DOM.className = "ship player";

    this.speed = 7;
    this.reloadTime = 0.1;
    this._reloading = false;
    this.position.x = 250;
    this.position.y = 250;
  }

  move(vector){
    let limit = {
      bottom  : SCENE.rect.height() - this.rect.height(),
      right   : SCENE.rect.width() - this.rect.width()
    };
    this.position.x += vector.x * this.speed;
    this.position.y += vector.y * this.speed;
    if(this.position.x < 0) this.position.x = 0;
    if(this.position.y < 0) this.position.y = 0;
    if(this.position.x > limit.right) this.position.x = limit.right;
    if(this.position.y > limit.bottom) this.position.y = limit.bottom;
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
      console.log("pew pew");


      SCENE.add(
        new Bullet(
          this.cannonPosition(),
          new Vector2(0,-1),
          function(){
            // return new Vector2(
            //   (this.lifeTime()/50) ** 2,
            //   (this.lifeTime()/50) ** 2
            // );

            return new Vector2(
              (this.lifeTime()/25),
              (this.lifeTime()/25)
            );
          }
        )
      );


      setTimeout(
        ()=> this._reloading = false,
        this.reloadTime * 1000
      )
    }
  }

}
