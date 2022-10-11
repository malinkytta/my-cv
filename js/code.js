const menuButton = document.querySelector("#menuButton")
const nav = document.querySelector("#nav-links")

menuButton.addEventListener("click", () => {
    nav.classList.toggle('nav-open')
})
