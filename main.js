//tim cha
const parentNode = document.getElementById("container");
const f = document.querySelector("#myFriend");
const myFriends = [`danh`, `bao`, `dao`, `hau`];
//Tao co

function changeImage(friend, i) {
  let body = document.querySelector("body");
  if (body instanceof HTMLElement) {
    switch (friend) {
      case "hau":
        body.style.background = `url(./Image/HieuVay.jpg)`;
        body.style.backgroundPosition = "center"; // Căn giữa
        body.style.backgroundColor = "white";
        body.style.backgroundSize = "contain";
        f.innerHTML = "Fuck you Hậu!";
        break;

      case "danh":
        body.style.background = `url(./Image/Danh.jpg)`;
        body.style.backgroundRepeat = "no-repeat";
        body.style.backgroundPosition = "center";
        body.style.backgroundColor = "white";
        f.innerHTML = "Me may beo";
        break;

      case "dao":
        body.style.background = `url(./Image/Dao.jpg)`;
        body.style.backgroundPosition = "center";
        body.style.backgroundColor = "white";
        body.style.backgroundSize = "contain";
        f.innerHTML = "Tao dell trả tiền đâu!";
        break;

      case "bao":
        body.style.background = `url(./Image/test_Bao.jpg)`;
        body.style.backgroundPosition = "center";
        body.style.backgroundColor = "white";
        body.style.backgroundSize = "contain";
        f.innerHTML = "fuck!!!";
        break;
    }
  }

  if (i % 2 === 0) {
    alert(`"Fuck you! ${myFriends[i]}" - Hào said`);
  } else {
    alert(`"Mẹ Mày Béo - ${myFriends[i]}"- Hào said!`);
  }
}

//function
for (let i = 0; i < 4; i++) {
  const button = document.createElement("button");
  button.setAttribute("class", `button ${myFriends[i]}`);
  button.textContent = `Button ${i}`;

  button.style.fontSize = "20px";
  button.style.float = "left";
  button.style.margin = "5px";

  if (i % 2 === 0) {
    button.style.background = "red";
  }

  let click = parentNode.appendChild(button);
  click.addEventListener("click", function () {
    changeImage(myFriends[i], i);
  });
}
