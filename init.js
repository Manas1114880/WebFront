onload = (event) => {
    this.game = new Game();
    document.getElementById("reset").addEventListener("click", (e) => {this.game.b.reset()});
};