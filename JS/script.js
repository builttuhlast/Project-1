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
        scores: [100, 200, 300, 400, 500], 
    },
}



//function 
// ****************************************************

 // Provides the 'unique identifier' associated with each panel on the gameboard. Event listener on click into each gameboard panel