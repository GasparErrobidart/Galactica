class Tempo{

  constructor(options){
    const { bpm , beep , beatSrc , compass, volume } = options;
    this.tick = new Rx.Subject();
    this.bpm = bpm;
    this.volume = volume || 1;
    this.beep = beep;
    this.loop = null;
    this.count = 0;
    this.compass = compass || 1;
    this._tickSample = new Audio( beatSrc || '/mp3/tick.wav',{preload  : true, volume : this.volume });
  }

  beat(){
    this.count++;
    this.tick.next({
      count : this.count,
      delta : this.count%this.bpm
    });
    if(this.beep && this.count%this.compass == 0) this._tickSample.play();
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
