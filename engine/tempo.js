class Tempo{

  constructor(options){
    const { bpm , beep } = options;
    this.tick = new Rx.Subject();
    this.bpm = bpm;
    this.beep = beep;
    this.loop = null;
    this.count = 0;
    this._tickSample = new Audio('/mp3/tick.wav',{preload  : true });
  }

  beat(){
    this.count++;
    this.tick.next({
      count : this.count,
      delta : this.count%this.bpm
    });
    if(this.beep) this._tickSample.play();
  }

  start(){
    this.loop = setInterval(()=>{
      this.beat();
    },60000/this.bpm,0);
  }

  stop(){
    clearInterval(this.loop);
    this.count = 0;
  }

}
