class Player extends Actor{

  constructor(DOM){
    super(DOM);
    this.speed = 1;
  }

  move(vector){
    this.position.x += vector.x * this.speed;
    this.position.y += vector.y * this.speed;
    console.log(vector,this.position);
  }

}
