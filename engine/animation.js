class Animation{

  constructor(options,actor){
    const { totalFrames , startingFrame, frames, speed } = options;
    this.DOM = actor.DOM;
    this._frames = frames;
    this.meta = {};
    this.totalFrames = frames.length;
    this.currentFrame = startingFrame || 0;
    this.speed = speed || 1;
    actor.animation = this;
  }

  relativeFrame(){
    return Math.ceil(this.currentFrame * this.speed);
  }

  draw(){
    if(this.relativeFrame() >= this.totalFrames){
      this.currentFrame = 0;
    }
    this._frames[this.relativeFrame()].apply(this);
    this.currentFrame++;
  }

}
