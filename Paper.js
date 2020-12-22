class Paper{

constructor(x,y){
  var options = {
   isStatic : false,
   restitution : 0.3,
   friction : 0.5,
   density : 1.2  
    }

  this.body = Bodies.circle(x,y, 25, options);

  this.r = 25;
  this.image = loadImage("paper.png")
  World.add(world, this.body);

}
display()
{
var paperpos = this.body.position
var angle = this.body.angle
push()
// translate(paperpos.x,paperpos.y)
// rotate(angle)
strokeWeight(3);
fill("white")
imageMode(CENTER);
image(this.image,paperpos.x,paperpos.y,70,70);
pop();



}

}