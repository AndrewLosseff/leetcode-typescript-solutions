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

// #1 Time: O(n log n) Space: O(1)
export function longestCommonPrefix(strs: string[]): string {
    strs.sort()
    let prefix = ''
  
    for (let i = 0; i < strs[0].length; i++) {
      const firstPrefixElement = strs[0][i];
      const lastPrefixElement = strs[strs.length -1][i]
  
      if(firstPrefixElement === lastPrefixElement) prefix += firstPrefixElement
      else break   
    }
  
    return prefix
  
  };