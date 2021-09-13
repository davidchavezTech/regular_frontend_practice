const button = document.getElementById("expand-btn");
const divWrapper = document.getElementById("divWrapper")

button.addEventListener("click", e => divWrapper.classList.contains("contracted") ? divWrapper.classList.remove("contracted") : divWrapper.classList.add("contracted") )