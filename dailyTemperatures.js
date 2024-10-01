/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    /*
        -


        -
    */

    const stack = [];
    const res = Array.from({ length: temperatures.length }, () => 0);

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.at(-1)?.[1] < temperatures[i]) {
            const [index] = stack.pop();
            res[index] = i - index;
        }

        stack.push([i, temperatures[i]]);
    }

    return res;
};
