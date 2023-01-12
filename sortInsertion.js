/* 
    Insertion Sort is a stable, in-place, and comparison-type algorithm.
    Stable means that two elements with equal values will appear in the same order in the sorted output as they appear in the unsorted input array.

    For example, if we wanted to sort:
    [“Cherries“, “Blackberries”, “Apples”, “Bananas”]
    into alphabetical order by first letter, the output would be:
    [“Apples”, “Blackberries”, “Bananas”, “Cherries”]

    As you can see, “Blackberries” and “Bananas” remained in the same relative positions in the input and output array because the algorithm is stable. Bubble Sort, Merge Sort, and Radix Sort are also stable sorting algorithms.

    If the algorithm was unstable, then “Bananas” and “Blackberries” may be interchanged. Selection Sort, Heap Sort and Quick Sort are examples of unstable sorting algorithms.
*/

function insertionSort(inputArr) {
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = inputArr[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = current;
        }
    return inputArr;
}
