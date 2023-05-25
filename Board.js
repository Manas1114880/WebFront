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