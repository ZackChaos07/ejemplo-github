class GameManager {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.game = new Game(this.canvas, this.ctx);
        this.game.start();
    }
}