class Bullet extends Actor{

  constructor(DOM,position,acceleration){
    super(DOM);
    this.lifeTime = 0;
    this.acceleration = acceleration;
    this.position.x = x;
    this.position.y = y;
  }

  move(vector){
    let limit = {
      bottom  : SCENE.rect.height() - this.rect.height(),
      right   : SCENE.rect.width() - this.rect.width()
    };
    this.position.x += vector.x * this.speed;
    this.position.y += vector.y * this.speed;
    if(
      this.position.x < 0 ||
      this.position.y < 0 ||
      (this.position.x > limit.right) ||
      (this.position.y > limit.bottom)
    ){
      this.remove();
    }
  }

}
