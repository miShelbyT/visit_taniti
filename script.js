
const closeBtns = document.querySelectorAll(".container small");
const learnMore = document.querySelectorAll(".parent a");
const images = document.querySelectorAll(".option img")

closeBtns.forEach((btn)=> {
  btn.addEventListener("click", (e)=> {
    const parent = e.target.closest(".container")
    parent.remove()
  })
})

learnMore.forEach(el => {
  el.addEventListener("click", () => window.alert("This feature is still under construction. Please come back later. Thank you."))
})

images.forEach(img => {
  img.addEventListener("click", (e) => {
    const parent = e.target.closest(".container")
    parent.classList.contains("selected") ? parent.classList.remove("selected") : parent.classList.add("selected");
  })

})