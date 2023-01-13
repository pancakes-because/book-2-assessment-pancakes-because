/*
    Remember to use comments to define the algorithm(s) needed
    BEFORE you write any code
*/


const mortgageApplicants = [
    { id: 1, name: "James Runolfsdottir", monthlyExpenses: 343.7, salary: 49938.68, mortgage: {}, address: "866 Weissnat Forks", city: "South Dario" },
    { id: 2, name: "Fannie Swaniawski", monthlyExpenses: 783.82, salary: 119255.48, mortgage: {}, address: "3350 McDermott Bridge", city: "Amaliaborough" },
    { id: 3, name: "Patsy Jaskolski", monthlyExpenses: 803.34, salary: 103376.76, mortgage: {}, address: "585 Kassulke River", city: "New Hattieport" },
    { id: 4, name: "Rufus Moore", monthlyExpenses: 845, salary: 88269.54, mortgage: {}, address: "46332 O'Hara Mountain", city: "North Idell" },
    { id: 5, name: "Philip Abshire", monthlyExpenses: 781.34, salary: 65333.78, mortgage: {}, address: "633 Thiel Ville", city: "Uliseston" },
    { id: 6, name: "Wendy Kiehn", monthlyExpenses: 537.32, salary: 59702.6, mortgage: {}, address: "82441 Mills Turnpike", city: "Port Libbieberg" },
    { id: 7, name: "Ray Lubowitz", monthlyExpenses: 550.15, salary: 181362.87, mortgage: {}, address: "855 Isabel Forge", city: "Hesseltown" },
    { id: 8, name: "Lawrence Hirthe MD", monthlyExpenses: 940.74, salary: 100269.15, mortgage: {}, address: "68459 Jordon Crossing", city: "Boview" },
    { id: 9, name: "Mario Beahan I", monthlyExpenses: 618.11, salary: 122226.79, mortgage: {}, address: "71521 Walter Drive", city: "Rosannaton" },
    { id: 10, name: "Rosa Hauck", monthlyExpenses: 763.82, salary: 89335.68, mortgage: {}, address: "33954 Reba Motorway", city: "Port Lesly" },
    { id: 11, name: "Becky Wiegand", monthlyExpenses: 212.27, salary: 76137.45, mortgage: {}, address: "3972 Stroman Parks", city: "West Clotildeport" },
]

/* 

What You Need To Do

Open the main.js file. In there, you will see some boilerplate code that provides an array of objects 
representing people who are applying for mortgages at a bank.

You will also see three skeleton function definitions.

Please do not remove the functions, or rename the functions. They are there for testing purposes. 
You just need to implement the correct code inside them.

/* 

// step 1 is at the bottom 

Step 2: 

The first function should calculate the total yearly expenses for each person. 
It should access the correct property on an mortgage application object that was input to the function, 
and perform a mathematical calculation to determine yearly expenses.

The function should return the yearly expenses for that person.

*/ 

// ALGORITHMIC THINKING 
// step 2: will pass a paramater through, which represents one applicant 
// step 2: need a mathmatical calculation for calculating the yearly expenses (applicant.monthlyExpenses * 12 = yearly expenses)
// step 2: return yearly expenses 

const calculateYearlyExpenses = (applicant) => { 

    let yearlyExpenses = applicant.monthlyExpenses * 12 
    //console.log(yearlyExpenses)
    return yearlyExpenses  
}

/* 

Step 3: Calculate Expenses Percentage of Salary

In order to qualify for a mortgage, a lender looks at at your yearly salary, 
and **how much your expenses add up to for that year.
If your yearly expenses are too high, it reduces your chance to get a mortgage approved.** 

The second function should accept an application object, and the calculated yearly expenses as input. 
Remember that the previous function calculated the yearly expenses.

It should divide the yearly expenses by the annual salary, and then take that sum and multiply it by 100. 
This is the percentage of expenses to salary.

The function should return the calculated percentage.

*/ 

// ALGORITHMIC THINKING 
// step 3: the part about the lender looking at the yearly salary is just noise; look at yearlyExpenses 
// step 3: divide yearlyExpenses by salary, so (yearlyExpenses/salary) = finalProduct * 100 
// step 3: need a variable for final product 
// step 3: need a variable for calculatedPercentage
// step 3: calculated percentage = finalProduct * 100  
// step 3: return the calculated percentage 

const calculateExpensesPercentage = (applicant,yearlyExpenses) => { 

//for this first line, could also do let finalProduct = (yearlyExpenses/applicant.salary) 
let calculatedPercentage = (yearlyExpenses/applicant.salary) * 100 // for this line, could also do let calculatedPercentage = finalProduct * 10 here 
//console.log(calculatedPercentage)
return calculatedPercentage
}

/* 

Step 4: Final Qualification Check

The third function should accepts two inputs.

A mortgage applicant object.
The percentage of expenses to salary. Remember that the previous function calculated the percentage.
The function should implement the following algorithm.

If the percentage of expenses to salary is less than 10, then the applicant object's mortgage property - 
which is also an object - should have a new property added named qualified and its value should be true. 
It should have another property added to it named amount. The value should be the person's salary multiplied by 5.

If the percentage is greater than 10, the value of the qualified property on the mortgage object should be false. 
The value of the amount property on the mortgage object should be 0.

The function should return the modified object.

*/ 

// ALGORITHMIC THINKING 
// step 4: if calculatedPercentage < 10 add qualified property to mortgage and set it to true
// step 4: then add "amount" property to mortgage set it to applicant.salary * 5
// step 4: else if the percentage is > 10 add "qualified" property to mortgage object and set to false 
// step 4: add "amount" property 
// step 4: the value of the "amount" property should be 0 
// step 4: return applicant 

const isQualified = (applicant,calculatedPercentage) => { 

    if (calculatedPercentage <= 10) {
        applicant.mortgage.qualified = true 
        applicant.mortgage.amount = applicant.salary * 5

    } else if (calculatedPercentage >= 10) {
        applicant.mortgage.qualified = false 
        applicant.mortgage.amount = 0 
    }
    //console.log(applicant)
    return applicant
}

/* 

Step 5: Output Messages

To see if all of your logic is correct, after you have invoked the qualification check function, 
output a message like the samples below. You should only display this message for people who qualified for a mortgage.

James Runolfsdottir is qualified for a maximum mortgage of $249,693.40 
Fannie Swaniawski is qualified for a maximum mortgage of $596,277.40 
Patsy Jaskolski is qualified for a maximum mortgage of $516,883.80 
Ray Lubowitz is qualified for a maximum mortgage of $906,814.35 
Mario Beahan I is qualified for a maximum mortgage of $611,133.95 
Becky Wiegand is qualified for a maximum mortgage of $380,687.25 

*/ 

// ALGORITHMIC THINKING 
// step 5: we only want those who are qualified, so we need to add a condition for this 
// step 5: this will be setup as an if...else statement in the empty for...of loop we created **in step 1**
// step 5: then we'll add a console.log line to see the results 

/*

Step 1: Iterate Applicants 

Below the boilerplate array, you will see a comment that tells you where you should iterate the array. 
Write your code there and then once complete, move on to step 2. 
It is important that your for..of loop is in the modules scope, and not inside the functions themselves.

*/ 

// ALGORITHMIC THINKING 
// **we looked at the 3 functions above and made general oberservations about them**
// whatever is inside the parenthesis is the scope. 
// write code under the "Iterate" comment; don't write code inside the functions. 
// my code should be outside the scope of the functions. 
// **for step 1, just set up an empty for...of loop** 

/*
    Iterate the array of mortgage applicants and use your
    functions to determine if they are qualified for a mortgage
*/

// ALGORITHMIC THINKING 
// step 1: start the for...loop for iterating over the mortageApplicants array here 


for (const applicant of mortgageApplicants) {

    let yearlyExpenses = calculateYearlyExpenses(applicant) 
    let calculatedPercentage = calculateExpensesPercentage(applicant,yearlyExpenses)
    isQualified(applicant,calculatedPercentage) 

    if (applicant.mortgage.qualified === true) {
        console.log(`${applicant.name} is qualified for a maximum mortgage of $${applicant.mortgage.amount}.`)
    } 
}
































// **********  Do not touch this code  **********
module.exports = {
    calculateYearlyExpenses, calculateExpensesPercentage, isQualified
}
// **********  Do not touch this code  **********