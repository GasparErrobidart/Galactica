class Player extends Ship{

  constructor(){
    super();
    let initialSpeed = 7;
    this.DOM.id = "player";
    this.DOM.className = this.DOM.className + " player";
    this.speed = initialSpeed;
    this.reloadTime = 0.1;
    this.life = 1;

    SCORE_BOARD.on("increase",(score)=>{
      let deltaScore = (this.speed*1000) - (initialSpeed * 1000) + score;
      if( deltaScore % 1000 == 0  && this.speed < 10){
        this.speed +=1;
        console.log(this.speed);
      }
    });
  }

  onCollision(obj){
    if(obj instanceof Ship){
      // this.life--;
      // console.log(obj);
    }
  }

}
