/*
    Time: O(nlogn)
    Space: O(n)
*/
export function dominantIndex(nums: number[]): number {
    const arr = [...nums]
    arr.sort((a,b) => b - a )

    if (arr[1] * 2 <= arr[0] ) {
        return nums.indexOf(arr[0])
    }
    
    return -1
}

