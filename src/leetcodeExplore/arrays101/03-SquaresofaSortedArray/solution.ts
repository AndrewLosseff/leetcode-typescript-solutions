export function sortedSquares(nums: number[]): number[] {
    let leftPointer = 0
    let rightPointer = nums.length - 1
    const arr: number[] = new Array(nums.length - 1)

    for (let i = nums.length - 1; i >= 0; i--) {
        const leftNum = Math.abs(nums[leftPointer])
        const rightNum = Math.abs(nums[rightPointer])

        if (leftNum < rightNum) {
            arr[i] = rightNum ** 2
            rightPointer--
        } else {
            arr[i] = leftNum ** 2
            leftPointer++
        }
    }

    return arr
};
/*
    Time: O(N)
    Space: O(1)
*/