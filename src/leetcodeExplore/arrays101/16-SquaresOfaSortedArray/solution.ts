// #1 Time: O(n) Space: O(n)
export function sortedSquares(nums: number[]): number[] {
    let leftPointer = 0
    let rightPointer = nums.length - 1
    const arr: number[] = new Array(nums.length - 1)

    for (let i = nums.length - 1; i >= 0; i--) {
        const leftNum = nums[leftPointer] * nums[leftPointer]
        const rightNum = nums[rightPointer] * nums[rightPointer]

        if (leftNum < rightNum) {
            arr[i] = rightNum
            rightPointer--
        } else {
            arr[i] = leftNum 
            leftPointer++
        }
    }

    return arr
};