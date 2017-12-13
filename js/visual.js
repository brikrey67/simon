var score // score of current game
var recordScore = 15 // best overall score
var gameOver   // game over flag
var gameSequence = [] // array for game sequence

$(document).ready(function(){
    // make sure js file is loading
    // $('body').css('background-color','red')

     var userClickIndex = 0
     var lastUserClick

    // listener for new game button
    $(`#newGame`).on({
        click: function(){
        //test listener by logging "button listining" to the console 
        console.log("new game button clicked")
        //reset gameOver variable
        gameOver = false
        // update score records
        score = 0
        manageScore ()
        }
    })

    // listener for top left console - green
    $(`#topLeftConsole`).on({
        click: function(){
        //test listener by logging "button listining" to the console 
        console.log("green - listening")
        // record lastest click and increment click index
        var lastUserClick = 1
        console.log("green: "+lastUserClick)
        userClickIndex = userClickIndex + 1
        console.log("click index: "+userClickIndex)
        validateLastClick(lastUserClick, userClickIndex)
        }
    })

    // listener for top right console - red
    $(`#topRightConsole`).on({
        click: function(){
        //test listener by logging "button listining" to the console 
        console.log("red - listening")        
        // record lastest click and increment click index
        var lastUserClick = 2
        console.log("red: "+lastUserClick)
        userClickIndex = userClickIndex + 1
        console.log("click index: "+userClickIndex)
        validateLastClick(lastUserClick, userClickIndex)
        }
    })

    // listener for botton right console - blue
    $(`btmRightConsole`).on({
        click: function(){
        //test listener by logging "button listining" to the console 
        console.log("blue - listening")
        // record lastest click and increment click index
        var lastUserClick = 3
        console.log("blue: "+lastUserClick)
        userClickIndex = userClickIndex + 1
        console.log("click index: "+userClickIndex)
        validateLastClick(lastUserClick, userClickIndex)
        }
    })
    // listener for botton left console - yellow
    $(`#btmLeftConsole`).on({
        click: function(){
        //test listener by logging "button listining" to the console 
        console.log("yellow - listening")
        // record lastest click and increment click index
        var lastUserClick = 4
        console.log("yellow: "+lastUserClick)
        userClickIndex = userClickIndex + 1
        console.log("click index: "+userClickIndex)
        validateLastClick(lastUserClick, userClickIndex)
        }
    })

    // declared, hoisted function
    function manageScore() {
        // this function updates the record Score variable and the on-page scoreboard
        // verify function call
        console.log("manageScore invoked")
        if (score > recordScore) {
            // update recordScore variable
            recordScore = score 
            // verify function call
            console.log("Record Score: "+recordScore)
            // update displayed recordScore
            $(`#recordScore`).html(recordScore) 
            // XXXXX add notification XXXX
        }
        if (gameOver === true) {
            // verify handling of game record update
            console.log("game over")
            // reset game sequence
            gameSequence = [] 
            // verify gane sequence reset
            console.log(gameSequence)
            return
        }
        buildSequence()
    }

    //declared, hoisted function that increments game pattern sequence
    function buildSequence() {
        console.log("buildSequence invoked")
        // get randome number between 1 and 4 to add to sequence
        var newRandomNumber = getRandomInt()
        gameSequence.push(newRandomNumber)
        console.log(gameSequence)
        // call presentGameSquence with first item in array
        presentGameSequence()
    }

    //declared, hoisted function that generate random number 1-4
    //code derived from: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
    function getRandomInt() {
        console.log("getRandomInt invoked")
        var min = 1
        var max = 4
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    //declared, hoisted functon that presents game sequence to the player
    function presentGameSequence() {
        console.log("presentGameSequence invoked")
        for (let ndex=0; ndex<gameSequence.length; ndex++) {
            // check for "console on" classes and remove if they exist
            console.log("ndex: "+ndex)
            console.log("checking for class toggles")
            if ($(`#topLeftConsole`).hasClass("tlcOn")){
                console.log("turning off tlcOn")
                $(`#topLeftConsole`).toggleClass("tlcOff tlcOn") 
            }
            if ($(`#topRightConsole`).hasClass("trcOn")){
                console.log("turning off trcOn")
                $(`#topRightConsole`).toggleClass("trcOff trcOn") 
            }

            if ($(`#btmRightConsole`).hasClass("brcOn")){
                console.log("turning off brcOn")
                $(`#btmRightConsole`).toggleClass("brcOff brcOn") 
            }
            if ($(`#btmLeftConsole`).hasClass("blcOn")){
                console.log("need to turn off blcOn")
                $(`#btmLeftConsole`).toggleClass("blcOff blcOn") 
            }
        
            // run annimation
            setTimeout(function(){
                console.log("starting animations")
                if (gameSequence[ndex] === 1) {
                    console.log("processing 1 in array")
                    console.log("gameSequence Length: "+gameSequence.length)
                    console.log ("Animation Index: "+ndex)
                    console.log ("Animation Element: "+gameSequence[ndex])
                    $(`#topLeftConsole`).toggleClass("tlcOff tlcOn")
                }
                else if (gameSequence[ndex] === 2) {
                    console.log("processing 2 in array")
                    console.log("gameSequence Length: "+gameSequence.length)
                    console.log ("Animation Index: "+ndex)
                    console.log ("Animation Element: "+gameSequence[ndex])
                    $(`#topRightConsole`).toggleClass("trcOff trcOn")
                }
                else if (gameSequence[ndex] === 3) {
                    console.log("processing 3 in array")
                    console.log("gameSequence Length: "+gameSequence.length)
                    console.log ("Animation Index: "+ndex)
                    console.log ("Animation Element: "+gameSequence[ndex])
                    $(`#btmRightConsole`).toggleClass("brcOff brcOn")
                }
                else {
                    console.log("processing 4 in array")
                    console.log("gameSequence Length: "+gameSequence.length)
                    console.log ("Animation Index: "+ndex)
                    console.log ("Animation Element: "+gameSequence[ndex])
                    $(`#btmLeftConsole`).toggleClass("blcOff blcOn")
                }
                console.log("Index for timing: "+ndex)
            }, 1200*ndex)
        }
        // update displayed sequence length
        $(`#sequenceLength`).html(gameSequence.length) 
    }

    function validateLastClick(lastUserClick, userClickIndex) {
        console.log("validateLastClick invoked")
        console.log("lastUserClick: "+lastUserClick)
        console.log("gameSequence element: "+gameSequence[userClickIndex -1])
        if (lastUserClick === gameSequence[userClickIndex-1]) {
            // XXXX handle display of correct answer XXXX
            console.log("userClickIndex: "+userClickIndex)
            console.log("gameSequence.length: "+gameSequence.length)
            if (userClickIndex === gameSequence.length) {
                score = score + 1
                console.log("score: "+score)
                //update score display
                $(`#score`).html(score) 
                manageScore()
            }
        }
        else {
            gameOver = true
            // XXXX handle display of incorrect answer XXXX
        }
    }
})

