const smallCups = document.querySelectorAll(".cup-small")
const liters = document.querySelector("#liters")
const percentage = document.querySelector("#percentage")
const remained = document.querySelector("#remained")

smallCups.forEach((cup, index) => {
  cup.addEventListener("click", () => {
    highLightCups(index)
  })
})

function highLightCups(index) {
  const currentCupIsFull = smallCups[index].classList.contains("full")
  const nextCupIsFull =
    smallCups[index].nextElementSibling?.classList.contains("full")

  if (currentCupIsFull && !nextCupIsFull) {
    index--
  }

  smallCups.forEach((cup, idx) => {
    if (idx <= index) {
      cup.classList.add("full")
    } else {
      cup.classList.remove("full")
    }
  })

  updateBigCup()
}

function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length
  const totalCups = smallCups.length

  if (fullCups === 0) {
    percentage.style.visibility = "hidden"
    percentage.style.height = 0
  } else {
    percentage.style.visibility = "visible"
    percentage.style.height = `${(fullCups / totalCups) * 330}px`
    percentage.innerText = `${(fullCups / totalCups) * 100}`
  }

  if (fullCups === totalCups) {
    remained.style.visibility = "hidden"
    remained.style.height = 0
  } else {
    remained.style.visibility = "visible"
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`
    remained.style.height = 0
  }
}

updateBigCup()
