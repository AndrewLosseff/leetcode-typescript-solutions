import { ListNode, arrayToList } from "../utils/ConvertArrayToLinkedList";
import { convertLinkedListToArray } from "../utils/ConvertLinkedListToArray";

export function removeElements(arr, val): number[] {
    // Helper function to convert arr to Linkes List
    const head: ListNode | null = arrayToList(arr)
    // Solution to the problem

    let dummy = new ListNode(0, head)
    let current = head
    let prev = dummy

    while(current !== null) {
        const nextNode = current.next

        if(current.val === val) {
            prev.next = nextNode
        } else {
            prev = current
        }

        current = nextNode
    }

    return convertLinkedListToArray(dummy.next)
    
};
