class Crypto {

  constructor(name, price, marketcap, volume, change) {

    this.name = name;
    this.price = price;
    this.marketcap = marketcap;
    this.volume = volume;
    this.change = change;

    this.x = 0; // Initialize to 0 for now
    this.y = 0
  }

  display() {

    let size = map(this.marketcap, 10000000, 1200000000, 20, 120);

    if (this.change > 0) {
      fill(0, 200, 0);
    } else {
      fill(200, 0, 0);
    }

    ellipse(this.x, this.y, size, size);

    fill(255);
    textSize(12);
    text(this.name, this.x - 20, this.y);

  }

}