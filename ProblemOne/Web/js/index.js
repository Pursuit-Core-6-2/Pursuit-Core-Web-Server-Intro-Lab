document.addEventListener("DOMContentLoaded", () => {
  loadCardInfo();
});

const loadCardInfo = async () => {
  let url = "http://localhost:3000";
  let response = await axios.get(url);
  let data = response.data.results;
  console.log(data);
  createCard(data);
};

const createCard = (data) => {
  let cardDiv = document.querySelector("#cardDiv");
  for (let i = 0; i < data.length; i++) {
    let card = document.createElement("div");
    card.className = "card";
    let title = document.createElement("h2");
    let first = data[i].name.first.toUpperCase();
    title.innerText = `${first} ${data[i].name.last.toUpperCase()} `;
    let p = document.createElement("p");
    p.innerText = data[i].gender;
    let nation = document.createElement("p");
    nation.innerText = data[i].nat;
    let img = document.createElement("img");
    if (data[i].gender === "female") {
      img.src =
        "https://cdn.pixabay.com/photo/2017/03/31/17/44/avatar-2191933_1280.png";
    } else {
      img.src =
        "https://cdn.pixabay.com/photo/2017/03/31/17/44/avatar-2191934_1280.png";
    }

    card.append(img, title, p, nation);
    cardDiv.append(card);
  }
};
