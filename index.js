// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 *    counter1 defines the count vairable within the function and therefore cannot be accessed anywhere else. It also calls another function inside itself.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 *    Both functions use the return which brings a value out of the function and 'closes' it. 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 *    counter1 would be preferred if you wanted the count to equal zero everytime you call the function.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(min, max){

    // console.log(Math.floor(Math.random() * (max - min + 1)) + min);
    return Math.floor(Math.random() * (max - min + 1)) + min;

}
inning(0,2);

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 
const scoreobject = {
    Home: 0,
    Away: 0,
}

function finalScore(scorefunction, numberofinnings ){

  for (i = 0 ; i < numberofinnings ; i++){
    scoreobject.Home = scoreobject.Home + inning(0,2);
    scoreobject.Away = scoreobject.Away + inning(0,2);
  }

  console.log(scoreobject);
  return scoreobject;

}
finalScore(inning, 9);

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */


function scoreboard(scorefunction, numberofinnings) {

  let homescore = 0;
  let awayscore = 0;

  for (i = 0 ; i < numberofinnings ; i++){
    let homeinningscore = inning(0,2);
    let awayinningscore = inning(0,2);

    homescore = homescore + homeinningscore;
    awayscore = awayscore + awayinningscore;

    if (i === 0 ){ console.log(`1st inning: ${homescore} - ${awayscore}`)};
    if (i === 1 ){ console.log(`2nd inning: ${homescore} - ${awayscore}`)};
    if (i === 2 ){ console.log(`3rd inning: ${homescore} - ${awayscore}`)};
    if (i === 3 ){ console.log(`4th inning: ${homescore} - ${awayscore}`)};
    if (i === 4 ){ console.log(`5th inning: ${homescore} - ${awayscore}`)};
    if (i === 5 ){ console.log(`6th inning: ${homescore} - ${awayscore}`)};
    if (i === 6 ){ console.log(`7th inning: ${homescore} - ${awayscore}`)};
    if (i === 7 ){ console.log(`8th inning: ${homescore} - ${awayscore}`)};
    if (i === 8 ){ 
      console.log(`9th inning: ${homescore} - ${awayscore}`);
      console.log(`Final Score: ${homescore} - ${awayscore}`);
    }
  
  };

}
scoreboard(inning , 9);


