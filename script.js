const btnSubmit = document.querySelector("#submit"),
  botones = document.querySelectorAll("button[name='boton']");

for (let i = 0; i < botones.length; i++) {
  botones[i].onclick = function () {
    let previous = document.querySelector(".active");
    if (previous) {
      previous.classList.remove("active");
    }
    this.classList.add("active");
  };
}

btnSubmit.addEventListener("click", () => {
  try {
    document.querySelector(".calificacion").textContent = `Your selected ${
      document.querySelector(".active").value
    } of 5`;
    document.querySelector(".targeta").classList.add("hide");
    document.querySelector(".targetaGracias").classList.remove("hide");
  } catch {}
});
