class BackgroundFrameAnimation extends Animation {

  constructor(options , actor){
    super( options , actor );
    const { frames } = options;
    if(!frames || frames.length < 1) throw new Error('Animation frames expected.');
    this.setFrames(frames);
  }

  setFrames(frames){
    this.totalFrames = frames.length;
    this._frames = frames.map((frame)=> (
      ()=> this.DOM.style.backgroundPosition = `${frame.x}px ${frame.y}px`
    ));
  }

}
