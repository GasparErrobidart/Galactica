class Player extends Actor{

  constructor(DOM){
    super(DOM);
    this.speed = 7;
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

}
