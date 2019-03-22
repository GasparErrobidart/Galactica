class TextUI extends Actor{

  constructor(options){
    super();
    const { text, name } = options;
    this.classes = ["ui","ui-text" , name || "" ];
    this.updateClasses();
    this.setText(text || "UI Text");
  }

  setText(text){
    this.DOM.innerHTML = text;
  }

  updateClasses(){
    this.DOM.className = this.classes.join(" ");
  }

}
