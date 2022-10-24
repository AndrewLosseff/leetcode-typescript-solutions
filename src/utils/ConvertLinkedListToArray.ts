import { ListNode } from "./ConvertArrayToLinkedList";

export function convertLinkedListToArray(node: ListNode | null): number[] {

    const arrayOfNodes: number[] = []
    let currentNode = node

    while(currentNode !== null) {
        arrayOfNodes.push(currentNode.val)
        currentNode = currentNode.next
    }

    return arrayOfNodes
}