// There are some solutions for the problem
// #1 Time: O(n) Space: O(n)
export function findDisappearedNumbers(nums: number[]): number[] {
    const tmpNums = Array.from(Array(nums.length).keys(), item => item + 1)
    const answer: number[] = []

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        tmpNums[num - 1] = 0
    }

    for (let i = 0; i < tmpNums.length; i++) {
        const num = tmpNums[i];

        if(num !== 0) answer.push(num)
        
    }

    return answer
};

// #2 Time: O(n) Space: O(n)
export function findDisappearedNumbers(nums: number[]): number[] {
    const set = new Set(nums)
    const answer: number[] = []

    for (let i = 0; i < nums.length; i++) {
        if(!set.has(i + 1)) answer.push(i + 1)  
    }

    return answer
};