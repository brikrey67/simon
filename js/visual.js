let score // score of current game
let recordScore // best overall score
let gameSequence = [] // array for game sequence
let userClickIndex = 0 //tracks total player console clicks per round
let userClickSequence = "" // tracks player click sequence

$(document).ready(function(){
    // make sure js file is loading
    // $('body').css('background-color','red')

     let lastUserClick //most recent player console click

    // listener for new game button
    $(`#newGame`).on({
        click: function(){
        console.log("new game button invoked")
        //reset gameOver variable
        gameRestart = true
        manageScore (gameRestart)
        }
    })

    // listener for top left console - green
    $(`#topLeftConsole`).on({
        click: function(){
        console.log("GREEN CONSOLE INVOKED")
        
        console.log ("add class tlcInputOn")
        $(`#topLeftConsole`).addClass("tlcInputOn")

        setTimeout(function(){
            // record lastest click
            let lastUserClick = 1
            console.log("green click: "+lastUserClick)
            //increment user click index
            userClickIndex = userClickIndex + 1
            console.log("green click index: "+userClickIndex)
            validateLastClick(lastUserClick)
            console.log("removing class tlcInputOn")
            $(`#topLeftConsole`).removeClass("tlcInputOn") 
            }, 600)  
        }
    })
    
    // listener for top right console - red
    $(`#topRightConsole`).on({
        click: function(){
        console.log("RED CONSOLE INVOKED")
        
        console.log ("add class trcInputOn")
        $(`#topRightConsole`).toggleClass("trcInputOn")
        
        setTimeout(function(){
            // record lastest click
            let lastUserClick = 2
            console.log("red click: "+lastUserClick)
            //increment user click index
            userClickIndex = userClickIndex + 1
            console.log("red click index: "+userClickIndex)
            validateLastClick(lastUserClick)
            console.log("removing class trcInputOn")
            $(`#topRightConsole`).removeClass("trcInputOn") 
        }, 600) 
        }
    })

    // listener for botton left console - blue
    $(`#btmRightConsole`).on({
        click: function(){
        console.log("BLUE CONSOLE INVOKED")

        console.log ("add class brcInputOn")
        $(`#btmRightConsole`).addClass("brcInputOn")

        setTimeout(function(){
            // record lastest click
            let lastUserClick = 3
            console.log("blue click: "+lastUserClick)
            //increment user click index
            userClickIndex = userClickIndex + 1
            console.log("blue click index: "+userClickIndex)
            validateLastClick(lastUserClick)
            console.log("removing class brcInputOn")
            $(`#btmRightConsole`).removeClass("brcInputOn") 
        }, 600) 
        }
    })
    // listener for botton left console - yellow
    $(`#btmLeftConsole`).on({
        click: function(){
        console.log("YELLOW CONSOLE INVOKED")

        console.log ("add class blcInputOn")
        $(`#btmLeftConsole`).addClass("blcInputOn")
        
        setTimeout(function(){
            // record lastest click
            let lastUserClick = 4
            console.log("yellow click: "+lastUserClick)
            //increment user click index
            userClickIndex = userClickIndex + 1
            console.log("yellow click index: "+userClickIndex)
            validateLastClick(lastUserClick)
            console.log("remove class blcInputOn")
            $(`#btmLeftConsole`).toggleClass("blcInputOn") 
        }, 600) 
        }
    })

    // declared, hoisted function for score management  
    function manageScore(gameRestart) {
        console.log("manageScore invoked")
        if (gameRestart === false) {
            console.log("game continues")
            if (typeof recordScore === 'undefined') {recordScore = 0}
            console.log("score: "+score+ " record score: "+recordScore)
            if (score > recordScore) {
                console.log("updating record score")
                recordScore = score 
                $(`#recordScore`).html(recordScore) 
                // XXXXX add notification XXXX
            }
        }
        else if (gameRestart === true) {
            console.log("game restart ")
            // reset game
            score = 0
            $(`#score`).html("000")
            gameSequence = [] 
            userClickIndex = 0
            userClickSequence = ""
            $(`#sequenceLength`).html("000") 
            $(`#sequence`).html("") 
            $(`#userSequence`).html("") 
        }
        buildSequence()
    }

    //declared, hoisted function that increments game pattern sequence
    function buildSequence() {
        console.log("buildSequence invoked")
        // get randome number between 1 and 4 to add to sequence
        let newRandomNumber = getRandomInt()
        gameSequence.push(newRandomNumber)
        $(`#sequence`).html(gameSequence)
        console.log(gameSequence)
        // call presentGameSquence with first item in array
        presentGameSequence()
    }

    //declared, hoisted function that generate random number 1-4
    //code derived from: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
    function getRandomInt() {
        console.log("getRandomInt invoked")
        let min = 1
        let max = 4
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    //declared, hoisted functon that presents game sequence to the player
    function presentGameSequence() {
        console.log("presentGameSequence invoked")
        for (let ndex=0; ndex<gameSequence.length; ndex++) {
            setTimeout(function(){
                console.log("starting animations")
                console.log("ndex before animations: "+ndex)
                if (gameSequence[ndex] === 1) {
                    console.log("processing 1-green in array")
                    console.log("gameSequence length: "+gameSequence.length)
                    console.log ("animation index: "+ndex)
                    console.log ("animation element: "+gameSequence[ndex])
                    console.log("add class tlcOn")
                    $(`#topLeftConsole`).removeClass("tlcOn")
                    $(`#topLeftConsole`).addClass("tlcOn")
                }
                else if (gameSequence[ndex] === 2) {
                    console.log("processing 2-red in array")
                    console.log("gameSequence length: "+gameSequence.length)
                    console.log ("animation index: "+ndex)
                    console.log ("animation element: "+gameSequence[ndex])
                    console.log("add class trcOn")
                    $(`#topLeftConsole`).removeClass("trcOn") 
                    $(`#topRightConsole`).addClass("trcOff trcOn") 
                }
                else if (gameSequence[ndex] === 3) {
                    console.log("processing 3-blue in array")
                    console.log("gameSequence length: "+gameSequence.length)
                    console.log ("animation index: "+ndex)
                    console.log ("animation element: "+gameSequence[ndex])
                    console.log("add class brcOn")
                    $(`#topLeftConsole`).removeClass("brcOn") 
                    $(`#btmRightConsole`).addClass("brcOn") 
                }
                else {
                    console.log("processing 4-yellow in array")
                    console.log("gameSequence length: "+gameSequence.length)
                    console.log ("animation index: "+ndex)
                    console.log ("animation element: "+gameSequence[ndex])
                    console.log("add class blcOn")
                    $(`#topLeftConsole`).removeClass("blcOn") 
                    $(`#btmLeftConsole`).addClass("blcOn")
                }
                console.log("ndex before animation iterartion: "+ndex)
                // update displayed sequence length
                console.log("update sequence-length display")
                $(`#sequenceLength`).html(gameSequence.length)
            }, 600*ndex)
        } 
    }

    function validateLastClick(lastUserClick) {
        console.log("validateLastClick invoked")
        console.log("lastUserClick: "+lastUserClick)
        console.log("gameSequence element: "+gameSequence[userClickIndex -1])
        if (lastUserClick === gameSequence[userClickIndex-1]) {
            // XXXX display of correct player entry XXXX
            console.log("userClickIndex: "+userClickIndex)
            console.log("gameSequence.length: "+gameSequence.length)
            // console.log("userClickSequence before increment: "+userClickSequence)
            // userClickSequence = userClickSequence + lastUserClick.toString()
            console.log("userClickSequence after increment: "+userClickSequence)
            $(`#userSequence`).html(userClickSequence)
            if (userClickIndex === gameSequence.length) {
                score = score + 1
                console.log("score increased to: "+score)
                $(`#score`).html(score)
                gameRestart = false
                userClickIndex = 0
                manageScore(gameRestart)
            }
        }
        else {
            alert("Sorry. Game over!... You did not match the game pattern.")
        }
    }
})

