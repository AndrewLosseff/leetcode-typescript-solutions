// #1 Time: O(n) Space: O(1)
export function removeDuplicates(nums: number[]): number {

    for (let i = 0; i < nums.length; i++) {
      if(nums[i] === nums[i + 1]) {
        nums.splice(i,1)
        i--
      }
    }
  
    return nums.length
}

// NOT Space: O(1) solutions
// # Time: O(n) Space: O(n)
export function removeDuplicates(nums: number[]): number {
    return new Set(nums).size
}

// # Time: O(n) Space: O(n)
export function removeDuplicates(nums: number[]): number {
    const arr: number[] = []
  
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i]
      const lastArrEl = arr[arr.length - 1]
      if( lastArrEl !== num) {
        arr.push(num)
      }    
    }
  
    return arr.length
  }