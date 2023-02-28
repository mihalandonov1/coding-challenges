// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 😉

/*
const bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill * 15/100 : bill * 20/100;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);
*/



/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new
array) 😉
*/

/*
const bills = [125, 555, 44];



function calcTip(bills) {
return bills >= 50 && bills <= 300 ? (bills * 15) / 100 : (bills * 20) / 100;
}

console.log(bills);

const tips = [(calcTip(bills[0])), (calcTip(bills[1])), (calcTip(bills[2]))];


console.log(tips);

const total = [(calcTip(bills[0]) + bills[0]), (calcTip(bills[1]) + bills[1]), (calcTip(bills[2]) + bills[2])];


console.log(total);
*/


/*
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array 
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const total = [];


function calcTip(bills) {
  return bills >= 50 && bills <= 300 ? (bills * 15) / 100 : (bills * 20) / 100;
}

const calcAvarage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        
        sum += arr[i];
    }
    return sum / arr.length;
    
}

for (let i = 0; i < bills.length; i++) {
    calcTip(bills[i]) >= 50 && bills <= 300
      ? (bills * 15) / 100
      : (bills * 20) / 100;
      
      tips.push(calcTip(bills[i]));
      total.push(calcTip(bills[i]) + bills[i]);
}

console.log(bills);
console.log(tips);
console.log(total);


console.log(calcAvarage(tips));
console.log(calcAvarage(total));