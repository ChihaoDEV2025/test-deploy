//tim cha
const parentNode = document.getElementById("container");

//Tao con
for (let i = 0; i < 5; i++) {
  const button = document.createElement("button");
  button.setAttribute("class", `button ${i}`);
  button.textContent = `Button ${i}`;

  button.style.fontSize = "20px";
  button.style.float = "left";
  button.style.margin = "5px";
  if (i % 2 === 0) {
    button.style.background = "red";
  }

  let click = parentNode.appendChild(button);

  if (i % 2 === 0) {
    click.addEventListener("click", function () {
      alert(`"Fuck you! Bitch " - Hào said`);
    });
  } else {
    click.addEventListener("click", function () {
      alert(`"Mẹ Mày Béo"- Hào said!`);
    });
  }
}
