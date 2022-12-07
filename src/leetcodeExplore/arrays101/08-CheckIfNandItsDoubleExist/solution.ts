// #1 Time: O(n) Space: O(n)
export function checkIfExist(arr: number[]): boolean {

    const hash = {}

    for (let i = 0; i < arr.length; i++) {
        const doubleNum = arr[i] * 2;

        if(!hash[doubleNum]) {
            hash[doubleNum] = i
        }  
    }
 
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if(hash[num] !== undefined && hash[num] !== i) return true
    }

    return false
};