let initialAmount = Number(prompt("Enter initial amount of money (minimum 1000):"));
let numOfYears = Number(prompt("Enter number of years (minimum 1):"));
let percentOfYear = Number(prompt("Enter percentage of a year (maximum 100):"));

if (isNaN(initialAmount) || isNaN(numOfYears) || isNaN(percentOfYear) || initialAmount < 1000 || numOfYears < 1 || percentOfYear > 100) {
    alert("Invalid input data");
}
else {
    let totalAmount = initialAmount * Math.pow((1 + percentOfYear / 100), numOfYears);
    let totalProfit = totalAmount - initialAmount;
    alert("Initial amount: " + initialAmount.toFixed(2) + "\nNumber of years: " + Math.floor(numOfYears) + "\nPercentage of year: " + percentOfYear.toFixed(2) + "\n\nTotal profit: " + totalProfit.toFixed(2) + "\nTotal amount: " + totalAmount.toFixed(2));
}