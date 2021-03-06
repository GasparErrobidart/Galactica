class Bullet extends Actor{

  constructor(position,direction,acceleration){
    super();
    this.DOM.className = "bullet";
    this.direction = direction;
    this.acceleration = acceleration;
    this.position = position;
    this._spawnTime = new Date().getTime();
    this.sound = {
      shoot : new Audio("/mp3/laser-shot.mp3")
    };
    this.sound.shoot.play();
  }

  lifeTime(){
    return new Date().getTime() - this._spawnTime;
  }

  update(){
    this.move();
  }

  onCollision(obj){
    this.remove();
  }

  move(){
    let limit = {
      bottom  : SCENE.layers.main.rect.height() - this.rect.height(),
      right   : SCENE.layers.main.rect.width() - this.rect.width()
    };

    this.position.x += this.acceleration().x * this.direction.x;
    this.position.y += this.acceleration().y * this.direction.y;

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
