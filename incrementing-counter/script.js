const counters = document.querySelectorAll(".counter")

counters.forEach((counter) => {
  counter.innerText = 0

  const updateCounter = () => {
    // `+` means transform type string to type number
    const target = +counter.getAttribute("data-target")
    const c = +counter.innerText

    const increment = target / 50

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`
      setTimeout(updateCounter, 1)
    }
  }

  updateCounter()
})
