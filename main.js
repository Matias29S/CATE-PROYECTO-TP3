const contdiv = document.getElementById("botones");
const cont = document.getElementById("cont");
const total = 10;
let selecs = JSON.parse(localStorage.getItem("fselec")) || [];

let n = total - selecs.length;

cont.textContent = `Te quedan ${n} figuritas`;

for (let i = 0; i < total; i++) {
  const boton = document.createElement("button");
  boton.className = "boton";
  boton.textContent = i + 1;

  if (selecs.includes(i)) {
    boton.classList.add("selec");
  }

  boton.addEventListener("click", () => {
    if (!boton.classList.contains("selec")) {
      n--;
      boton.classList.add("selec");
      selecs.push(i);
    } else {
      n++;
      boton.classList.remove("selec");
      selecs = selecs.filter(num => num !== i);
    }

    cont.textContent = `Te quedan ${n} figuritas`;

    localStorage.setItem("fselec", JSON.stringify(selecs));
  });

  contdiv.appendChild(boton);
}