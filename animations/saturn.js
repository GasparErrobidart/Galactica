const saturnAnimation = {
  frames : [
    function(){
      if(!this.meta.offset) this.meta.offset = -120;
      this.meta.offset += 0.01;
      this.DOM.style.top = `${Math.ceil(this.meta.offset)}px`;
      this.DOM.style.left = "70%";
    }
  ]
}
