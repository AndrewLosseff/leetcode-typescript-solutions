// There are some solutions for the problem
// #1 
export function merge(nums1: number[], m: number, nums2: number[], n: number) {
    nums1.splice(m, nums1.length - m)
    //
    nums1 = [...nums1, ...nums2]
    // OR
    //
    // for (let i = 0; i < nums2.length; i++) {
    //     const element = nums2[i];
    //     nums1.unshift(element)    
    // }
    //
    return nums1.sort((a,b) => a - b)
}