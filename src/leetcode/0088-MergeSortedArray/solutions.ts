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

// Two pointers
export function merge(nums1: number[], m: number, nums2: number[], n: number) {

    let p1 = m - 1
    let p2 = n - 1
 
    for (let i = nums1.length - 1; i >= 0; i--) {
     if(p2 === -1) {
         break
     }
 
     if(nums1[p1] < nums2[p2] || p1 === -1) {
         nums1[i] = nums2[p2]
         p2--
     } else {
         nums1[i] = nums1[p1]
         p1--
     }    
    }
 
    return nums1
 };