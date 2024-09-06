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



/* --------------------------------- Part 1: Math Problems --------------------------------- */ 

    // Check if all numbers are divisible by 5. Cache the result in a variable.
    let isDivFive = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0;
    console.log('All given numbers are divisible by 5:', isDivFive);

    // Check if the first number is larger than the last. Cache the result in a variable.
    let isFirstGreaterLast = n1 > n4;
    console.log('n1 is greater than n4:', isFirstGreaterLast);

    // Accomplish the following arithmetic chain:
        // Subtract the first number from the second number.
        let firstMinusSecond = n2 - n1;
        // Multiply the result by the third number.
        let multiplyByThird = firstMinusSecond * n3;
        // Find the remainder of dividing the result by the fourth number.
        let remainderFinal = multiplyByThird / n4;

        // yields final results
        console.log(remainderFinal);

    // Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
    
    // const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25; --- from sample code snippet above 
    
    // negating isOver25 would be n1, n2, n3, n4 being less than or equal to the value of 25
    // assign the value to "isUnder25" variable
    const isUnder25 = n1 < 26 || n2 < 26 || n3 < 26 || n4 < 26;
    // console.log(isUnder25); 

    // declare a new const variable "isValidStill" to take in the new results of "isValid" w/ the inclusion of "isUnder25" over "!isOver25"
    // (Note: const variables can NOT be re-declared with new values -- the original value can NOT be overwritten)
    const isValidStill = isSum50 && isTwoOdd && isUnder25 && isUnique;
    // check if the logic still holds 
    console.log(isValidStill);

    // Part 1 Conclusion -- w/ a line break at the end to separate from Part 2
    console.log(`Part 1 all together: ${isDivFive}, ${isFirstGreaterLast}, ${remainderFinal}, ${isValidStill}\n` );
        


/* --------------------------------- Part 2: Practical Math --------------------------------- */
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
    const costGal = 3;

    // Set up a program to answer the following questions:
    // How many gallons of fuel will you need for the entire trip?

    // calculate the amount of fuel required for each scenarios
    let fuel1 = distance / mpgal1;
    let fuel2 = distance / mpgal2;
    let fuel3 = distance / mpgal3;

    // print block for the amount of fuel required for each scenarios
    console.log(`For a trip of ${distance} miles at a constant rate ...`);
    console.log(`Scenario #1: ${mph1} miles per hour with ${mpgal1} miles per gallon, it will take ${fuel1} gallons.`);
    console.log(`Scenario #2: ${mph2} miles per hour with ${mpgal2} miles per gallon, it will take ${fuel2} gallons.`);
    console.log(`Scenario #3: ${mph3} miles per hour with ${mpgal3} miles per gallon, it will take ${fuel3} gallons.`);

    // Will your budget be enough to cover the fuel expense?

    // gauge the cost of fuel for each events
    let cost1 = fuel1 * costGal;
    let cost2 = fuel2 * costGal;
    let cost3 = fuel3 * costGal; 

    // print block for total cost in fuel, also formatted the cost to 2 decimal places
    console.log(`\nWith a fuel budget of ` + budget + ` the cost in each case would be ...`);
    console.log('Scenario #1: ' + cost1.toFixed(2) + ' USD.');
    console.log("Scenario #2: " + cost2.toFixed(2) + " USD.");
    console.log(`Scenario #3: ` + cost3.toFixed(2) + ` USD.`);

    // how much money you got left
    let remainder1 = budget - cost1;
    let remainder2 = budget - cost2;
    let remainder3 = budget - cost3;

    // print block checking which scenarios are a go for the trip
    console.log(`\nEach scenarios will be viable.`);
    console.log(`With a remainder of \$${remainder1}, Scenario #1: ${cost1 <= budget}`);
    console.log(`With a remainder of \$${remainder2}, Scenario #2: ${cost2 <= budget}`);
    console.log(`With a remainder of $${remainder3}, Scenario #3: ${cost3 <= budget}`);     // Recall: '/$' not needed while using backticks ` `

    // How long will the trip take, in hours?

    // evaluate the time it will take under each circumstances 
    let time1 = distance / mph1;
    let time2 = distance / mph2;
    let time3 = distance / mph3;

    // print block of time results
    console.log("\nIf there are no fuel budget constraints, the trip will take approximately ...");
    console.log("Scenario #1:", time1, 'hours \nScenario #2:', time2, `hours \nScenario #3:`, time3 + ' hours');

    // Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
    console.log(`Given a fuel budget of ${budget}, Scenario #3 is definitely out of the picture as although it would take the least amount of time 
        at ${time3} hours there simply wouldn't be enough gas money left at hand (${remainder3}). 
        On the contrary, Scenario #1 (${time1} hours, $${cost1}) and Scenario #2 (${time2} hours, $${cost2}) are both feasible.`);

