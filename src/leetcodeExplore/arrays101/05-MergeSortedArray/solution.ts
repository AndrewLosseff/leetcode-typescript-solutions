// #1 Time: O(nlogn) Space: O(1)
export function merge(nums1: number[], m: number, nums2: number[], n: number): number[] {
    
    nums1 = [...nums1, ...nums2].sort().filter(n => n !== 0)

    return nums1
};

// #2 Time: O(n) Space: O(1)
export function merge(nums1: number[], m: number, nums2: number[], n: number): number[] {
    
    let len = m + n
    m--
    n--

    while(len--) {
        if (n < 0 || nums1[m] > nums2[n]) {
            nums1[len] = nums1[m--];
        } else {
            nums1[len] = nums2[n--];
        }
    }

    return nums1
};