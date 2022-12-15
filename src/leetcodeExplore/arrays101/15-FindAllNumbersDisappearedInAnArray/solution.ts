// #1 Time: O(?) Space: O(?)
export function findDisappearedNumbers(nums: number[]): number[] {
    const arr = Array.from(Array(nums.length).keys(), item => item + 1)

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];    
        arr[num - 1] = 0
    }
    
    return arr.filter(n => n !== 0)
};