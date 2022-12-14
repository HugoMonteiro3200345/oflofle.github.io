let tabCores, data_element;

function preload() {
  
  tabCores = loadTable("tabelaDados.csv", "csv", "header");
}


function setup() {
  
  createCanvas (windowWidth, windowHeight);
  importData();
}


function draw() {
  
  background(240);
  drawData();
}

function windowResized() {
  
  resizeCanvas (windowWidth, windowHeight);
}