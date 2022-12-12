// #1 Time: O(nlogn) Space: O(n)
export function heightChecker(heights: number[]): number {
    let answer = 0

    const sortedHeights = [...heights].sort((a,b) => a - b)

    for (let i = 0; i < heights.length; i++) {
        if(heights[i] !== sortedHeights[i]) answer++    
    }

    return answer
};