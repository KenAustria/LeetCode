class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

export default class Queue {
	constructor() {
		this._dummyHead = new Node();
		this._dummyTail = new Node();
		this._dummyHead.prev = this._dummyTail;
		this._dummyTail.next = this._dummyHead;
		this._length = 0;
	}

	// adds an item to the back of the queue.
	enqueue(item) {
		const node = new Node(item);
		const prevLast = this._dummyTail.next;
		prevLast.prev = node;

		node.next = prevLast;
		node.prev = this._dummyTail;
		this._dummyTail.next = node;
		this._length++;
		return this._length;
	}

	// remove an item from the front of the queue.
	dequeue() {
		if (this.isEmpty()) {
			return undefined;
		}

		const node = this._dummyHead.prev;
		const newFirst = node.prev;
		this._dummyHead.prev = newFirst;
		newFirst.next = this._dummyHead;
		// unlink the node to be dequeued.
		node.prev = null;
		node.next = null;
		this._length--;
		return node.value;
	}

	// determines if the queue is empty.
	isEmpty() {
		return this._length === 0;
	}

	// returns the item at the front of the queue without removing it from the queue.
	front() {
		if (this.isEmpty()) {
			return undefined;
		}

		return this._dummyHead.prev.value;
	}

	// returns the item at the back of the queue without removing it from the queue it.
	back() {
		if (this.isEmpty()) {
			return undefined;
		}

		return this._dummyTail.next.value;
	}

	// returns the number of items in the queue.
	length() {
		return this._length;
	}
}
