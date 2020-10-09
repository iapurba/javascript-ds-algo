class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this
    }
    prepend(value) {
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    printList() {
        const array = [];
        let currrentNode = this.head;
        while (currrentNode) {
            array.push(currrentNode.value);
            currrentNode = currrentNode.next;
        }
        return array;
    }
    insert(index, value) {
        const newNode = {
            value: value,
            next: null,
        }
        if (index === 0) {
            this.prepend(value)
            return this;
        }
        if (index >= this.length) {
            this.append(value);
            return this;
        }
        const leader = this.traverseToIndex(index - 1);
        newNode.next = leader.next;
        leader.next = newNode;
        this.length++;
        return this;
    }
    search(value) {
        let currrentNode = this.head;
        while (currrentNode) {
            if (currrentNode.value === value) {
                return true;
            }
            currrentNode = currrentNode.next;
        }
        return false;
    }
    remove(index) {
        if (index >= this.length) {
            return null;
        }
        if (index === 0) {
            let currrentNode = this.head;
            this.head = currrentNode.next;
            this.length--;
            return this;
        }
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        // delete unwantedNode;
        this.length--;
        console.log(unwantedNode);
        return this.printList();
    }
    traverseToIndex(index) {
        let counter = 0;
        let currrentNode = this.head;
        while (counter !== index) {
            currrentNode = currrentNode.next;
            counter++;
        }
        return currrentNode;
    }

}

const myLinkedList = new LinkedList(10);
myLinkedList.append(6);
myLinkedList.prepend(30);
myLinkedList.prepend(4);
myLinkedList.insert(0, 33)
myLinkedList.remove(8)
  // myLinkedList.printList()