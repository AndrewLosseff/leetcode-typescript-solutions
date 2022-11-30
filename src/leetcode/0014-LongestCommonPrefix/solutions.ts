// There are some solutions for the problem
// #1 Time: O(n) Space: O(1)
export function longestCommonPrefix(strs: string[]): string {
   
    let commonPrefix = strs[0]

    for (let i = 1; i < strs.length; i++) {
        const str = strs[i];
        
        for (let j = 0; j < commonPrefix.length; j++) {
            if(commonPrefix[j] !== str[j]) {
                commonPrefix = commonPrefix.slice(0, j)
                break
            }    
        }  
    }

    return commonPrefix
};

// #2 Time: O(n log n) Space: O(1)
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