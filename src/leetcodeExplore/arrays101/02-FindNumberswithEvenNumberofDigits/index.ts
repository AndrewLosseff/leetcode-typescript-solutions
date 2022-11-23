export function findNumbers(nums: number[]): number {
    let counter = 0

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if(String(num).length % 2 === 0) counter++
    }

    return counter
};
/*
    Time: O(N)
    Space: O(1)
*/