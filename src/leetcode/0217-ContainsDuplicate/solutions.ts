// There are some solutions for the problem

// #1 Time: O(n) Space: O(n)
export function containsDuplicate(nums: number[]): boolean {
    return nums.length !== new Set(nums).size
};

// #2  Time: O(n log n) Space: O(1)
export function containsDuplicate(nums: number[]): boolean {
    return nums.sort().some((num, i) => num === nums[i - 1]);  
};

// #3 Time: O(n) Space: O(n)
export function containsDuplicate(nums: number[]): boolean {
    const hashTable = {}

    for (const num of nums) {
        if(hashTable[num]) return true

        hashTable[num] = true
    }
    
    return false
};