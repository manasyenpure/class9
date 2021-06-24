

var a = prompt('Enter the first variable: ');
var b = prompt('Enter the first varible')
function setup(){
  var b2 = createButton("click here to Swap");
  b2.mousePressed(swap);
  }


function draw()
{
}
function swap(){
  [a,b] = [b,a];

  console.log("The value of a after swapping",+a);
  console.log("The value of a after swapping",+b);
}