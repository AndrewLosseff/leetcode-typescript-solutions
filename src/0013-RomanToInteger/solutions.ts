// There are some solutions for the problem
// #1 
const symbolHash = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
}

export function romanToInt(s: string): number {
    let answer = 0

    for (let i = 0; i < s.length; i++) {
        const currentNumber = s[i];
        const nextNumber = s[i + 1]

        if(
            currentNumber === 'I' && nextNumber === 'V' ||
            currentNumber === 'I' && nextNumber === 'X' ||
            currentNumber === 'X' && nextNumber === 'L' ||
            currentNumber === 'X' && nextNumber === 'C' ||
            currentNumber === 'C' && nextNumber === 'D' ||
            currentNumber === 'C' && nextNumber === 'M'
        ) {
            answer += symbolHash[nextNumber] - symbolHash[currentNumber]
            i++
        } else {
            answer += symbolHash[currentNumber]
        }

    }

    return answer
};
