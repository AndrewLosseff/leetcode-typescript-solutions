// There are some solutions for the problem

// #1 
export function groupAnagrams(strs: string[]): string[][] {
    const hashTable = {}

    for (let i = 0; i < strs.length; i++) {
        const element = strs[i];
        const sortedElement = sortString(element)

        if(!hashTable[sortedElement]) {
            hashTable[sortedElement] = [element]
        } else {
            hashTable[sortedElement].push(element)
        }
        
    }

    return Object.values(hashTable)
};

// TODO solve with loop and with hashTable

function sortString(str) {
    return str.split('').sort().join('')
}