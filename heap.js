/*
    (Left child index) = (Parent index) * 2
    (Right child index) = (Parent index) * 2 + 1
    (Parent index) = (Left child index) / 2
*/

function swap(array, a, b) {
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

let minHeap = [null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function insert(minHeap, val) {
    minHeap.push(val);
    
    let currentIndex = minHeap.length - 1;
    while (currentIndex > 1) {
        let parentIndex = Math.floor(currentIndex / 2);
        if (minHeap[currentIndex] < minHeap[parentIndex]) {
            swap(minHeap, currentIndex, parentIndex);
            currentIndex = parentIndex;
        }
        else {
            break;
        }
    }
}
insert(minHeap, 0);
console.log(minHeap);
