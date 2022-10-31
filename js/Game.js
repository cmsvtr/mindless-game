//Classes

class MindlessTask {
    constructor() {
        this.player = '';
        this.timer = 0; //highscore is defined by how fast a player can reach 100 points
        this.level = 0; //game level. will define the speed the paperWork array is filled
        this.points = 0; //player must make 100 points
        this.mistakes = 0; //player can only have x mistakes
        this.formsWindow = ['./assets/form-h1.png', './assets/form-h2.png', './assets/form-h3.png'];
        this.formsRandom = this.formsWindow.sort(() => Math.random() - 0.5);
        this.formsInbox = [];
        this.checkArr = [/*array for comparing the paperWork[0] with paperWindow player clicked*/];
    };

    newForm () {
        let i = Math.floor(Math.random()*3);
        let forms = ['./assets/form-h1.png', './assets/form-h2.png', './assets/form-h3.png'];
        let form = forms[i];

        return form;
    };

    runTimer () {
        setInterval(() => {
            this.timer += 1;
            document.querySelector('#game-timer').innerHTML = this.timer;
        }, 1000);
    };

    clicked () {

        if (`${this.checkArr[0]}` === `${this.checkArr[1]}`) {
            this.points += 1;
        }else{
            this.mistakes += 1;
        }

        document.querySelector('#game-points').innerHTML = this.points;
        document.querySelector('#game-mistakes').innerHTML = this.mistakes;

        this.checkArr = [];

        if (this.formsInbox.length >= 20 || this.mistakes >= 10) {
            //loser message, .hides game window and pops up loser div.
        };

        if (this.points ===20) {
            //winner message, hides game window and show winner div. Winner div should include click for opening mini-game. If time allows.
        }

        this.formsInbox.shift();

        document.querySelector('#current-form').src = this.formsInbox[0];

    };

    setClerk () {

        document.querySelector('#clerk1').src = './assets/clerk-1.png';
        document.querySelector('#clerk2').src = './assets/clerk-1.png';
        document.querySelector('#clerk3').src = './assets/clerk-1.png';

    };
    
}


class MiniGame {
    constructor () {
        this.playTime = 10;
        this.points = 0;
    };
}