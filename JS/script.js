//Welcome to Jeopardy. In order to play Jeopardy the user must select an amount from the topic of their choice from the game board. 
//The user will be shown the riddle and will be given the option to enter an answer.
//If the user answers the riddle correctly, the points will be added to the total points.
//If the user answers the riddle incorrectly, the points will be deducted from the total points.


//Here are arrays containing questions, answers for the questions, and the points for Jeopardy game

const category = {
    topic1: {
        question: ['Happened September 1, 1939', 'Countries involved included: Germany, Netherlands, Luxembourg, Belgium', 'Prime Minister of Great Britain during WWII', 'legendary British leader who, according to medieval histories and romances, led the defence of Britain against Saxon invaders in the late 5th and early 6th centuries', 'guarded concrete barrier that physically and ideologically divided Berlin from 1961 to 1989'],
        answers: ['Invasion of Poland', 'Phony War', 'Winston Churchill', 'King Arthur', 'The Berlin Wall'],
        scores: [100, 200, 300, 400, 500] 
    },

    topic2: {
        question: ['Barack Obama Day', 'What does Barack mean', 'First sitting president to make this trip', 'Where did his parents meet', 'When is his birthday'],
        answers: ['August 4', 'Blessing', 'Hiroshima, Japan', 'University of Hawaii', 'August 4,1961'],
        scores: [100, 200, 300, 400, 500] 
    },


    topic3: {
        question: ['When did The Atlanta Falcons first go to the superbowl', 'Who is the best quarter back in the nfl', 'Who is the best WR in the NFL', 'Who is the best kicker of all time in the NFL', 'Who was born May 17, 1985'],
        answers: ['1998', 'Tom Brady', 'Antonio Brown', 'Adam Vinatieri', 'Matt Ryan'],
        scores: [100, 200, 300, 400, 500]
    },


    topic4: {
        question: ['What fruit is made of 25% air', 'This vegetable is 91% water', 'Only edible food that does not go bad', 'What is the alcohol content in the strongest beer in the world', 'How many gallons of soda does the average American drink per year'],
        answers: ['Apples', 'Cabbage', 'Honey', '67.5%', '50 Gallons'],
        scores: [100, 200, 300, 400, 500]

    },


    topic5: {
        question: ['A standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages', 'Cascading style sheets are used to format the layout of Web pages', 'Who was the first computer programmer', 'When was the first game created with code', 'When was the first computer bug identified'],
        answers: ['HTML', 'CSS', 'Ada Lovelace', '1961', '1947'],
        scores: [100, 200, 300, 400, 500]
    }
}



//function 
// ****************************************************


let boardClick = document.querySelectorAll(".score")
console.log(boardClick)

var totalScore = 0
var numTurns = 0

$(".score").click(function (event) {
    $('#ans').val('')
    // Provides the 'unique identifier' associated with each panel on the gameboard. Event listener on click into each gameboard panel
    let boardDetector = event.target.id
    // Get the category number (i.e., cat1, cat2, cat3...)            
    let target = $(event.target);
    if (target.is(".score")) {
        let pointCategory = target.parent().attr('class');
        // Find - convert - calculate index number for data arrays            
        let row = boardDetector.charAt(1) - 1
        let col = boardDetector.charAt(3) - 1
        //Set a variable for qRs array elements so they can be compared to user submitted responses             
        let response = categoryObj[pointCategory].questionResponses[row]
        $('.simpleModal .ans').html(categoryObj[pointCategory].answers[row]);
        $('.simpleModal .qR').html('What is...(submit your response below) ?');
        modal.style.display = "block";
        //Function to evaluates player's question-responses for correctness.
        $('#modalBtn').click(function () {
            let inputText = $('#ans').val().toLowerCase()
            console.log("input text: " + inputText)
            if (inputText === response) {

                totalScore = Number(categoryObj[pointCategory].pointValues[row]) + totalScore

            } else {

                totalScore = totalScore - Number(categoryObj[pointCategory].pointValues[row])
            }
            //Disable panel click and remove points shown in panel. This process of selecting Cat-Pts panels continues until none are active on the board.
            $('#scoreboard').html('Your score is: ' + totalScore + " points")
            $(event.target).removeClass('points')
            $(event.target).html('')
            numTurns++

            //At this point (after answering 25 questions), the users total accumulated pts are evaluated as a final score.
            // If total pts are > 0, player wins. 

            if (numTurns === 25 && totalScore > 0) {
                prompt('You\'ve Won (enter your name below)')

                //If negative total pts balance after playing all panels, player loses (sorry, try again). 
            } else if (numTurns === 25 && totalScore <= 0) {
                prompt('Sorry, try again (enter name below and refresh page)')
            }
            //removes click handler for scoring accuracy
            $('#modalBtn').off()
            console.log(totalScore)
            console.log(inputText)
        })

        console.log(pointCategory)
        console.log(boardDetector)
        console.log(categoryObj[pointCategory])
        console.log(row)
        console.log(col)
    }

})

// Get modal element
let modal = document.querySelector('.simpleModal')

// Get open modal button
// let modalBtn = document.querySelector('.modalBtn')

// Get close button
let closeBtn = document.getElementsByClassName('closeBtn')[0]

let div = document.querySelectorAll('.score')[0]

// //Listen for open click
// div.addEventListener("click", function() {
//     modal.style.display = "block";
//    $('.simpleModal p').html('hello');
// })

// Listen for closed click
// closeBtn.addEventListener("click", function () {
    // modal.style.display = "none";
//})

$(document).ready(function () {
    // $('.simpleModal p').click(function() {
    // div.addEventListener("click", function () {
    // modal.style.display = "block";

    // })
});

