let table;
let cryptos = [];

function preload() {

  table = loadTable("D:\CryptoDataVisualization\data", "csv", "header");

}

function setup() {
  createCanvas(900, 600); // Now width and height are 900 and 600

  for (let r = 0; r < table.getRowCount(); r++) {
    // ... your existing table.get commands ...
    
    let c = new Crypto(name, price, marketcap, volume, change);
    
    // Assign positions NOW that width/height exist
    c.x = random(width); 
    c.y = random(height);
    
    cryptos.push(c);
  }
}


function draw() {

  background(30);

  for (let c of cryptos) {
    c.display();
  }

}