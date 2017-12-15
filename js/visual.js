let score = 0// score of current game
let recordScore = 0// best overall score
let gameSequence = [] // array for game sequence
let clickCount = 0 //tracks total player console clicks per round

$(document).ready(function(){

// ********* begin define listeners *******

    // listener for new game button
    $(`#newGame`).on({
        click: function(){
            resetScoreboard ()
        }
    })

    $(`#nextLevel`).on({
        click: function(){
            buildSequence ()
        }
    })

    // listener for top left corner - green
    $(`#tl`).on({
        click: function(){ 
        $(`#tl`).addClass("tlInput")
        let click = 1
        // clickSequence.push(click)
        clickCount = clickCount + 1
        validateClick(click)
        setTimeout(function(){
            $("#tl").removeClass("tlInput") 
            }, 600)
            return 
        }
    })

    // listener for top right corner - red
    $(`#tr`).on({
        click: function(){ 
        $(`#tr`).addClass("trInput")
        let click = 2
        // clickSequence.push(click)
        clickCount = clickCount + 1
        validateClick(click)
        setTimeout(function(){
            $("#tr").removeClass("trInput") 
            }, 600)
            return 
        }
    })

    // listener for bottom right corner - blue
    $(`#br`).on({
        click: function(){ 
        $(`#br`).addClass("brInput")
        let click = 3
        // clickSequence.push(click)
        clickCount = clickCount + 1
        validateClick(click)
        setTimeout(function(){
            $("#br").removeClass("brInput") 
            }, 600)
            return 
        }
    })

    // listener for bottom left corner - yellow
    $(`#bl`).on({
        click: function(){ 
        $(`#bl`).addClass("blInput")
        let click = 4
        // clickSequence.push(click)
        clickCount = clickCount + 1
        validateClick(click)
        setTimeout(function(){
            $("#bl").removeClass("blInput") 
            }, 500)
            return 
        }
    })
})

// ********* begin game reset management *******

function resetScoreboard() {
    // clear global variables
    score = 0
    gameSequence = [] 
    clickCount = 0
    // clear the dashboard
    $(`#score`).html("000")
    $(`#sequenceLength`).html("000") 
    $(`#status`).html("IN PROCESS") 
    buildSequence()
    return
}

// ********* begin play management *******

function validateClick(click) {
    if (click === gameSequence[clickCount-1]) {
        $(`#status`).html("CORRECT...") 
        if (clickCount === gameSequence.length) {
            score = score + 1 
            $(`#score`).html(score)
            if (score > recordScore) {
                recordScore = score 
                $(`#recordScore`).html(recordScore) 
            }
            // buildSequence()
            return
        }
    }
    else {
        $(`#status`).html("GAME OVER") 
    }
}

// ********* begin game build *******

function buildSequence() {
    let newRandomNumber = getRandomInt()
    gameSequence.push(newRandomNumber)
    $(`#sequenceLength`).html(gameSequence.length)
    // $(`#sequence`).html(gameSequence)
    presentGame()
    return
}

//code derived from: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt() {
    const min = 1
    const max = 4
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// ********* present game round to player *******

function presentGame() {
    for (let ndex=0; ndex<gameSequence.length; ndex++) {
        if (gameSequence[ndex] === 1) {
            $(`#tl`).addClass("tlOn") 
            setTimeout(function(){
                $("#tl").removeClass("tlOn") 
                }, 500)
                return 
            }
        else if (gameSequence[ndex] === 2) {
            $(`#tr`).addClass("trOn") 
            setTimeout(function(){
                $("#tr").removeClass("trOn") 
                }, 500)
                return 
            }
        else if (gameSequence[ndex] === 3) {
            $(`#br`).addClass("brOn") 
            setTimeout(function(){
                $("#br").removeClass("brOn") 
                }, 500)
                return 
            }
        else {
            $(`#bl`).addClass("blOn")
            setTimeout(function(){
                $("#bl").removeClass("blOn") 
                }, 500)
                return 
        }
    } 
    return
}
