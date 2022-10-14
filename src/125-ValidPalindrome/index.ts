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