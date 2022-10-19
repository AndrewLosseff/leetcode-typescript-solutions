// There are some solutions for the problem
// #1
export function getDecimalValue(arr): number {
    // Helper function to convert arr to Linkes List
    const head: ListNode | null = arrayToList(arr)
    // Solution to the problem


    let current = head
    let binary = ""
    
    while(current !== null) {
        binary += current?.val
        current = current!.next
    }

    return parseInt(binary, 2)
};
