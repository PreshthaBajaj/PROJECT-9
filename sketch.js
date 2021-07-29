
function setup() {
  createCanvas(400,400);
}

function draw() 
{

  background(30);

  if (keyDown("down")){
    background ("yellow");
  }

  if (keyDown("right")){
    background ("red");
  }

  if (keyDown("left")){
    background ("blue");
  }

  if (keyDown("up")){
    background ("green");
  }

}




