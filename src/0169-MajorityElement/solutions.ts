// There are some solutions for the problem

// TODO:
// Add Ramda solution
// Add no 'hashTable' solution
// Map vs Object solution

// #1
interface iTable {
    [key: number]: number;
 }

export function majorityElement(nums: number[]): number {

    const hashTable: iTable = {}

    nums.forEach(num => {
        if(hashTable[num]) hashTable[num]++
        else hashTable[num] = 1
    })

    const maxCounter = Object.values(hashTable).sort((a,b) => b - a)[0]
    
    return Number(getKeyByValue(hashTable, maxCounter))
};

function getKeyByValue(object: iTable, value: number) {
    return Object.keys(object).find(key => object[key] === value);
}
