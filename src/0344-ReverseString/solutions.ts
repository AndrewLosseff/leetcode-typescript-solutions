// There are some solutions for the problem
// #1
export function reverseString(s: string[]) {

    let left = 0
    let right = s.length - 1

    for (let i = 0; i < Math.round(s.length/2); i++) {
        
        [s[left],s[right] ] = [s[right],s[left]]
       
        left++
        right--
    }
    
    return s
};