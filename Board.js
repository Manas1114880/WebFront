class Board {
	constructor(game) {
		this.players = ["X", "O"];
		this.activePlayer = 0;
		const size = 3;
		this.game = game;
		this.state = new Array(size);
		for (var i = 0; i < this.state.length; i++) {
			this.state[i] = new Array(this.state.length);
			for (var j = 0; j < this.state.length; j++) {
				this.state[i][j] = new Array(this.state.length);
				for (var k = 0; k < this.state.length; k++)
					this.state[i][j][k] = "blank";
			}
		}
		this.planes = new Array(size);
		this.elem = document.createElement("div");
		this.elem.classList.add("board");
		document.body.append(this.elem);
		for (var i = 0; i < this.planes.length; i++) {
			this.planes[i] = new Plane(this, i);
		}
	}
}