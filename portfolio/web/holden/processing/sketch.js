let banana;

function preload() {
  banana = loadModel('banana.obj', true);
  img = loadImage('hd.combanana.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();

}

function draw() {
  resizeCanvas(windowWidth, windowHeight);
  magicBanana();
}

function magicBanana() {
  
  background(0);
  scale(3.5);
  rotateX(180);
  rotateY(frameCount * 0.01);
  
  directionalLight(250, 250, 250, -1, -1, -1);

  ambientLight(60);
  specularMaterial(2500);
  shininess(500000);
  
  model(banana);
  texture(img);
  
  } 