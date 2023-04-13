// There are some solutions for the problem
// #1 Time Complexity : O(n) Space Complexity : O(1)
export function runningSum(nums: number[]): number[] {
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1]
    }

    return nums
};
