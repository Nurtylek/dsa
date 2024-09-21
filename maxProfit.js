/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let left = 0;

    for (let right = 1; right < prices.length; right++) {
        if (prices[right] > prices[left]) {
            profit = Math.max(profit, prices[right] - prices[left])
        } else {
            left = right;
        }
    }

    return profit
};
