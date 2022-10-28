//Classes

class MindlessTask {
    constructor(player) {
        this.player = player;
        this.timer = 0; //highscore is defined by how fast a player can reach 100 points
        this.level = 0; //game level. will define the speed the paperWork array is filled
        this.backLog = this.paperWork.length; //player can only have 10 papers in backlog
        this.points = 0; //player must make 100 points
        this.mistakes = 0; //player can only have x mistakes
        this.paperWindow = [/*three types of forms*/];
        this.paperWork = [/*form to compare with paperWindow index. When reaches a length of x, player loses*/];
        this.checkArr = [/*array for comparing the paperWork[0] with paperWindow player clicked*/];
    };

    setWindow () {
        this.paperWindow.sort(() => Math.random() - 0.5);

        //shows paperwork of the window for a second then hides the info <<setTimeOut()?>>
    };

    newPaperWork () {
        let i = Math.floor(Math.random()*4);

        this.paperWork.shift(this.paperWindow[i]);
    };

    gameDynamic () {
        this.setWindow()

        //setTimeout for time to show paperwork
        //start timer
        //distribute paperwork and checkstatus every x period of time
        //randomly appearing cups of coffee slows down the timer?

    }

    clickWindow1 () {
        this.checkArr.push(this.paperWork[0]);
        this.checkArr.push(this.paperWindow[0]);

        if(this.paperWork[0] === this.paperWindow[0]) {
            //show figure comemorating if true
            //show figure pissed (@$!*) if false
        }
        
        this.paperWork.unshift();

        this.checkPaperWindow();
    };

    clickWindow2 () {
        this.checkArr.push(this.paperWork[0]);
        this.checkArr.push(this.paperWindow[1]);

        if(this.paperWork[0] === this.paperWindow[1]) {
            //show figure comemorating if true
            //show figure pissed (@$!*) if false
        }

        this.paperWork.unshift();

        this.checkPaperWindow();
    };

    clickWindow3 () {
        this.checkArr.push(this.paperWork[0]);
        this.checkArr.push(this.paperWindow[2]);

        if(this.paperWork[0] === this.paperWindow[2]) {
            //show figure comemorating if true
            //show figure pissed (@$!*) if false
        }

        this.paperWork.unshift();

        this.checkPaperWindow();
    };

    runTimer (boolen) {
        //counter function. if true timer runs. if false timer stops.
    }

    checkPaperWindow () {
        if (this.checkArr[0] === this.checkArr[1]) {
            this.points += 1;
            this.checkArr = [];
        }else{
            this.mistakes += 1;
        }
    };

    checkStatus () {
        //if backlog reaches 10, mistakes reaches 10, player loses. timer stops. loer message. 
        //if points reaches 20 player wins, gameDynamic stops, timer stops, next level window, 
        //cuts to mini game (which takes time off the timer?) and next level where gamespeed increases.
    }
}

class MiniGame {
    constructor () {
        this.playTime = 10;
        this.points = 0;
    }
}