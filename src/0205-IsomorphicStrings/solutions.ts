// There are some solutions for the problem
// #1 Time: On Space: On
export function isIsomorphic(s: string, t: string): boolean {
    const hashTable = {}
    const usedChar = {}
    let testStr = ""

    for (let i = 0; i < s.length; i++) {
        const sChar = s[i];
        const tChar = t[i]

        if(hashTable[sChar]) {
            testStr += hashTable[sChar]
        } 

        if(!hashTable[sChar] && !usedChar[tChar]) {
            hashTable[sChar] = tChar
            usedChar[tChar] = true
            testStr += tChar
        }
        
    }

    return testStr === t
};

