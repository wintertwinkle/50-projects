const tagsEl = document.querySelector(".tags")
const textarea = document.querySelector(".textarea")

textarea.focus()

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value)

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = ""
    }, 10)

    ramdonSelect()
  }
})

// Manipulation of DOM like this is inefficient
// We need a more efficient way to do the operaiton of DOM.
// maybe virtual DOM is good way.
// [What is Virtual Dom? And Why is it faster?]
// (https://dev.to/karthikraja34/what-is-virtual-dom-and-why-is-it-faster-14p9)

function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim())
  tagsEl.innerHTML = ""
  tags.forEach((tag) => {
    const tagEl = document.createElement("span")
    tagEl.classList.add("tag")
    tagEl.innerText = tag
    tagsEl.appendChild(tagEl)
  })
}

function ramdonSelect() {
  const times = 15

  const interval = setInterval(() => {
    const randomTag = pickRandomTag()

    highlightTag(randomTag)

    setTimeout(() => {
      unHighlightTag(randomTag)
    }, 100)
  }, 100)

  setTimeout(() => {
    clearInterval(interval)

    setTimeout(() => {
      const randomTag = pickRandomTag()
      highlightTag(randomTag)
    })
  }, times * 100)
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag")
  const pickedTagIndex = Math.floor(Math.random() * tags.length)
  return tags[pickedTagIndex]
}

function highlightTag(tag) {
  tag.classList.add("highlight")
}

function unHighlightTag(tag) {
  tag.classList.remove("highlight")
}
