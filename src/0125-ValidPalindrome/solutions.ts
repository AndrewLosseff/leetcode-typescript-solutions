// There are some solutions for the problem

// #1.1
export function isPalindrome(s: string): boolean {
    const cleanStr = s.replace(/[^\w]/gi, '').toLowerCase()
    
    for(let i = 0; i < cleanStr.length / 2; i++) {
        if(cleanStr[i] !== cleanStr[cleanStr.length - i - 1]) return false
    }

    return true
};

// #1.2
export function isPalindrome(s: string): boolean {
    const cleanStr = s.replace(/[^\w]/gi, '').toLowerCase()
    
    let leftPointer = 0
    let rightPointer = cleanStr.length - 1

    while(leftPointer < rightPointer) {
        if(cleanStr[leftPointer] !== cleanStr[rightPointer]) return false
        leftPointer++
        rightPointer--
    }
    
    return true
};

// #2
export function isPalindrome(s: string): boolean {
    const cleanStr = s.replace(/[^\w]/gi, '').toLowerCase()
    return cleanStr === cleanStr.split("").reverse().join("")
};