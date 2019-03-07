class Ship extends Actor {

  constructor(){
    super();
    var self = this;
    this.DOM.className = "ship";

    this.speed = 7;
    this.reloadTime = 0.1;
    this._reloading = false;
    this.position.x = 250;
    this.position.y = 250;
    this.life = 10;
    this.bullets = 0;
    this.dead = false;
    this.spawned = false;
    this.spawnSound = new Audio('/mp3/spawn-sound.wav', {preload : true});
    this.deadSound = new Audio('/mp3/dead-ship.wav',{preload : true});
    METRONOMO.tick.subscribe(()=>{
      if(this.bullets > 0){

        this.bullets = 0;
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
      }
      if(!this.dead && this.life <= 0){
        console.log("dying",this.deadSound);
        self.deadSound.play();
        this.dead = true;
      }
      if(!this.spawned){
        this.spawned = true;
        this.spawnSound.play();
      }
    })
  }


  move(vector){
    let limit = {
      bottom  : SCENE.layers.main.rect.height() - this.rect.height(),
      right   : SCENE.layers.main.rect.width() - this.rect.width()
    };
    this.position.x += vector.x * this.speed;
    this.position.y += vector.y * this.speed;
    if(this.position.x < 0) this.position.x = 0;
    if(this.position.y < 0) this.position.y = 0;
    if(this.position.x > limit.right) this.position.x = limit.right;
    if(this.position.y > limit.bottom) this.position.y = limit.bottom;
  }

  onCollision(obj){
    if(obj instanceof Bullet){
      console.log("Life:",this.life);
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
    this.bullets = 1;
  }

}
