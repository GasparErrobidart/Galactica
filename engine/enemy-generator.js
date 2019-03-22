class EnemyGenerator extends Actor{

  constructor(){
    super();
    this._nextTime = 0;
  }

  spawn(){
    let enemy = new RedShip();
    new BackgroundFrameAnimation(redShipAnimation , enemy);
    new BoxCollider(enemy);
    enemy.position = new Vector2(-2000,-2000);
    SCENE.add(enemy);
    enemy.position = new Vector2(
      randomRange(0,SCENE.layers.main.rect.width()-enemy.rect.width()),
      0
    );
  }

  update(){
    if(this._nextTime <= new Date().getTime()){
      this.spawn();
      this._nextTime = new Date().getTime() + randomRange(300,1000);
    }
  }

}
