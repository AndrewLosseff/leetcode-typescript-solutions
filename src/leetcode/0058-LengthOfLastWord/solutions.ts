// There are some solutions for the problem
// #1 
export function lengthOfLastWord(s: string): number {
    const arr = s.split(" ").filter(el => el !== '')
    return arr[arr.length - 1].length
};

// #2
export function lengthOfLastWord(s: string): number {
    const arr: string[] = s.trim().split(" ")
    return arr[arr.length - 1].length
};