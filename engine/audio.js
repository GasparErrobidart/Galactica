class Audio{

  constructor(src,options = {}){
    if(!src) throw new Error("Audio.src can't be empty.");
    const {preload} = options;
    this.src    = src;
    this.loop   = false;
    this.preload = preload;
    if(this.preload) this.load();
  }

  load(){
    let _src   = document.createElement('source');
    if(!this.audio)this.audio = document.createElement('audio');
    if(this.loop) this.audio.loop = true;
    _src.src = this.src;
    this.audio.appendChild(_src);
    this.audio.style.display = "none";

    document.getElementsByTagName('body')[0].appendChild(this.audio);
  }

  play(){
    if(!this.preload) this.remove();
    if(!this.audio) this.load();
    this.audio.currentTime = 0;
    this.audio.addEventListener("canplay",()=>{
      this.audio.addEventListener("ended",()=>{
        this.remove();
      })
      this.audio.play()
    });
  }

  remove(){
    if(this.audio){
      this.audio.parentNode.removeChild(this.audio);
      delete this.audio;
    }
  }

  stop(){
    this.remove();
  }

}
