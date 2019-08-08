class priorityQue {
  const heap = []
  
  add([key, val]) {
    let curIndex = heap.push({ key, val }) - 1
    
    while(curIndex > 0){
      const parentIndex = Math.floor((curIndex - 1) / 2)
      const parent = heap[parentIndex], cur = heap[curIndex]
      if(parent.val >= cur.val) break

      heap[parentIndex] = cur
      heap[curIndex] = parent
      curIndex = parentIndex
    }
    
    return heap.length
  }
  
  poll(num) {
    let willReturnArr = true
    if(num === undefined) {
      num = 1
      willReturnArr = false
    }
    
    for(let i = 0; i < k; i++){
      let curIndex = 0
      result.push(heap[0].key)
      heap[0] = heap.pop()
      while(curIndex * 2 + 1 < heap.length){
        const left = heap[curIndex * 2 + 1], right = heap[curIndex * 2 + 2]
        const childIndex = (!right || left.val > right.val) 
          ? curIndex * 2 + 1 
          : curIndex * 2 + 2
        const cur = heap[curIndex], child = heap[childIndex]
        if(cur.val >= child.val) break

        heap[curIndex] = child
        heap[childIndex] = cur
        curIndex = childIndex
      }
     
     return willReturnArr ? result : result[0]
  }
}
