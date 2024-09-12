function Node(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

function arrayToLinkedList(array) {
    if (array.length === 0) {
        return null;
    }

    let head = new Node(array[0]);
    let current = head;

    for (let i = 1; i < array.length; i++) {
        current.next = new Node(array[i]);
        current = current.next;
    }

    return head;
}

function linkedListToArray(head) {
    let array = [];

    let pointer = head;
    while (pointer !== null) {
        array.push(pointer.val);
        pointer = pointer.next;
    }

    return array;
}

console.log(linkedListToArray(arrayToLinkedList([1, 2, 3, 4, 5])));
