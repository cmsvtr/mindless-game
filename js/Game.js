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
        this.formInterval = [];
        this.timerInterval = [];
    };

    newForm () {
        let i = Math.floor(Math.random()*3);
        let forms = ['./assets/form-h1.png', './assets/form-h2.png', './assets/form-h3.png'];
        let form = forms[i];

        return form;
    };

    addForm () {
        this.formInterval[0] = setInterval(() => {
            this.formsInbox.push(this.newForm());
            document.querySelector('#game-inbox').innerHTML = this.formsInbox.length        
        }, 750);
    }

    runTimer () {
        this.timerInterval[0] = setInterval(() => {
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
            document.querySelector('#loser-window').setAttribute('class', 'show box');
            clearInterval(this.formInterval[0]);
            clearInterval(this.timerInterval[0]);
        };

        if (this.points === 50) {
            document.querySelector('#end-timer').innerHTML = this.timer;
            document.querySelector('#winner-window').setAttribute('class', 'show box');
            clearInterval(this.formInterval[0]);
            clearInterval(this.timerInterval[0]);
        }

        this.formsInbox.shift();

        if (this.formsInbox.length === 0) {
            document.querySelector('#current-form').src = this.newForm();
        }else{      
        document.querySelector('#current-form').src = this.formsInbox[0];
        };

    };

    setClerk () {

        document.querySelector('#clerk1').src = './assets/clerk.gif';
        document.querySelector('#clerk2').src = './assets/clerk.gif';
        document.querySelector('#clerk3').src = './assets/clerk.gif';

    };
    
}


class TicTacToe {
    constructor () {
        this.fields = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.played = [];
        this.humPlayed = [];
        this.botPlayed = [];
        this.wins = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
    };

    checkWinHum () {
        this.wins.forEach (win => {
            //win.every(pos => this.humPlayed.includes(pos)) ? return //win sequence or continues;
        });

    };

    checkWinBot () {
        this.wins.forEach (win => {
            //win.every(pos => this.botPlayed.includes(pos)) ? return win sequence or continues;
        });

    };

    clickFunction () {
        document.querySelector("#one-one").addEventListener('click', () => {
            document.querySelector('#one-one').innerHTML = 'X';
            this.humPlayed.push(1);
            this.played.push(1);
            this.checkWinHum;
            //bot plays after timeout
            this.checkWinBot;
        });

        document.querySelector("#one-two").addEventListener('click', () => {
            document.querySelector('#one-two').innerHTML = 'X';
            this.humPlayed.push(1);
            this.played.push(1);
            this.checkWinHum;
            //bot plays after timeout
            this.checkWinBot;
        });

        document.querySelector("#one-three").addEventListener('click', () => {
            document.querySelector('#one-three').innerHTML = 'X';
            this.humPlayed.push(1);
            this.played.push(1);
            this.checkWinHum;
            //bot plays after timeout
            this.checkWinBot;
        });

        document.querySelector("#two-one").addEventListener('click', () => {
            document.querySelector('#two-one').innerHTML = 'X';
            this.humPlayed.push(1);
            this.played.push(1);
            this.checkWinHum;
            //bot plays after timeout
            this.checkWinBot;
        });

        document.querySelector("#two-two").addEventListener('click', () => {
            document.querySelector('#two-two').innerHTML = 'X';
            this.humPlayed.push(1);
            this.played.push(1);
            this.checkWinHum;
            //bot plays after timeout
            this.checkWinBot;
        });

        document.querySelector("#two-three").addEventListener('click', () => {
            document.querySelector('#two-three').innerHTML = 'X';
            this.humPlayed.push(1);
            this.played.push(1);
            this.checkWinHum;
            //bot plays after timeout
            this.checkWinBot;
        });

        document.querySelector("#three-one").addEventListener('click', () => {
            document.querySelector('#three-one').innerHTML = 'X';
            this.humPlayed.push(1);
            this.played.push(1);
            this.checkWinHum;
            //bot plays after timeout
            this.checkWinBot;
        });

        document.querySelector("#three-two").addEventListener('click', () => {
            document.querySelector('#three-two').innerHTML = 'X';
            this.humPlayed.push(1);
            this.played.push(1);
            this.checkWinHum;
            //bot plays after timeout
            this.checkWinBot;
        });

        document.querySelector("#three-three").addEventListener('click', () => {
            document.querySelector('#three-three').innerHTML = 'X';
            this.humPlayed.push(1);
            this.played.push(1);
            this.checkWinHum;
            //bot plays after timeout
            this.checkWinBot;
        });
    };
}