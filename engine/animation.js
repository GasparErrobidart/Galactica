function Animation(){

  this.frames = [
    {
      x: -372,
      y: -1765
    },
    {
      x: -372,
      y: -1845
    },
    {
      x: -372,
      y: -1925
    }
  ]

  this.currentFrame = 0;

  this.render = ()=>{
    let player = document.getElementById('player');
    let frame = this.frames[this.currentFrame];
    player.style.backgroundPosition = `${frame.x}px ${frame.y}px`;
    this.currentFrame++;
    if(this.currentFrame >= this.frames.length) this.currentFrame = 0;
  }

  setInterval(()=> this.render(),1000/10,0)

}

new Animation();
