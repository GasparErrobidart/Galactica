const SCENE = new Scene({
  FPS : 60
})
const p = new Player(document.getElementById('player'));
const c = new Controller([
  {
    key : 'ArrowLeft',
    handler : ()=> p.move(new Vector2(-1,0))
  },
  {
    key : 'ArrowRight',
    handler : ()=> p.move(new Vector2(1,0))
  },
  {
    key : 'ArrowUp',
    handler : ()=> p.move(new Vector2(0,-1))
  },
  {
    key : 'ArrowDown',
    handler : ()=> p.move(new Vector2(0,1))
  }
])

SCENE.add(p);
SCENE.start();

console.log(p);
