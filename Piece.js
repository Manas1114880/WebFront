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
		this.square.append(this.elem);
		this.elem.src = "O.png";
	}
}