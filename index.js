const squares = document.querySelectorAll(".square");
const sqauresAll = Array.from(squares);
var numSquares = 6;

// function to Generate a random number in RGB format rgb(255, 99, 71)
function generateRandomColors() {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	return `rgb(${r},${g},${b})`;
}
// loop through all div boxes with a selected random color 
function newColors() {
	sqauresAll.forEach(cur => {
		cur.style.backgroundColor = generateRandomColors()
		cur.style.opacity = 1;
	});
	document.querySelector("h1").style.backgroundColor = "steelblue";
	document.querySelector("#reset").textContent = "NEW COLORS";
	document.querySelector("#message").textContent = "";
	var selectedColor = pickColor(numSquares);
	document.querySelector("#colorDisplay").textContent = selectedColor;

	for (var i = 0; i < squares.length; i++)
		squares[i].addEventListener("click", function () {
			var clicked = this.style.backgroundColor;;
			if (clicked === selectedColor) {
				sqauresAll.forEach(cur => cur.style.backgroundColor = clicked);
				document.querySelector("h1").style.backgroundColor = clicked;
				document.querySelector("#message").textContent = "Correct ! YOU WON";
				document.querySelector("#reset").textContent = "PLAY AGAIN";
				sqauresAll.forEach(cur =>cur.style.opacity = 1);
			} else {
				document.querySelector("#message").textContent = "WRONG TRY AGAIN";
				this.style.opacity = 0;
			}
		})
};
// select a random color from generated colors #issue.1 it is generating 6 colors but want to generate 3 colors on easy mode
function pickColor(num) {
	var random = Math.floor(Math.random() * num);
	var pickedColor = squares[random].style.backgroundColor;
	return pickedColor;
}
// pon clicking on easy and hard style visible none and block;
document.querySelector("#easy").addEventListener("click", () => {
	for (var i = 3; i < squares.length; i++) {
		squares[i].style.display = "none";
		numSquares = 3;
		document.querySelector("#hard").classList.remove("selected");
		document.querySelector("#easy").classList.add("selected");
	}
	newColors();
});
document.querySelector("#hard").addEventListener("click", () => {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.display = "block";
		numSquares = 6;
		document.querySelector("#easy").classList.remove("selected");
		document.querySelector("#hard").classList.add("selected");
	}
	newColors();
});
// New Game button should reset all the colors
document.querySelector("#reset").addEventListener("click", () => newColors());
newColors();

