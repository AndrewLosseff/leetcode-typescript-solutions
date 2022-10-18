// There are some solutions for the problem

// #1
export function containsDuplicate(nums: number[]): boolean {
    return nums.length !== new Set(nums).size
};

// #2
export function containsDuplicate(nums: number[]): boolean {

    let answer = false

    nums.sort().forEach((num, index) => { 
        if(num === nums[index - 1]) {
            answer = true 
        }
    })

    return answer
     
};