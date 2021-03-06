class Audio{

  constructor(src){
    if(!src) throw new Error("Audio.src can't be empty.");
    this.src    = src;
    this.loop   = false;
  }

  play(){
    this.remove();
    let _src   = document.createElement('source');
    this.audio = document.createElement('audio');
    if(this.loop) this.audio.loop = true;
    _src.src = this.src;
    this.audio.appendChild(_src);
    this.audio.style.display = "none";
    document.getElementsByTagName('body')[0].appendChild(this.audio);
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
