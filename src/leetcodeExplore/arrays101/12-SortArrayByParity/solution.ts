// #1 Time: O(n) Space: O(1)
export function sortArrayByParity(nums: number[]): number[] {

    let counter = nums.length

    for (let i = 0; i < counter; i++) {
        const num = nums[i];
 
        if(num % 2 !== 0) {
            nums.splice(i,1)
            nums.push(num)
            counter--
            i--
        }
        
    }

    return nums
};

// TODO: add Two Pointers solution