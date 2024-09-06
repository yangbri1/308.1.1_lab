// Starter Code

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
!(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
(n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

// Part 1: Math Problems 
    // Check if all numbers are divisible by 5. Cache the result in a variable.
    let isDivFive = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0;
    console.log('All given numbers are divisible by 5', isDivFive);

    // Check if the first number is larger than the last. Cache the result in a variable.
    let isFirstGreaterLast = n1 > n4;
    console.log('n1 is greater n4', isFirstGreaterLast);

    // Accomplish the following arithmetic chain:
        // Subtract the first number from the second number.
        let firstMinusSecond = n2 - n1;
        // Multiply the result by the third number.
        let multiplyByThird = firstMinusSecond * n3;
        // Find the remainder of dividing the result by the fourth number.
        let remainderFinal = multiplyByThird / n4;

        console.log(remainderFinal);

    // Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
    
    // const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25; --- from sample code snippet above 
    // let isOver25Dif = 

// Part 2: Practical Math
    // The distance of the trip, in total, is 1,500 miles.
    const distance = 1500;

    // Your car’s fuel efficiency is as follows:
    // At 55 miles per hour, you get 30 miles per gallon.
    const mph1 = 55;
    const mpgal1 = 30;
    
    // At 60 miles per hour, you get 28 miles per gallon.
    const mph2 = 60;
    const mpgal2 = 28;

    // At 75 miles per hour, you get 23 miles per gallon.
    const mph3 = 75;
    const mpgal3 = 23;

    // You have a fuel budget of $175.
    const budget = 175;

    // The average cost of fuel is $3 per gallon.
    const avgCost = 3;

    // Set up a program to answer the following questions:
    // How many gallons of fuel will you need for the entire trip?

    let scenario1 = distance / mpgal1;
    let scenario2 = distance / mpgal2;
    let scenario3 = distance / mpgal3;

    console.log(scenario1, scenario2, scenario3);

    // Will your budget be enough to cover the fuel expense?
    // let cost1 = budget / 
    // How long will the trip take, in hours?

    let time1 = distance / mph1;
    let time2 = distance / mph2;
    let time3 = distance / mph3;

    console.log(time1, time2, time3);

