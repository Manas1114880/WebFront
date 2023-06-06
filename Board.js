class Board {
	constructor(game) {
		this.players = ["X", "O"];
		this.activePlayer = 0;
		this.size = 3;
		this.game = game;
		this.state = new Array(this.size);
		this.t = 64;
		for (var i = 0; i < this.state.length; i++) {
			this.state[i] = new Array(this.state.length);
			for (var j = 0; j < this.state.length; j++) {
				this.state[i][j] = new Array(this.state.length);
				for (var k = 0; k < this.state.length; k++){
					this.state[i][j][k] = "blank"/* String.fromCharCode(this.t++) */;
				}
			}
		}
		this.planes = new Array(this.size);
		this.elem = document.createElement("div");
		this.elem.classList.add("board");
		document.body.append(this.elem);
		for (var i = 0; i < this.planes.length; i++) {
			this.planes[i] = new Plane(this, i);
		}
	}
	reset() {
		for(var i = 0; i < this.size; i++) {
			for(var j = 0; j < this.size; j++) {
				for(var k = 0; k < this.size; k++) {
					this.state[i][j][k] = "blank";
					this.planes[i].squares[j][k].elem.src = "empty.png";
				}
			}
		}
	}
}