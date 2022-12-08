// #1 Time: O(n) Space: O(1)
export function validMountainArray(arr: number[]): boolean {

    if(arr.length < 3) return false

    let pick = 0

    for (let i = 1; i < arr.length; i++) {
        const prev = arr[i - 1]
        const cur = arr[i]
        const next = arr[i + 1]

        if(prev === cur) return false

        if(prev > cur && cur < next) return false

        if(prev < cur && cur > next) pick++
        
    }

    return pick === 1
};