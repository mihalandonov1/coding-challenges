/* Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall. */


//  ----- Data 1 -----

// let markMass = 78;
// let johnMass = 92;

// let markHeight = 1.69;
// let johnHeight = 1.95;


// markBMI = markMass / markHeight ** 2;
// console.log(markBMI);

// johnBMI = johnMass / (johnHeight * johnHeight);
// console.log(johnBMI);

// console.log(markBMI >= johnBMI);

//  ----- Data 2 -----

// let markMass = 95;
// let johnMass = 85;

// let markHeight = 1.88;
// let johnHeight = 1.76;

// const markBMI = markMass / markHeight ** 2;
// console.log(markBMI);

// const johnBMI = johnMass / (johnHeight * johnHeight);
// console.log(johnBMI);



// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI}) `)
// } else {
//     console.log(`John's BMI ${johnBMI} is higher than Mark's BMI (${markBMI})`)
// }

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        return this.mass / this.height ** 2;
    }
}

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  }
};

console.log(john.calcBMI() > mark.calcBMI() ? `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})` : `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s BMI (${john.calcBMI()})` );