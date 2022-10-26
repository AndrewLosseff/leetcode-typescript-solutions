// There are some solutions for the problem
// #1
export function isSubsequence(s: string, t: string): boolean {

    let sCounter = 0
    for (let i = 0; i < t.length; i++) {
        const tElement = t[i];
        const sElement = s[sCounter];

        if(tElement === sElement) sCounter++
    }

    return sCounter === s.length
};