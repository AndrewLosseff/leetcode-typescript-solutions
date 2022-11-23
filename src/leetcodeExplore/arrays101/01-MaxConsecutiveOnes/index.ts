export function findMaxConsecutiveOnes(nums: number[]): number {
    let counter = 0
    let tempCounter = 0

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (num === 1) {
            tempCounter++
        } else {
            counter = Math.max(counter, tempCounter)
            tempCounter = 0
        }
    }

    return Math.max(counter, tempCounter)
};
/*
    Time: O(N)
    Space: O(1)
*/