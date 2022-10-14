// There are some solutions for the problem

// #1 
export function twoSum(nums: number[], target: number): number[] {
    const hash: { [key: number]: number } = {}

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (diff in hash) {
            return [hash[diff], i];
        } else {
            hash[nums[i]] = i;
        }
    }

    return []
};