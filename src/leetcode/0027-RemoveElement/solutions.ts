// There are some solutions for the problem
// #1 
export function removeElement(nums: number[], val: number): number {
    let count = 0

    for (let i = 0; i < nums.length; i++) {
        
        if(nums[i] === val) {
            nums.splice(i,1)
            i--
        } else {
            count++
        }
        
    }

    return count
};