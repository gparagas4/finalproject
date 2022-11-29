fmyCounter = 220;
myRandom = 80;
let y = 0 
let speed = 3;
rectMode = ("CENTER");
angleMode = ('DEGREES');
let img;

function preload () {
img = loadImage("Voting Ballot.jpg")
}

function setup() {
  createCanvas(1700, 1000);

 
  div = createDiv("VOTE NOW")
  div.class('neonText')
  div.style("font-size", "100px")
  div.position(500, 10)

  
   div = createDiv("FOR THE FUTURE")
   div.class('neonText')
   div.style("font-size", "100px")
   div.position(400, 800)


     div = createDiv("TIME'S TICKING")
     div.class('neonText')
     div.style("font-size", "20px")
     div.position(250 ,500)


}
function draw() {
  background("BLACK");
  image(img, 10, 0);
  image(img, 1250, 0);
  

  translate(1000, 1000);


    rotate(-90);
      let hr = hour();
      let mn = minute();
      let sc = second();
      
      fill(255);
      noStroke();
      text(hr +':'+ mn + ':' +sc, 10,200);
      
  
      strokeWeight(80);
      stroke(255, 100, 150);
      noFill();
      let secondAngle = map(sc, 0, 59, 0, 360); 
      arc (600, 0, 500,500, 0, secondAngle);
  
      stroke(150, 100, 255);
      let minAngle = map(mn, 0, 59, 0, 360);
      arc(600, 0, 300, 300, 0, minAngle);
  
      stroke(150, 255, 100);
      let hourAngle = map(hr % 12, 0, 12, 0, 360); 
      arc (600, 0, 100, 100, 0, hourAngle);
} 

    
  


