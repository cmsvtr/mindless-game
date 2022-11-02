//DOM manipulation
//Lightgreen hex #75eb89 Darkgreen hex #42ab53
const mindless = new MindlessTask();
const ttt = new TicTacToe();

function gameDynamic(level) {

    document.querySelector('#clerk1').src = mindless.formsRandom[0];
    document.querySelector('#clerk2').src = mindless.formsRandom[1];
    document.querySelector('#clerk3').src = mindless.formsRandom[2];

    setTimeout(() => {
        document.querySelector('#clerk1').src = './assets/clerk.gif';
        document.querySelector('#clerk2').src = './assets/clerk.gif';
        document.querySelector('#clerk3').src = './assets/clerk.gif';
    }, 4000)

    mindless.runTimer();

    mindless.addForm(1000);

    document.querySelector('#clerk1').addEventListener('click', () => {

        mindless.checkArr.push(mindless.formsRandom[0], mindless.formsInbox[0]);
        mindless.clicked();
        
    });

    document.querySelector('#clerk2').addEventListener('click', () => {
        
        mindless.checkArr.push(mindless.formsRandom[1], mindless.formsInbox[0]);
        mindless.clicked();
    });

    document.querySelector('#clerk3').addEventListener('click', () => {
        
        mindless.checkArr.push(mindless.formsRandom[2], mindless.formsInbox[0]);
        mindless.clicked();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            mindless.checkArr.push(mindless.formsRandom[0], mindless.formsInbox[0]);
            document.querySelector('#dude').src = './assets/dude-left.png';
            mindless.clicked();
        };
        if (event.key === 'ArrowUp') {
            mindless.checkArr.push(mindless.formsRandom[1], mindless.formsInbox[0]);
            document.querySelector('#dude').src = './assets/dude-right.png';
            mindless.clicked();
        };
        if (event.key === 'ArrowRight') {
            mindless.checkArr.push(mindless.formsRandom[2], mindless.formsInbox[0]);
            document.querySelector('#dude').src = './assets/dude-up.png';
            mindless.clicked();
        };
    });    

    controlInterval = setInterval(() => {
        if (mindless.formsInbox.length >= 20) {
        clearInterval(this.addForm);
        clearInterval(controlInterval);
        mindless.clicked();
        };
    }, 1000);
};

setTimeout(() => {
    document.querySelector('#intro-window').setAttribute('class', 'hide box')
    document.querySelector('#name-window').setAttribute('class', 'show box')
}, 2000);

document.querySelector('#start-button').addEventListener(`click`, () => {
    if (document.querySelector(`#name-input`).value === '') {
        return;
    }
    
    document.querySelectorAll('.name-holder').forEach (nh => {
        nh.innerHTML = document.querySelector(`#name-input`).value;
    })

    document.querySelector('#name-window').setAttribute('class', 'hide box');
    document.querySelector('#countdown-window').setAttribute('class', 'show box');

});

document.querySelector('#countdown-window').addEventListener(`click`, () => {
    document.querySelector('#countdown-window').setAttribute('class', 'hide box');
    document.querySelector('#game-window').setAttribute('class', 'show box');
    gameDynamic(1)
});

document.querySelector('#winner-window').addEventListener(`click`, () => {
    window.location.reload();
});

document.querySelector('#loser-window').addEventListener(`click`, () => {
    window.location.reload();
});

document.querySelector('#winlevel-window').addEventListener(`click`, () => {
    document.querySelector('#tictactoe-window').setAttribute('class', 'show box');
    ttt.clickFunction();    
});

document.querySelector('#ttt-play-again').addEventListener('click', () => {
    ttt.played = [];
    ttt.humPlayed = [];
    ttt.botPlayed = [];
    ttt.openFields = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    document.querySelectorAll('#tictactoe-board div').forEach (div => div.innerHTML=' ');
    document.querySelectorAll('.winlose').forEach (el => el.style.display = 'none');

});

document.querySelector('#ttt-continue').addEventListener('click', () => {
    document.querySelector('#tictactoe-window').setAttribute('class', 'hide');
    document.querySelector('#winlevel-window').setAttribute('class', 'hide');
    mindless.level = 2;
    mindless.formsInbox = [];
    mindless.mistakes = 0;
    mindless.points = 0;


    document.querySelector('#clerk1').src = mindless.formsRandom[0];
    document.querySelector('#clerk2').src = mindless.formsRandom[1];
    document.querySelector('#clerk3').src = mindless.formsRandom[2];

    setTimeout(() => {
        document.querySelector('#clerk1').src = './assets/clerk.gif';
        document.querySelector('#clerk2').src = './assets/clerk.gif';
        document.querySelector('#clerk3').src = './assets/clerk.gif';
    }, 4000)

    mindless.addForm(750);

    mindless.runTimer();

})

