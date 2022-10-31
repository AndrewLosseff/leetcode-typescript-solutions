// There are some solutions for the problem
// #1 
export function mergeTwoLists(arr1, arr2): number[] {
    // Helper function to convert arr to Linkes List
    const list1: ListNode | null = arrayToList(arr1)
    const list2: ListNode | null = arrayToList(arr2)
    // Solution to the problem

    let current1 = list1
    let current2 = list2
    let dummy: ListNode | null = new ListNode()
    let tail = dummy
    
    while(current1 !== null && current2 !== null) {
        if(current1.val < current2.val) {
            tail.next = current1
            current1 = current1.next
        } else {
            tail.next = current2
            current2 = current2.next
        }
        tail = tail.next
    }

    if(current1 !== null) tail.next = current1
    if(current2 !== null) tail.next = current2

    return convertLinkedListToArray(dummy.next)
};