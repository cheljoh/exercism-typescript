interface Node {
  value: number
  nextNode: Node | EmptyNode
  previousNode: Node | EmptyNode
}

interface EmptyNode {
  value: null
  nextNode: null
  previousNode: null
}

const emptyNode: EmptyNode = {
  value: null,
  nextNode: null,
  previousNode: null
}

function isNode(arg: any): arg is Node {
  return arg.value !== null
}

function isEmptyNode(arg: any): arg is Node {
  return arg.value === null
}


export class LinkedList<TElement> {
  private firstNode: Node | EmptyNode = emptyNode
  private lastNode: Node | EmptyNode = emptyNode

  public push(element: number) {
    let newNode: Node = {
      value: element,
      nextNode: emptyNode,
      previousNode: isNode(this.lastNode) ? this.lastNode : emptyNode
    }

    if (isNode(this.lastNode)) {
      this.lastNode.nextNode = newNode
    }

    if (isEmptyNode(this.firstNode)) {
      this.firstNode = newNode
    }

    this.lastNode = newNode
  }

  public pop(): number {
    let oldEndValue: number = 0
    if (isNode(this.lastNode)) {
      oldEndValue = this.lastNode.value
      this.lastNode = isNode(this.lastNode.previousNode) ? this.lastNode.previousNode : emptyNode
      this.lastNode!.nextNode = emptyNode
    }

    return oldEndValue
  }

  public shift(): number | null {
    let oldFirstNode: Node | EmptyNode = this.firstNode
    if (isNode(this.firstNode)) {
      (isNode(oldFirstNode.nextNode)) ? this.firstNode = oldFirstNode.nextNode : this.firstNode = emptyNode

      this.firstNode!.previousNode = emptyNode
    }

    return oldFirstNode.value
  }

  public unshift(element: number) {
    let newNode: Node = {
      value: element,
      nextNode: isNode(this.firstNode) ? this.firstNode : emptyNode,
      previousNode: emptyNode
    }

    if (isNode(this.firstNode)) {
      this.firstNode.previousNode = newNode
    }

    if (isEmptyNode(this.lastNode)) {
      this.lastNode = newNode
    }

    this.firstNode = newNode
  }

  public delete(element: number) {
    let node = this.find(this.firstNode, element)

    if (!node) {
      return
    }

    if (isNode(node.previousNode)) {
      node.previousNode.nextNode = node.nextNode
    }

    if (isNode(node.nextNode)) {
      node.nextNode.previousNode = node.previousNode
    } 

    if (node == this.firstNode && node == this.lastNode) {
      this.lastNode = emptyNode
      this.firstNode = emptyNode
    } 
  }

  public count(): number{
    return this.getCount(this.firstNode)
  }

  private getCount(currentNode: Node | EmptyNode, count = 0): number {
    if (isNode(currentNode) && isNode(currentNode.nextNode)) {
      return this.getCount(currentNode.nextNode, count + 1)
    } else if (isNode(currentNode) && currentNode == this.lastNode) {
      count++
    }

    return count
  }

   private find(currentNode: Node | EmptyNode, value: number): Node | null {
    while (currentNode.value != value && isNode(currentNode.nextNode)) {
      return this.find(currentNode.nextNode, value)
    }

    return (currentNode.value == value) ? currentNode : null 
  }
}