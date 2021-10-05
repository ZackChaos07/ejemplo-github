class Enemy {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
  }

  update(dt) {
    this.x += this.speed * dt;
    if (this.x > 505) {
      this.x = -100;
    }
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}