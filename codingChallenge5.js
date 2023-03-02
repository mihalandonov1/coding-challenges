//Data Structures, Modern Operators and Strings
//Coding Challenge #1

/*
We're building a football betting app (soccer for my American friends 😅)! Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.

Your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored

GOOD LUCK

*/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// ------ START --------

// 1)

// const players1 = [...game.players[0]];
// const players2 = [...game.players[1]];

const [players1, players2] = game.players;
console.log(players1, players2);

// 2)

// const gk = players1[0];
// const [a, b, c, d, e, f, g, h, i, j, k] = players1;
// const fieldPlayers = (a, [b, c, d, e, f, g, h, i, j, k]);

const [gk, ...fieldPlayers] = players1;

console.log(gk);
console.log(fieldPlayers);

//3)

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4)

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

//5)

// let team1 = game.odds.team1;
// let draw = game.odds.x;
// let team2 = game.odds.team2;

const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(team1, draw, team2);

//6)

function scoredGoals(...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
}

function printGoals() {
  for (let i = 0; i < game.scored.length; i++) {
    console.log(game.scored[i]);
  }
}

function printGoals2(...names) {
  for (let i = 0; i <= names.length - 1; i++) {
    console.log(names[i]);
  }
}
scoredGoals("Davies", "Muller", "Lewandowski", "Kimmich");
console.log("");
scoredGoals(...game.scored);
console.log("");
printGoals();
console.log("");
printGoals2("Davies", "Muller", "Lewandowski", "Kimmich");

//7)

team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");
// ---------- END ----------

/*
Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5 
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉
4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
GOOD LUCK

*/

// -------- START ----------

console.log(`


`);
// 1.

// const goalscorer = [...game.scored];

// for (const [index, player] of goalscorer.entries()) {
//   console.log(`Goal ${index + 1} : ${player}`);
// }

for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);
console.log(game.scored);

// 2.

// const avOdds = Object.values(game.odds);

// let b = 0;
// for (const a of avOdds) {
//   b += a;
// }
// const avarageOdds = b / 3;
// console.log(`
// avarageOdds`);

const odds = Object.values(game.odds);
let avarage = 0;
for (const odd of Object.values(game.odds)) avarage += odd;
avarage /= odds.length;
console.log(avarage);

// 3.

// let listOdd = [game.team1, "drawns", game.team2];

// for (i = 0; i < listOdd.length; i++) {
//   console.log(`
//   Odd of victory ${listOdd[i]}: ${odds[i]}`);
// }

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
  console.log(game.odds);
}

//4.

// --------- END ------------
