// There are some solutions for the problem
// #1 Time Complexity : O(n) Space Complexity : O(1)
export function getConcatenation(nums: number[]): number[] {
    const length = nums.length
    for (let i = 0; i < length; i++) {
        nums.push(nums[i])
    }

    return nums
};


// return [...nums, ...nums]
// Give this repo a ⭐ if it was your first thought 😊