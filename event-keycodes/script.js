const insert = document.querySelector("#insert")
window.addEventListener("keydown", (e) => {
  // event.keyCode has been deprecated, using event.code instead.
  insert.innerHTML = `<div class="key">
        ${e.key === " " ? "Space" : e.key}
        <small>event.key</small>
      </div>
      <div class="key">
        ${e.keyCode}
        <small>event.keyCode</small>
      </div>
      <div class="key">
        ${e.code}
        <small>event.code</small>
      </div>`
})
