// There are some solutions for the problem
// #1
export function reverseList(arr): number[] {
    // Helper function to convert arr to Linkes List
    const head: ListNode | null = arrayToList(arr)
    // Solution to the problem

    let currentNode: ListNode | null = head
    let prevNode: ListNode | null = null

    while(currentNode !== null) {
        const next = currentNode.next

        currentNode.next = prevNode
        prevNode = currentNode

        currentNode = next
    }

    return convertLinkedListToArray(prevNode)
};

//#2
export function reverseList(arr): number[] {
    // Helper function to convert arr to Linkes List
    const head: ListNode | null = arrayToList(arr)
    // Solution to the problem


    const answer: ListNode | null = recursionReverseList(head, null)
    return convertLinkedListToArray(answer)
};

function recursionReverseList(head: ListNode | null, priv: ListNode | null): ListNode | null {

    if(head === null) return priv

    const next = head.next
    head.next = priv
    priv = head

    return recursionReverseList(next, priv)

}