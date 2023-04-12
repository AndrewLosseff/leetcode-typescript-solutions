// There are some solutions for the problem
// #1 Time: O(n^2) Space: O(1)
export function removeElement(nums: number[], val: number): number {
    for (let i = 0; i < nums.length; i++) {
        
        if(nums[i] === val) {
            nums.splice(i,1)
            i--
        }
    }
        
    return nums.length
};

// #2 Time: O(n) Space: O(1)
export function removeElement(nums: number[], val: number): number {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        if (nums[left] === val) {
            nums[left] = nums[right];
            right--;
        }
        else {
            left++;
        }
    }

    return left;
}