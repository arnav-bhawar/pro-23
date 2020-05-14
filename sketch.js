var box1,box2,box3


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  box1=new box(200,200,100,50);

}

function draw() {
  background(255,255,255);  

  box1.display();





  drawSprites();
}