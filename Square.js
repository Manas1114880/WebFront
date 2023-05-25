class Square {
	constructor(x, y, plane, piece) {
		this.plane = plane;
		this.x = x
		this.y = y;
		this.piece = piece;
		this.id = "Square_" + x + "_" + y;

		this.elem = document.createElement("img");
		this.elem.classList.add("square");
		this.plane.elem.append(this.elem);
		this.elem.addEventListener("click", this.placeMove);
	}
	placeMove() {
		this.src = "X.png";
	}
}