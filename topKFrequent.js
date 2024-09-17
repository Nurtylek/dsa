/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // [1,1,1,2,2,2,3] k=2
    /*
        {
            1: 3,
            2: 3,
            3: 1
        }

        [1, 2, 3]

        [[], [3], [], [1, 2]]
    */

    const countMap = new Map();
    const arr = [];
    const ans = []

    for (const num of nums) {
        countMap.set(num, (countMap.get(num) ?? 0) + 1);
    }

    for (const [val, index] of countMap.entries()) {
        arr[index] = arr[index] ?? [];
        arr[index].push(val)
    }

    for (let i = arr.length - 1; i > 0; i--) {
        if (!arr[i]) continue
        for (const item of arr[i]) {
            ans.push(item);
            if (ans.length === k) return ans
        }
    }
    return ans
};
