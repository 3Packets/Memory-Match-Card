const BOARD_WIDTH = 4;
const BOARD_HEIGHT = 4;


let board = [];
for(let rowIndex = 0; rowIndex < BOARD_HEIGHT; ++rowIndex){
	board.push ([]);
	for(let colIndex = 0; colIndex < BOARD_WIDTH; ++colIndex){
		board[rowIndex].push(value: null, faceDown: true));


      }
}
console.log(board);
const NUM_ITEMS = BOARD_WIDTH *BOARD_HEIGHT /2;

for(let item = 0; item < NUM_ITEMS; ++item){
	for(let pairIndex = 0; pairIndex < 2; ++pairIndex){
	while (true){
		let row = Math.floor(Math.random () * BOARD_HEIGHT);
		let col = Math.floor(Math.random () * BOARD_WIDTH);
		if(board[row][col].value === null){
		board [row].value =item;
		break;
		}
	}
}
}
console.log(board);
board[rowIndex][index];
const cards = document.querySelectorAll('.memory-card');

function flipcard() {
	this.classList.add('flip');
 if (!hasFlippedCard){
}
cards.forEach(card =>.addEventListener('click', flipCard));