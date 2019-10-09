const getInfo = () => {
    let url = "http://localhost:3000/"
    fetch(url)
    .then(response => response.json())
    .then(data => {
        makeCard(data.results);
        
    })
}
getInfo()


const makeCard = (data) => {
    for(let i = 0;i < data.length; i++){ 

    const card = document.createElement("div")
    const name = document.createElement("p")
    name.innerText = data[i].name.title + " " + data[i].name.first + " " + data[i].name.last
    const gender = document.createElement("p")
    gender.innerText = data[i].gender

    document.body.append(card)
    card.appendChild(name)
    card.appendChild(gender)




    }

}


