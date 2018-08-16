const cards = [
{name: "Bulbasaur", damage:60}, 
{name: "Caterpie", damage:40},
{name: "Charmander", damage:60},
{name: "Clefairy", damage:50},
{name: "Jigglypuff", damage:60},
{name: "Mankey", damage:30},
{name: "Meowth", damage:60},
{name: "Nidoran - female", damage:60},
{name: "Nidoran - male", damage:50},
{name: "Oddish", damage:40},
{name: "Pidgey", damage:50},
{name: "Pikachu", damage:50},
{name: "Poliwag", damage:50},
{name: "Psyduck", damage:60},
{name: "Rattata", damage:30}, 
{name: "Squirtle", damage:60}, 
{name: "Vulpix", damage:50}, 
{name: "Weedle", damage:40},
]

const playerOne = {
	points: 0,
	battlesWon: 0,
	handOne: []
};
const playerTwo = {
	points: 0,
	battlesWon: 0,
	handTwo: []
};

const game = {
	library: cards,
	gameBoard: [],
	graveYard: [],
	currentRound: 0,
	shuffle(){
		let shuffle = Math.floor(Math.random() * this.library.length);
		let drawnCard = this.library.splice(shuffle, 1)[0];
		return drawnCard;
	},
	deal(){
		for(let i = 0; i < 3; i++){
			let dealPlayerOne = this.shuffle();
			playerOne.handOne.push(dealPlayerOne);
			let dealPlayerTwo = this.shuffle();
			playerTwo.handTwo.push(dealPlayerTwo);
		}
	},
	fight(){
		this.currentRound++
		console.log("ROUND " + this.currentRound)
		let cardOne = playerOne.handOne.splice(0,1)[0];
		let cardTwo = playerTwo.handTwo.splice(0,1)[0];
		console.log("Player One Chose " + cardOne.name);
		console.log("Player Two sent out " + cardTwo.name);
		if(cardOne.damage > cardTwo.damage){
			playerOne.points++
			console.log("Player One Won the Battle!")
			console.log("Player One has " + playerOne.points + " Points!")
		} else if(cardOne.damage < cardTwo.damage) {
			playerTwo.points++
			console.log("Player Two Won the Battle");
			console.log("Player Two has " + playerTwo.points + " Points!")
		} else {
			console.log("TIE!");
		}
		this.graveYard.push(this.cardOne);
		this.graveYard.push(this.cardTwo);
		console.log("/////////////////////////")
	},
	chooseWinner(){
		if(playerOne.points > playerTwo.points){
			console.log("Player One has won the Battle!")
			playerOne.battlesWon++
		} else {
			console.log("Player Two has won the Battle!")
			playerTwo.battlesWon++
		}
	},
	startGame(){
		this.deal()
		this.fight()
		this.fight()
		this.fight()
		this.chooseWinner()
	}
};

game.startGame();



























