// There are some solutions for the problem
// #1 Time: O(n) Space: O(1)
export function longestCommonPrefix(strs: string[]): string {
   
    let commonPrefix = strs[0]

    for (let i = 1; i < strs.length; i++) {
        const word = strs[i];
        
        for (let i = 0; i < commonPrefix.length; i++) {
            const prefixLetter = commonPrefix[i];
            const wordLetter = word[i]

            if(prefixLetter !== wordLetter) {
                commonPrefix = commonPrefix.slice(0, i)
                break
            }
               
        }
        
    }

    return commonPrefix
};