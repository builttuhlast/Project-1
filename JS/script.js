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
    },
}



//function 
// ****************************************************

 // Provides the 'unique identifier' associated with each panel on the gameboard. Event listener on click into each gameboard panel