const faqs = document.querySelectorAll(".faq")

faqs.forEach((faq) => {
  let faqToggle = faq.querySelector(".faq-toggle")
  faqToggle.addEventListener("click", () => {
    console.log("clicked")
    faq.classList.toggle("active")
  })
})
