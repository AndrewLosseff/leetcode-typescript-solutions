// There are some solutions for the problem
// #1 
export function isPalindrome(arr): boolean {
    // Helper function to convert arr to Linkes List
    const head: ListNode | null = arrayToList(arr)
    // Solution to the problem

    let current = head
    let str = ""

    while(current !== null) {
        str += current.val
        current = current.next
    }

    return strIsPalindrom(str)
};


function strIsPalindrom(str) {
    for(let i = 0; i < str.length / 2; i++) {
        if(str[i] !== str[str.length - i - 1]) return false
    }

    return true
}

// #2