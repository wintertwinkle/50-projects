// toolbox
const decrease = document.querySelector("#decrease")
const increase = document.querySelector("#increase")
const sizeBox = document.querySelector("#size")
const colorPicker = document.querySelector("#color")
const clear = document.querySelector("#clear")

// global variables
let color = "red"
let mouseIsPressed = false
let size = 5
let x
let y

// init sizeBox content
sizeBox.textContent = size

// canvas
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

// canvas paint
canvas.addEventListener("mousedown", (e) => {
  mouseIsPressed = true
  x = e.offsetX
  y = e.offsetY
  drawCircle(x, y, size)
})

canvas.addEventListener("mouseup", (e) => {
  mouseIsPressed = false
  x = undefined
  y = undefined
})

canvas.addEventListener("mousemove", (e) => {
  if (mouseIsPressed) {
    const x2 = e.offsetX
    const y2 = e.offsetY

    drawCircle(x2, y2, size)
    drawLine(x, y, x2, y2)
    x = x2
    y = y2
  }
})

function drawCircle(x, y, r) {
  ctx.beginPath()
  ctx.arc(x, y, r, 0, Math.PI * 2)
  ctx.fillStyle = color
  ctx.fill()
  ctx.closePath()
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = color
  ctx.lineWidth = size * 2
  ctx.stroke()
}

// toolbox functionalities
decrease.addEventListener("click", () => {
  if (size > 1) {
    size--
  }
  sizeBox.textContent = size
})

increase.addEventListener("click", () => {
  size++
  sizeBox.textContent = size
})

colorPicker.addEventListener("change", (e) => {
  color = e.target.value
})

clear.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
})
