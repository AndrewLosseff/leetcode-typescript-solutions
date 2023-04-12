// There are some solutions for the problem
// #1 Time: O(n^2) Space: O(1)
export function removeDuplicates(nums: number[]): number {

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const nextNum = nums[i + 1]
        
        if(num === nextNum) {
            nums.splice(i, 1)
            i--
        }
    }

    return nums.length
};


// #2 Time: O(n) Space: O(1)
export function removeDuplicates(nums: number[]): number {

    let count = 1

    for (let i = 1; i < nums.length; i++) {
        
        if(nums[i - 1] !== nums[i]) {
            nums[count] = nums[i];  
            count++
        }
        
    }

    return count

};