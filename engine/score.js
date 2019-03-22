class Score{

  constructor(){
    this.score = 0;
    this.integrity = 10;
    this._reactor = new Reactor();
    this._reactor.registerEvent('increase');
    this._reactor.registerEvent('escape');
    this.on = this._reactor.addEventListener.bind(this._reactor);
    this.scoreUI = new TextUI({text : "SCORE<br>0000000000" , name : "score"});
    SCENE.add(this.scoreUI, "ui");
    this.gameOverUI = new TextUI({text : "<span>GAME OVER</span>" , name : "game-over"});
    this.gameOverUI.hide();
    SCENE.add(this.gameOverUI, "ui");
  }

  getScore(){
    return this.score;
  }

  add(amount){
    this.score += amount;
    let decimals = ("" + this.score).length;
    let formatedScore = "";
    for(let i = 0; i < 10-decimals; i++){formatedScore += 0};
    formatedScore += this.score;
    this.scoreUI.setText("SCORE<br>"+formatedScore);
    this._reactor.dispatchEvent('increase',this.score);
  }

  escape(){
    this.integrity -= 1;
    this._reactor.dispatchEvent('escape',this.integrity);
    if(this.integrity <= 0){
      console.log("Game Ended")
      this.gameOverUI.show();
      SCENE.end();
    }
  }

}
