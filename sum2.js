function sumNumbers(...all_numbers) {
    return all_numbers.reduce((pv, cv) => pv + cv, 0)
    //pv>> previws value , cv>> current value , 0 or any number>> initial value
}
module.exports = sumNumbers