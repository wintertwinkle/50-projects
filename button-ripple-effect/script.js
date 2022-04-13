const btn = document.querySelector(".ripple")

btn.addEventListener("click", (e) => {
  const x = e.clientX - e.target.offsetLeft
  const y = e.clientY - e.target.offsetTop
  const circle = `Click me <span class="circle" style="top:${y}px;left:${x}px;"></span>`
  btn.innerHTML = circle
})
