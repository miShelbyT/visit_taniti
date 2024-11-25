
const closeBtns = document.querySelectorAll(".container small");

closeBtns.forEach((btn)=> {
  btn.addEventListener("click", (e)=> {
    const parent = e.target.closest(".container")
    parent.remove()
  })
})