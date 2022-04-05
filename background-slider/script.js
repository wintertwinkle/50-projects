const body = document.querySelector("body")
const slides = document.querySelectorAll(".slide")
const prevButton = document.querySelector("#left")
const nextButton = document.querySelector("#right")

createCarousel(slides)

prevButton.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active")
  })
  slides.previous().classList.add("active")
  body.style.backgroundImage = slides.current().style.backgroundImage
})

nextButton.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active")
  })
  slides.next().classList.add("active")
  body.style.backgroundImage = slides.current().style["background-image"]
})

function createCarousel(array) {
  array.index = 0
  array.current = function () {
    this.index = this.index % array.length
    return array[this.index]
  }
  array.next = function () {
    this.index++
    return this.current()
  }
  array.previous = function () {
    this.index += array.length - 1
    return this.current()
  }
  array.reset = function () {
    this.index = 0
    return array[0]
  }
}
