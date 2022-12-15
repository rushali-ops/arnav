
var box1,box2

function setup() 
{
  createCanvas(400, 400);

  box1=new Box(20,200,20,50)
box2=new Box(80,100,20,50)


}

function draw() 
{
  background(220);
  box1.show()
  box2.show()
}

