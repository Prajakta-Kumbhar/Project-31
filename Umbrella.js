class Umbrella
{
  constructor(xpos,ypos)
  {
     var umbrella_options = 
     {
         isStatic: true,
     }
     this.body = Bodies.circle(xpos,ypos,110,umbrella_options)
     this.radius = 100
     this.image = loadImage("images/WalkingFrame/walking_1.png")
     World.add(world,this.body)
  }
  display()
  {
    var position = this.body.position;
    imageMode(CENTER);
    image(this.image, position.x, position.y, 300,300)
    
  }
}