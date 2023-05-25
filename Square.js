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
	}
	placeMove(pass) {
		if (this.plane.board.state[this.x][this.y][this.z] == "blank") {
			this.elem.src = "X.png";
			this.plane.board.state[this.x][this.y][this.z] = "X";
		} else if (this.plane.board.state[this.x][this.y][this.z] == "X" || this.plane.board.state[this.x][this.y][this.z] == "Y")
			alert("This place is already occupied; please choose a different spot");
	}
}