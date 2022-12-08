// #1 Time: O(n) Space: O(1)
export function moveZeroes(nums: number[]): number[] {

    for (let i = nums.length - 1; i >= 0 ; i--) {
        const num = nums[i];
        
        if(num === 0) {
            nums.splice(i,1)
            nums.push(num)
        }
    }
    
    return nums
};