// #1 Time: O(n) Space: O(1)
export function thirdMax(nums: number[]): number {

    let [first, second, third] = new Array(3).fill(-Infinity)

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if(first === num ||  second === num || third === num) {
            continue
        }

        if(first < num) {
            [first, second, third] = [num, first, second]
            continue
        }

        if(second < num) {
            [second, third] = [num, second]
            continue
        }

        if(third < num) {
            [third] = [num]
            continue
        }       
    }

    return third !== -Infinity ? third : first
};