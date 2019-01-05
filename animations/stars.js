const starsAnimation = {
  speed : 1,
  frames : [
    function(){
      if(!this.meta.offset) this.meta.offset = 0;
      this.meta.offset += 5;
      this.DOM.style.backgroundPositionY = `${this.meta.offset}px`;
    }
  ]
}
