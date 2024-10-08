/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

    if (digits.length === 0) return []

    const map = new Map([
        [2, ['a', 'b', 'c']],
        [3, ['d', 'e', 'f']],
        [4, ['g', 'h', 'i']],
        [5, ['j', 'k', 'l']],
        [6, ['m', 'n', 'o']], // corrected '0' to 'o'
        [7, ['p', 'q', 'r', 's']],
        [8, ['t', 'u', 'v']], // corrected 'b' to 'v'
        [9, ['w', 'x', 'y', 'z']]
    ]);

    // 23

    const res = [];

    function dfs(i, arr = []) {

        if (arr.length === digits.length) {
            res.push(arr.join(""));
            return;
        }

        for (let j = 0; j < map.get(+digits[i]).length; j++) {
            arr.push(map.get(+digits[i])[j])

            dfs(i + 1, arr);

            arr.pop();
        }
    }

    dfs(0);

    return res;
};

/*
    2: abc,
    3: def

    ad, ae, af, bd, be, bf, cd, ce, cf
*/
