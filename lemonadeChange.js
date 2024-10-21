/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let fiveDollars = 0;
    let tenDollars = 0;

    for (const bill of bills) {
        if (bill === 5) {
            fiveDollars++
        } else if (bill === 10) {
            if (fiveDollars > 0) {
                fiveDollars--;
                tenDollars++
            } else {
                return false
            }
        } else {
            if (fiveDollars && tenDollars) {
                fiveDollars--;
                tenDollars--;
            } else if (fiveDollars >= 3) {
                fiveDollars = fiveDollars - 3;
            } else {
                return false
            }
        }
    }
    return true
}
