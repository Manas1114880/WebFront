class Square {
	constructor(x, y, z, plane) {
		this.plane = plane;
		this.x = x
		this.y = y;
		this.z = z;
		this.elem = document.createElement("img");
		this.elem.classList.add("square");
		this.plane.elem.append(this.elem);
		this.elem.addEventListener("click", (e)=>{this.placeMove(e);});
		console.log(this.plane.board.game);
	}
	placeMove(pass) {
		if (this.plane.board.state[this.x][this.y][this.z] == "blank") {
			if(this.plane.board.activePlayer == 0){
				this.plane.board.state[this.x][this.y][this.z] = "X";
				this.elem.src = "X.png";
			} else if(this.plane.board.activePlayer == 1){
				this.plane.board.state[this.x][this.y][this.z] = "O";
				this.elem.src = "O.png";
			}
			this.plane.board.game.checkWin();
			this.plane.board.activePlayer++;
			this.plane.board.activePlayer %= 2;
		} else if (this.plane.board.state[this.x][this.y][this.z] == "X" || this.plane.board.state[this.x][this.y][this.z] == "O")
			alert("This place is already occupied; please choose a different spot");
	}
}