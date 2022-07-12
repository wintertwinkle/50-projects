const sliderContainer = document.querySelector(".slider-container")
const slideLeft = document.querySelector(".left-slide")
const slideRight = document.querySelector(".right-slide")
const upButton = document.querySelector(".up-button")
const downButton = document.querySelector(".down-button")
const slidesLength = slideRight.querySelectorAll("div").length

let activeSlideIndex = 1

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener("click", () => changeSlide("up"))
downButton.addEventListener("click", () => changeSlide("down"))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    // console.log(sliderHeight)
    if (direction === "up") {
        activeSlideIndex = (activeSlideIndex + 1) % slidesLength
    } else if (direction === "down") {
        activeSlideIndex = (activeSlideIndex - 1) % slidesLength
    }

    slideRight.style.transform = `translateY(-${
        activeSlideIndex * sliderHeight
    }px)`
    slideLeft.style.transform = `translateY(${
        activeSlideIndex * sliderHeight
    }px)`
}
