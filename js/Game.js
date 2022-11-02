//Classes

class MindlessTask {
    constructor() {
        this.player = '';
        this.timer = 0; //highscore is defined by how fast a player can reach 100 points
        this.level = 1; //game level. will define the speed the paperWork array is filled
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

    addForm (speed) {
        this.formInterval[0] = setInterval(() => {
            this.formsInbox.push(this.newForm());
            document.querySelector('#game-inbox').innerHTML = this.formsInbox.length        
        }, speed);
    };

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

        if (this.points === 25 && this.level === 1) {
            document.querySelector('#end-timer').innerHTML = this.timer;
            document.querySelector('#winlevel-window').setAttribute('class', 'show box');
            clearInterval(this.formInterval[0]);
            clearInterval(this.timerInterval[0]);
        };

        if (this.points === 25 && this.level === 2) {
            document.querySelector('#end-timer').innerHTML = this.timer;
            document.querySelector('#winner-window').setAttribute('class', 'show box');
            clearInterval(this.formInterval[0]);
            clearInterval(this.timerInterval[0]);
        };

        this.formsInbox.shift();

        if (this.formsInbox.length === 0) {
            this.formsInbox.push(this.newForm());
            document.querySelector('#current-form').src = this.newForm();
        };     
        
        document.querySelector('#current-form').src = this.formsInbox[0];

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
        this.openFields = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.played = [];
        this.humPlayed = [];
        this.botPlayed = [];
        this.wins = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
    };

    checkWinHum () {
        this.wins.forEach (win => {
            if (win.every(pos => this.humPlayed.includes(pos))) {
                document.querySelector('#tictactoe-notification').innerHTML = 'You WIN!';
                document.querySelectorAll('.winlose').forEach (el => el.style.display = 'grid');

            }else if (this.played.length === 9) {
                document.querySelector('#tictactoe-notification').innerHTML = 'You tied.';
                document.querySelectorAll('.winlose').forEach (el => el.style.display = 'grid');

            };
        });
    };

    checkWinBot () {
        this.wins.forEach (win => {
            if (win.every(pos => this.botPlayed.includes(pos))) {
                document.querySelector('#tictactoe-notification').innerHTML = 'Loser.';
                document.querySelectorAll('.winlose').forEach (el => el.style.display = 'grid');
                  
            }else if (this.played.length === 9) {
                document.querySelector('#tictactoe-notification').innerHTML = 'You tied.';
                document.querySelectorAll('.winlose').forEach (el => el.style.display = 'grid');

            };            
        });
    };

    botPlay () {
        const l = this.openFields.length;
        
        let i = Math.floor(Math.random()*l);

        if (this.openFields[i] === 1) {           

                document.querySelector('#one-one').innerHTML = 'O';
                document.querySelector('#one-one').style.color = '#75eb89';
                this.botPlayed.push(1);
                this.played.push(1);
                this.openFields.splice(this.openFields.indexOf(1), 1);
                return;

        };

        if (this.openFields[i] === 2) {

                document.querySelector('#one-two').innerHTML = 'O';
                document.querySelector('#one-two').style.color = '#75eb89'
                this.botPlayed.push(2);
                this.played.push(2);
                this.openFields.splice(this.openFields.indexOf(2), 1);
                return;
        };

        if (this.openFields[i] === 3) {

                document.querySelector('#one-three').innerHTML = 'O';
                document.querySelector('#one-three').style.color = '#75eb89'
                this.botPlayed.push(3);
                this.played.push(3);
                this.openFields.splice(this.openFields.indexOf(3), 1);
                return;
        };

        if (this.openFields[i] === 4) {

                document.querySelector('#two-one').innerHTML = 'O';
                document.querySelector('#two-one').style.color = '#75eb89'
                this.botPlayed.push(4);
                this.played.push(4);
                this.openFields.splice(this.openFields.indexOf(4), 1);
                return;
        };

        if (this.openFields[i] === 5) {

                document.querySelector('#two-two').innerHTML = 'O';
                document.querySelector('#two-two').style.color = '#75eb89'
                this.botPlayed.push(5);
                this.played.push(5);
                this.openFields.splice(this.openFields.indexOf(5), 1);
                return;
        };

        if (this.openFields[i] === 6) {

                document.querySelector('#two-three').innerHTML = 'O';
                document.querySelector('#two-three').style.color = '#75eb89'
                this.botPlayed.push(6);
                this.played.push(6);
                this.openFields.splice(this.openFields.indexOf(6), 1);
                return;
        };

        if (this.openFields[i] === 7) {

                document.querySelector('#three-one').innerHTML = 'O';
                document.querySelector('#three-one').style.color = '#75eb89'
                this.botPlayed.push(7);
                this.played.push(7);
                this.openFields.splice(this.openFields.indexOf(7), 1);
                return;
        };
        
        if (this.openFields[i] === 8) {

                document.querySelector('#three-two').innerHTML = 'O';
                document.querySelector('#three-two').style.color = '#75eb89'
                this.botPlayed.push(8);
                this.played.push(8);
                this.openFields.splice(this.openFields.indexOf(8), 1);
                return;
        };

        if (this.openFields[i] === 9) {

                document.querySelector('#three-three').innerHTML = 'O';
                document.querySelector('#three-three').style.color = '#75eb89'
                this.botPlayed.push(9);
                this.played.push(9);
                this.openFields.splice(this.openFields.indexOf(9), 1);
                return;
        };
    };

    clickFunction () {
        if (this.openFields.includes(1)) {
            document.querySelector("#one-one").addEventListener('click', () => {
                document.querySelector('#one-one').innerHTML = 'X';
                document.querySelector('#one-one').style.color = '#75eb89';
                this.humPlayed.push(1);
                this.played.push(1);
                this.openFields.splice(this.openFields.indexOf(1), 1);
                this.checkWinHum();
                this.botPlay();
                this.checkWinBot();
            });
        };

        if (this.openFields.includes(2)) {
            document.querySelector("#one-two").addEventListener('click', () => {
                document.querySelector('#one-two').innerHTML = 'X';
                document.querySelector('#one-two').style.color = '#75eb89';
                this.humPlayed.push(2);
                this.played.push(2);
                this.openFields.splice(this.openFields.indexOf(2), 1);
                this.checkWinHum();
                this.botPlay();
                this.checkWinBot();
            });
        };

        if (this.openFields.includes(3)) {
            document.querySelector("#one-three").addEventListener('click', () => {
                document.querySelector('#one-three').innerHTML = 'X';
                document.querySelector('#one-three').style.color = '#75eb89';
                this.humPlayed.push(3);
                this.played.push(3);
                this.openFields.splice(this.openFields.indexOf(3), 1);
                this.checkWinHum();
                this.botPlay();
                this.checkWinBot();
            });
        };

        if (this.openFields.includes(4)) {
            document.querySelector("#two-one").addEventListener('click', () => {
                document.querySelector('#two-one').innerHTML = 'X';
                document.querySelector('#two-one').style.color = '#75eb89';
                this.humPlayed.push(4);
                this.played.push(4);
                this.openFields.splice(this.openFields.indexOf(4), 1);
                this.checkWinHum();
                this.botPlay();
                this.checkWinBot();
            });
        };

        if (this.openFields.includes(5)) {
            document.querySelector("#two-two").addEventListener('click', () => {
                document.querySelector('#two-two').innerHTML = 'X';
                document.querySelector('#two-two').style.color = '#75eb89';
                this.humPlayed.push(5);
                this.played.push(5);
                this.openFields.splice(this.openFields.indexOf(5), 1);
                this.checkWinHum();
                this.botPlay();
                this.checkWinBot();
            });
        };

        if (this.openFields.includes(6)) {
            document.querySelector("#two-three").addEventListener('click', () => {
                document.querySelector('#two-three').innerHTML = 'X';
                document.querySelector('#two-three').style.color = '#75eb89';
                this.humPlayed.push(6);
                this.played.push(6);
                this.openFields.splice(this.openFields.indexOf(6), 1);
                this.checkWinHum();
                this.botPlay();
                this.checkWinBot();
            });
        };

        if (this.openFields.includes(7)) {
            document.querySelector("#three-one").addEventListener('click', () => {
                document.querySelector('#three-one').innerHTML = 'X';
                document.querySelector('#three-one').style.color = '#75eb89';
                this.humPlayed.push(7);
                this.played.push(7);
                this.openFields.splice(this.openFields.indexOf(7), 1);
                this.checkWinHum();
                this.botPlay();
                this.checkWinBot();
            });
        };

        if (this.openFields.includes(8)) {
            document.querySelector("#three-two").addEventListener('click', () => {
                document.querySelector('#three-two').innerHTML = 'X';
                document.querySelector('#three-two').style.color = '#75eb89';
                this.humPlayed.push(8);
                this.played.push(8);
                this.openFields.splice(this.openFields.indexOf(8), 1);
                this.checkWinHum();
                this.botPlay();
                this.checkWinBot();
            });
        };

        if (this.openFields.includes(9)) {
            document.querySelector("#three-three").addEventListener('click', () => {
                document.querySelector('#three-three').innerHTML = 'X';
                document.querySelector('#three-three').style.color = '#75eb89';
                this.humPlayed.push(9);
                this.played.push(9);
                this.openFields.splice(this.openFields.indexOf(9), 1);
                this.checkWinHum();
                this.botPlay();
                this.checkWinBot();
            });
        };
    };
}