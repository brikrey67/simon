var score = 5 // score of current game
var recordScore = 10 // best overall score
var gameOver = False  // game over flag
var gameSequence = [] // array for game sequence

$(document).ready(function(){
    // make sure js file is loading
    // $('body').css('background-color','red')

    // listener for new game button
    $(`#newGame`).on({
        click: function(){
        //test listener by logging "button listining" to the console 
        //console.log("button listening")

        // 
        manageScore ()
        }
    })

    // track clicks to top left console - green
    $(`#topLeftConsole`).on({
        click: function(){
        //test listener by logging "button listining" to the console 
        //console.log("green - listening")
        
        }
    })

    // track clicks to top right console - red
    $(`#topRightConsole`).on({
        click: function(){
        //test listener by logging "button listining" to the console 
        //console.log("red - listening")
        
        }
    })

    // track clicks to botton right console - blue
    $(`#btmRightConsole`).on({
        click: function(){
        //test listener by logging "button listining" to the console 
        //console.log("blue - listening")
        
        }
    })
    // track clicks to botton left console - yellow
    $(`#btmLeftConsole`).on({
        click: function(){
        //test listener by logging "button listining" to the console 
        //console.log("yellow - listening")
        
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
        // update displayed recordScore

    }
    if (gameOver === True) {
        // reset game score
        score = 0 
        // verify handling of game record update
        console.log("score: "+score+"; Record Score: "+recordScore)
        
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