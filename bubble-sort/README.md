# Bubble Sort

**Bubble sort** is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process is repeated until the list is sorted. It is not efficient for large lists due to its time complexity of **O(n^2^)**, making it less practical compared to more efficient algorithms like quicksort or mergesort.

Here is a simple demonstration of how bubble sort works:

Consider an unsorted list: [5, 1, 4, 2, 8]
1. Start at the beginning of the list and compare the first two elements (5 and 1). Since 5 > 1, these two elements are swapped.
2. List after first pass: [1, 5, 4, 2, 8]
3. Move to the next pair (5 and 4). Since 5 > 4, these two elements are swapped.
4. List after second pass: [1, 4, 5, 2, 8]
5. Continue comparing and swapping adjacent elements until the list is sorted.

After subsequent passes, the list becomes: [1, 2, 4, 5, 8]
![](images/bubble-short.png)