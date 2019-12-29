class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
class Node extends LinkedList{
  constructor(value ,props){
    super(props);
    this.value = value;
    this.next = null;
  }

push(value) {
  const node = new Node(value);
  // The list is empty
  if (this.head === null) {
    this.head = node;
    this.tail = node;
    this.length++;
    return node;
  }
  this.tail.next = node;
  this.tail = node;
  this.length++;
}
isEmpty() {
  return this.length === 0;
}
printList () {
  const nodes = [];
  let current = this.head;
  while (current) {
    nodes.push(current.value);
    current = current.next;
  }
  return nodes.join(' -> ');
}
}
var no = new Node();
no.push(10);
no.push(20)
console.log(no)