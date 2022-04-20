const fill = document.querySelector(".fill")
const empties = document.querySelectorAll(".empty")

fill.addEventListener("dragstart", dragStart)
fill.addEventListener("dragend", dragEnd)

for (const empty of empties) {
  empty.addEventListener("dragover", debounce(dragOver)) // 怎么把事件对象传给dragOver
  empty.addEventListener("dragenter", dragEnter)
  empty.addEventListener("dragleave", dragLeave)
  empty.addEventListener("drop", dragDrop)
}

function dragStart() {
  console.log(`drag start`)
  this.classList.add += " hold"
  setTimeout(() => (this.className = "invisible"), 0)
}
function dragEnd() {
  console.log(`drag end`)
  this.className = "fill"
}
function dragOver(e) {
  console.log(`drag over`)
  e.preventDefault()
}

function dragEnter(e) {
  console.log(`drag enter`)
  e.preventDefault()
  this.className += " hovered"
}

function dragLeave(e) {
  console.log(`drag leave`)
  e.preventDefault()
  this.className = "empty"
}
function dragDrop(e) {
  console.log(`drag drop`)
  e.preventDefault()
  this.className = "empty"
  this.append(fill)
}

function debounce(func, delay) {
  // 函数 `func` 延迟 `delay` 秒后执行
  if (this.timer) {
    return
  } else {
    this.timer = setTimeout(() => {
      func()
      clearTimeout(this.timer)
    }, delay)
  }
}
