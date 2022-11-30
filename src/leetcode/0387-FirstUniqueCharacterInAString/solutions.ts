// There are some solutions for the problem
// #1
export function firstUniqChar(s: string): number {

    const hash = {}
    
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        
        if(element in hash) {
            hash[element]++
        } else {
            hash[element] = 1
        }
    }

    for (let i = 0; i < s.length; i++) {
        const element = s[i];

        if(hash[element] === 1) return i
    }
   
    return -1
};

//#2
export function firstUniqChar(s: string): number {
    
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        
        if(s.indexOf(element) === s.lastIndexOf(element)) {
            return s.indexOf(element)
        }
    }
    return -1
};