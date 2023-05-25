class Plane {
	constructor(board, level) {
		this.board = board;
		this.level = level;
		const size = 4;
		this.size = size;
		this.squares = new Array(size);
		this.elem = document.createElement("div");
		this.elem.classList.add("plane");
		document.querySelector(":root").style.setProperty("--xy", size);
		this.elem.setAttribute("style", "grid-template-columns: repeat(" + this.size + ",1fr);grid-template-rows: repeat(" + this.size + ",1fr);");
		this.board.elem.append(this.elem);
		this.drawSquares(this.size);
	}
	drawSquares(size) {
		for (var x = 0; x < this.size; x++) {
			this.squares[x] = new Array(this.size);
			for (var y = 0; y < this.size; y++) {
				this.squares[x][y] = new Square(x, y, this.level, this);
			}
		}
	}
}