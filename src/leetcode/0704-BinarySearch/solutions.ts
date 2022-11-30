// There are some solutions for the problem
// #1
export function search(nums: number[], target: number): number {
    return nums.indexOf(target)
};

// #2
export function search(nums: number[], target: number): number {
    let lowPoint = 0
    let highPoint = nums.length
    
    do {

        const midPoint = Math.floor(lowPoint + (highPoint - lowPoint)/2)
        const value = nums[midPoint]

        if(value === target) return midPoint
        else if(value > target) highPoint = midPoint
        else lowPoint = midPoint + 1

    } while(lowPoint < highPoint)

    return -1
};