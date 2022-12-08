// #1 Time: O(n) Space: O(1)
export function replaceElements(arr: number[]): number[] {
    let rigthElement = -1

    for (let i = arr.length - 1; i >= 0; i--) {
        const cur = arr[i]
        arr[i] = rigthElement
        rigthElement = Math.max(cur, rigthElement)
    }

    return arr
};