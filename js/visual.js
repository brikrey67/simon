// great work! There's some room to improve DRYness in your code, especially concerning the button functionality (the button listeners and the present game conditionals). Since each button basically functions the same way, you could write functions that could be used for all of the buttons instead of individual functions for each one. For the listeners you could use a loop that iterates 4 times initializing a listener for the 4 buttons. Using classes that reflect the buttons' number rather than their positions may make it easier to make flexible functions.
// you had a little bug where if the same button is repeated in the sequence it only flashes once. I changed the timing slightly to prevent this.

let score = 0// score of current game
let recordScore = 0// best overall score
let gameSequence = [] // array for game sequence
let clickCount = 0 // count of player clicks per game

$(document).ready(function(){

// ********* begin define listeners *******

    // listener for new game button
    $("#newGame").on({
        click: function(e){
            e.preventDefault()
            resetScoreboard ()
        }
    })

    // listener for top left corner - green
    $("#tl").on({
        click: function(e){ 
        e.preventDefault()
        $("#tl").addClass("tlInput")
        let click = 1
        clickCount = clickCount + 1
        clickCountNow = clickCount
        validateClick(click, clickCountNow)
        setTimeout(function(){
            $("#tl").removeClass("tlInput") 
            }, 600)
        }
    })

    // listener for top right corner - red
    $("#tr").on({
        click: function(e){ 
        e.preventDefault()
        $("#tr").addClass("trInput")
        let click = 2
        clickCount = clickCount + 1
        clickCountNow = clickCount
        validateClick(click, clickCountNow)
        setTimeout(function(){
            $("#tr").removeClass("trInput") 
            }, 600)
        }
    })

    // listener for bottom right corner - blue
    $("#br").on({
        click: function(e){ 
        e.preventDefault()
        $("#br").addClass("brInput")
        let click = 3
        clickCount = clickCount + 1
        clickCountNow = clickCount
        validateClick(click, clickCountNow)
        setTimeout(function(){
            $("#br").removeClass("brInput") 
            }, 600)
        }
    })

    // listener for bottom left corner - yellow
    $("#bl").on({
        click: function(e){ 
        e.preventDefault()
        $("#bl").addClass("blInput")
        let click = 4
        clickCount = clickCount + 1
        clickCountNow = clickCount
        validateClick(click, clickCountNow)
        setTimeout(function(){
            $("#bl").removeClass("blInput") 
            }, 600)
        }
    })
})

// ********* begin game reset management *******

function resetScoreboard() {
    // clear global variables
    console.log("resetScoreBoard invoked")
    score = 0
    gameSequence = [] 
    clickCount = 0
    // clear the dashboard
    $(`#score`).html("000")
    $(`#sequenceLength`).html("000") 
    $(`#playerMsg`).html("IN PROCESS") 
    $(`#footerMsg`).html("")    
    buildSequence()
}

// ********* begin play management *******

function validateClick(click, clickCountNow) {
    if (click === gameSequence[clickCountNow-1]) {
        $("#playerMsg").html("CORRECT...") 
        if (clickCount === gameSequence.length) {
            $("#playerMsg").html("NEXT LEVEL...") 
            score = score + 1 
            $("#score").html(score)
            if (score > recordScore) {
                $("#playerMsg").html("NEW RECORD SCORE") 
                recordScore = score 
                $(`#recordScore`).html(recordScore) 
            }
            clickCount = 0
            buildSequence()
        }
    }
    else {
        $("#footerMsg").html("INCORRECT, GAME OVER! CHALLENGE WAS: "+gameSequence) 
    }
}

// ********* begin game build *******

function buildSequence() {
    let newRandomNumber = getRandomInt()
    gameSequence.push(newRandomNumber)
    $("#sequenceLength").html(gameSequence.length)
    console.log(gameSequence)
    setTimeout(function(){
        presentGame()
    }, 1500)
}

//code derived from: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt() {
    const min = 1
    const max = 4
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// ********* present game round to player *******
// I changed the remove class timeout to .65 seconds so that the light turns off before the next one lights up. This prevents the bug when the same button comes twice in the sequence.
function presentGame() {
    for (let ndex=0; ndex<gameSequence.length; ndex++) {
        if (gameSequence[ndex] === 1) {
            setTimeout(function(){
                $("#tl").addClass("tlOn") 
                setTimeout(function(){
                $("#tl").removeClass("tlOn") 
                }, 650) 
            }, 700*ndex) 
        }
        else if (gameSequence[ndex] === 2) {
            setTimeout(function(){
                $("#tr").addClass("trOn") 
                setTimeout(function(){
                $("#tr").removeClass("trOn") 
                }, 650) 
            }, 700*ndex) 
        }
        else if (gameSequence[ndex] === 3) {
            setTimeout(function(){
                $("#br").addClass("brOn") 
                setTimeout(function(){
                $("#br").removeClass("brOn") 
                }, 650) 
            }, 700*ndex) 
        }
        else if (gameSequence[ndex] === 4) {
            setTimeout(function(){
                $("#bl").addClass("blOn") 
                setTimeout(function(){
                $("#bl").removeClass("blOn") 
                }, 650) 
            }, 700*ndex) 
        }
    } 
}
