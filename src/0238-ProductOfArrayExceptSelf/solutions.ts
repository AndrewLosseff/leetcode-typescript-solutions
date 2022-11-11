// There are some solutions for the problem
// #1 Time: O(n2)  Space: O(1)
export function productExceptSelf(nums: number[]): number[] {

    const sum: number[] = []

    for (let i = 0; i < nums.length; i++) {
        let num = 1;

        for (let j = 0; j < nums.length; j++) {
            const element = nums[j];

            if (i !== j) num *= element
            
        }

        sum.push(num)
        
    }
   
    return sum
};

// TODO:
// Add postfix prefix solution 
// O(n) + O(n) || O(n) + O(1)
