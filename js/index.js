//DOM manipulation
//Lightgreen hex #75eb89 Darkgreen hex #42ab53
const mindless = new MindlessTask();

function gameDynamic() {

    document.querySelectorAll('.name-holder').forEach (nh => {
        return nh.innerHTML = document.querySelector(`#name-input`).value;
    })

    document.querySelector('#clerk1').src = mindless.formsRandom[0];
    document.querySelector('#clerk2').src = mindless.formsRandom[1];
    document.querySelector('#clerk3').src = mindless.formsRandom[2];

    setTimeout(() => {
        document.querySelector('#clerk1').src = './assets/clerk-1.png';
        document.querySelector('#clerk2').src = './assets/clerk-1.png';
        document.querySelector('#clerk3').src = './assets/clerk-1.png';
    }, 5000)

    mindless.runTimer();

    setInterval(() => {
        mindless.formsInbox.push(mindless.newForm());
        document.querySelector('#game-inbox').innerHTML = mindless.formsInbox.length        
    }, 1000);

    document.querySelector('#clerk1').addEventListener('click', () => {

        mindless.checkArr.push(mindless.formsRandom[0], mindless.formsInbox[0]);

        console.log(mindless.checkArr);
        console.log(mindless.formsInbox);
        console.log(mindless.newForm());
        console.log(mindless.points);
        console.log(mindless.formsRandom);

        mindless.clicked();
        
    });

    document.querySelector('#clerk2').addEventListener('click', () => {
        
        mindless.checkArr.push(mindless.formsRandom[1], mindless.formsInbox[0]);

        console.log(mindless.checkArr);
        console.log(mindless.formsInbox);
        console.log(mindless.newForm());
        console.log(mindless.points);

        mindless.clicked();
    });

    document.querySelector('#clerk3').addEventListener('click', () => {
        
        mindless.checkArr.push(mindless.formsRandom[2], mindless.formsInbox[0]);

        console.log(mindless.checkArr);
        console.log(mindless.formsInbox);
        console.log(mindless.newForm());
        console.log(mindless.points);

        mindless.clicked();
    });
}
document.querySelector('#start-button').addEventListener(`click`, () => {
    if (document.querySelector(`#name-input`).value === '') {
        return;
    }

    //document.querySelector('#game-window').setAttribute('class', 'show');
    //document.querySelector('#name-window').setAtrribute('class', 'hide');

    setTimeout(gameDynamic(), 3500); 


})



