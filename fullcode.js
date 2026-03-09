// 1. THE CLASS DEFINITION
class Crypto {
  constructor(name, price, marketcap, volume, change) {
    this.name = name;
    this.price = price;
    this.marketcap = marketcap;
    this.volume = volume;
    this.change = change;
    this.x = 0; 
    this.y = 0;
  }

  display() {
    // Map the marketcap to a circle size between 20 and 120 pixels
    let size = map(this.marketcap, 10000000, 1200000000, 20, 120);

    if (this.change > 0) {
      fill(0, 200, 0); // Green for positive change
    } else {
      fill(200, 0, 0); // Red for negative change
    }

    noStroke();
    ellipse(this.x, this.y, size, size);

    fill(255);
    textSize(12);
    textAlign(CENTER, CENTER);
    text(this.name, this.x, this.y);
  }
}

// 2. THE HARDCODED DATA (2D Array)
let tableData = [
  ["Bitcoin", 65000, 1200000000, 35000000, 2.5],
  ["Ethereum", 3200, 450000000, 20000000, -1.2],
  ["BNB", 600, 90000000, 8000000, 1.3],
  ["Solana", 150, 60000000, 10000000, 3.8],
  ["Cardano", 0.50, 20000000, 4000000, -0.5],
  ["XRP", 0.70, 35000000, 7000000, 1.1],
  ["Dogecoin", 0.12, 15000000, 5000000, 4.5],
  ["Polkadot", 7.5, 10000000, 3000000, -2.1]
];

let cryptos = [];

// 3. THE SKETCH LOGIC
function setup() {
  createCanvas(900, 600);

  // Loop through the 2D array to create Crypto objects
  for (let r = 0; r < tableData.length; r++) {
    let name = tableData[r][0];
    let price = tableData[r][1];
    let marketcap = tableData[r][2];
    let volume = tableData[r][3];
    let change = tableData[r][4];
    
    let c = new Crypto(name, price, marketcap, volume, change);
    
    // Assign random positions within the canvas
    c.x = random(50, width - 50); 
    c.y = random(50, height - 50);
    
    cryptos.push(c);
  }
}

function draw() {
  background(30);

  for (let c of cryptos) {
    c.display();
  }
}