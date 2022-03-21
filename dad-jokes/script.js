const jokeEl = document.getElementById("joke")
const jokeBtn = document.getElementById("jokeBtn")

jokeBtn.addEventListener("click", generateJoke)

generateJoke()

// async/await
async function generateJoke() {
  const url = "https://icanhazdadjoke.com"
  const config = {
    headers: {
      Accept: "application/json",
    },
  }

  const res = await fetch(url, config)
  // json() method transforms json to object
  // and json method returns a promise
  const data = await res.json()
  // console.log(data)
  jokeEl.textContent = data.joke
}

// promise
// function generateJoke() {
//   const url = "https://icanhazdadjoke.com"
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   }
//   fetch(url, config)
//     .then((response) => response.json())
//     .then((data) => {
//       //   console.log(data)
//       jokeEl.textContent = data.joke
//     })
// }
