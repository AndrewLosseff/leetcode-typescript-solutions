// There are some solutions for the problem
// #1
export function moveZeroes(nums: number[]) {

    let count = 0

    for (let i = 0; i < nums.length - count; i++) {
        const num = nums[i];
        if(num === 0) {
            const t = nums.splice(i, 1)
            nums.push(num)
            count++
            i--
        }
    }

    return nums
};