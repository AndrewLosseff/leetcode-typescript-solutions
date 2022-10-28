// There are some solutions for the problem
// #1 
export function replaceElements(arr: number[]): number[] {

    const replacedArr: number[] = []
    let maxElement = -1

    for (let i = arr.length - 1; i >= 0; i--) {
    
        replacedArr.unshift(maxElement)
        maxElement = Math.max(arr[i], maxElement)
    
    }

    return replacedArr
};