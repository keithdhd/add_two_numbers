function add(num1, num2) {

    // check that both inputs are numbers
    if (typeof num1 !== 'number' || typeof num2 !== 'number') return "Error"

    // return the sum of the two inputs
    return num1 + num2
}

module.exports = add;