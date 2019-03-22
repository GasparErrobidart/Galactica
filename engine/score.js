class Score{

  constructor(){
    this.score = 0;
    this.UI = new TextUI({text : "SCORE<br>000000000000" , name : "score"});
    SCENE.add(this.UI, "ui");
  }

  getScore(){
    return this.score;
  }

  add(amount){
    this.score += amount;
    this.UI.setText("SCORE<br>"+this.score);
  }

}
