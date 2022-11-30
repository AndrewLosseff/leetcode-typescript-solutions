# 1474. Delete N Nodes After M Nodes of a Linked List

Level: Easy

## Description

Given the head of a linked list and two integers m and n. Traverse the linked list and remove some nodes in the following way:

- Start with the head as the current node.
- Keep the first m nodes starting with the current node.
- Remove the next n nodes
- Keep repeating steps 2 and 3 until you reach the end of the list.
- Return the head of the modified list after removing the mentioned nodes.

Follow up question: How can you solve this problem by modifying the list in-place?

Constraints: 
The given linked list will contain between 1 and 10^4 nodes.
The value of each node in the linked list will be in the range [1, 10^6].
1 <= m,n <= 1000