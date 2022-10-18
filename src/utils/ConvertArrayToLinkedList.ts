class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export function arrayToList(array: number[]): ListNode | null {
  let list: ListNode | null = null;
  for (var i = array.length - 1; i >= 0; i--) {
    list = {
      val: array[i],
      next: list 
    };
  }

  return list;
}