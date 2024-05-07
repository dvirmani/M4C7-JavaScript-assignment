function calculateAndLog(num1, num2, num3, num4) {
    //   Add first two arguments
    const sum1 = num1 + num2;
    //   Add last two arguments
    const sum2 = num3 + num4;
    //   multiply the two sums
    const result = sum1 * sum2;

    //   Log Message based on the result
    if (result > 50) {
        console.log("The number is greater than 50!");
    } else if (result < 50) {
        console.log("The number is less than 50!");
    } else {
        console.log("The number is 50!");
    }
}

calculateAndLog(10, 10, 3, 3);
calculateAndLog(2, 2, 4, 4);
calculateAndLog(3, 2, 6, 4);