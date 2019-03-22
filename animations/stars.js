const starsAnimation = (speed)=>{
  return {
    speed : speed || 1,
    frames : [
      function(){
        if(!this.meta.offset) this.meta.offset = 0;
        this.meta.offset += this.speed;
        this.DOM.style.backgroundPositionY = `${this.meta.offset}px`;
      }
    ]
  }
}
