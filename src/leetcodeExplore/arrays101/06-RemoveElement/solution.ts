// #1 Time: O(n) Space: O(1)
export function removeElement(nums: number[], val: number): number {
    return nums.filter(num => num !== val).length
}

// #2 Time: O(n) Space: O(1)
export function removeElement(nums: number[], val: number): number {
    for (let i = 0; i < nums.length; i++) {
       
        if(nums[i] === val) {
            nums.splice(i, 1);
            i--
        }
        
    }

    return nums.length
}