var score = 20 // score of current game
var recordScore = 15 // best overall score
var gameOver = false  // game over flag
var gameSequence = [] // array for game sequence
var userSequence = [] //array of user-entered sequence

$(document).ready(function(){
    // make sure js file is loading
    // $('body').css('background-color','red')

    // listener for new game button
    $(`#newGame`).on({
        click: function(){
        //test listener by logging "button listining" to the console 
        console.log("button listening")

        // 
        manageScore ()
        }
    })

    // track clicks to top left console - green
    $(`#topLeftConsole`).on({
        click: function(){
        //test listener by logging "button listining" to the console 
        console.log("green - listening")
        
        }
    })

    // track clicks to top right console - red
    $(`#topRightConsole`).on({
        click: function(){
        //test listener by logging "button listining" to the console 
        console.log("red - listening")
        
        }
    })

    // track clicks to botton right console - blue
    $(`#btmRightConsole`).on({
        click: function(){
        //test listener by logging "button listining" to the console 
        console.log("blue - listening")
        
        }
    })
    // track clicks to botton left console - yellow
    $(`#btmLeftConsole`).on({
        click: function(){
        //test listener by logging "button listining" to the console 
        console.log("yellow - listening")
        
        }
    })
})

// declared, hoisted function
function manageScore() {
    // verify function call
    console.log("score: "+score+"; Record Score: "+recordScore)
    // this function updates the record Score variable and the on-page scoreboard
    if (score > recordScore) {
        // update recordScore variable
        recordScore = score 
        // verify function call
        console.log("Record Score: "+recordScore)
        // update displayed recordScore
        $(`#recordScore`).html(recordScore) 
    }
    if (gameOver === true) {
        // reset game score
        score = 0 
        $(`#score`).html(score) 
        // verify handling of game record update
        console.log("score: "+score)
        // reset game sequence
        gameSequence = [] 
        // verify gane sequence reset
        console.log(gameSequence)
    }
    buildSequence()
}

//declared, hoisted function
function buildSequence() {

}