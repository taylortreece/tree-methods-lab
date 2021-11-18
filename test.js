let node = {data: 5, left:
    {data: 3, left: null, right: null},
      right: {data: 7, left: null,
      right: {data: 9, left: null, right: null}
    }}

function inOrder(currentNode) {
    if(currentNode.left) {
        inOrder(currentNode.left)
    }
    console.log(currentNode.data)
    if(currentNode.right) {
        inOrder(currentNode.right)
    }
}

inOrder(node)