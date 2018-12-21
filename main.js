const SCENE = new Scene({
  FPS : 30
})
const p = new Player();
const c = new Controller([
  {
    key : 'ArrowLeft',
    handler : p.move
  }
])

console.log(p);
