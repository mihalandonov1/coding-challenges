/* There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 */

// const firstDolphinScore = 96;
// const secondDolphinScore = 108;
// const thirdDolphinScore = 89;

// const firstKoalasScore = 88;
// const secondKoalasScore = 91;
// const thirdKoalasScore = 110;

// const avarageDolphinScore = (firstDolphinScore + secondDolphinScore + thirdDolphinScore) / 3;
// console.log(avarageDolphinScore);

// const avarageKoalasScore = (firstKoalasScore + secondKoalasScore + thirdKoalasScore) / 3;
// console.log(avarageKoalasScore);

// if (avarageDolphinScore > avarageKoalasScore) {
//     console.log("Dolphins won the competition")
// } else if (avarageDolphinScore < avarageKoalasScore) {
//     console.log("Koalas won the competition");
// } else  {
//     console.log("Draw");
// }


// Bonus 1 and 2

// const scoreDolphins = (97 + 112 + 80) / 3;
// const scoreKoalas = (109 + 95 + 50) / 3;
// console.log (scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100){
//     console.log("Dolphins win!!!");
// } else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
//     console.log("Koalas Wins")
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//     console.log("Both win the trophy");
// } else {
//     console.log("no one win the trophy")
// }