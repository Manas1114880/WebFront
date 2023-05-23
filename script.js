class Square {
	constructor(x, y, plane, piece) {
		this.plane = plane;
		this.x = x
		this.y = y;
		this.piece = piece;
		this.id = "Square_" + x + "_" + y;

		this.elem = document.createElement("div");
		this.elem.classList.add("square");
		this.plane.elem.append(this.elem);
		this.elem.addEventListener("click", this.placeMove);
	}
	placeMove() {
		alert("I made a move");
		this.piece = new Piece(this, "square", "white", board);
		this.piece.displayPiece();
	}
}

class Piece {
	constructor(square, type, team, board) {
		this.board = board;
		this.team = team;
		this.square = square;
		this.id = "P_" + team + "_" + type + "_" + this.square.x
			+ "_" + this.square.y;

		this.elem = document.createElement("img");
		this.elem.classList.add("piece");
	}
	displayPiece() {
		alert("Piece has moved");
		this.square.append(this.elem);
		this.elem.src = "images.png";
	}
}

class Board {
	constructor() {
		const size = 4;
		this.planes = new Array(size);
		this.elem = document.createElement("div");
		this.elem.classList.add("board");
		document.body.append(this.elem);
		for (var i = 0; i < this.planes.length; i++) {
			this.planes[i] = new Plane(this);
		}
	}
}

class Plane {
	constructor(board) {
		this.board = board;
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
				this.squares[x][y] = new Square(x, y, this);
			}
		}
	}
}

var board = new Board();