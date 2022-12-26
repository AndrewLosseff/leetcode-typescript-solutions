// There are some solutions for the problem
// #1 TIME: O(N^2) SPACE: O(N^2)
export function generate(numRows: number): number[][] {
    const results = [[1]]

    for (let i = 1; i < numRows; i++) {
        const tempArr: number[] = [0, ...results[results.length - 1], 0]
        const row: number[] = []

        for (let j = 0; j < tempArr.length - 1; j++) { 
            row.push(tempArr[j] + tempArr[j + 1])
        }

        results.push(row)
    }

    return results
};
