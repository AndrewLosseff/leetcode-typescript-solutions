// There are some solutions for the problem

// #1 Bubble Sort
export function sortColors(nums: number[]): number[] {
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length - 1 - i; j++) {
            if(nums[j] > nums[j  + 1]) {
                [nums[j], nums[j  + 1]] = [nums[j + 1], nums[j]]
            }
        }
    }
    
    return nums
};