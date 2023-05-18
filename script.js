class Square {
	constructor(x, y, board, piece) {
		this.board = board;
		this.x = x
		this.y = y;
		this.piece = piece;
		this.id = "Square_" + x + "_" + y;

		this.elem = document.createElement("div");
		this.elem.classList.add("square");
		console.log(this.board.elem);
		this.board.elem.append(this.elem);
		this.elem.addEventListener("click", this.placeMove);
		console.log("I build a square");
	}
	placeMove() {
		alert("I made a move");
		this.piece = new Piece(new Square(0, 0, board, ""), "square", "white", board);
		console.log(this.piece);
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

		this.elem = document.createElement("div");
		this.elem.classList.add("piece");

	}
	displayPiece() {
		alert("Piece has moved");
		this.square.elem.append(this.elem);
		this.elem.classList.add("mickyMouse");
	}
}

class Board {
	constructor(plane) {
		// TDOD: Board's need an element if im going going to put new elements into it
		this.plane = plane;
		this.elem = document.createElement("div");
		this.elem.classList.add("board");
		for (var i = 0; i < 4; i++) {
			this.plane = new Plane(Piece);
		}
	}
}

class Plane {
	constructor(pieces) {
		const size = 4;
		this.size = size;
		this.pieces = pieces;
		this.elem = document.createElement("main");
		document.querySelector(":root").style.setProperty("--xy", size);
		this.elem.classList.add("board");
		this.elem.setAttribute("style", "grid-template-columns: repeat(" + this.size + ",1fr);grid-template-rows: repeat(" + this.size + ",1fr);");
		this.squares = new Array(size);
		document.body.append(this.elem);
		this.drawSquares(this.size);
	}
	drawSquares(size) {
		for (var x = 0; x < this.size; x++) {
			this.squares[x] = new Array(size);
			for (var y = 0; y < this.size; y++) {
				this.squares[x][y] = new Square(x, y, this);
			}
		}
	}
}

////////////////////////////////////////////////
//var square = new Square(1,1,"", "");
//var piece = new Piece(square, "", "", "");
//var board = new Board(Piece);
var board = new Board(Plane);
//console.log(square);