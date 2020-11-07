document.addEventListener("DOMContentLoaded", () => {
  loadTriviaInfo();
  chooseSelect();
});

const loadTriviaInfo = async () => {
  let url = "http://localhost:3100";
  let response = await axios.get(url);
  let data = response.data.results;
  console.log(data);
  triviaQuestion(data);
};

const triviaQuestion = (data) => {
  let triviaDiv = document.querySelector("#triviaDiv");
  for (let i = 0; i < data.length; i++) {
    let answer = document.createElement("p");
    let arr = data[i].incorrect_answers;
    arr.push(data[i].correct_answer);
    let question = document.createElement("p");
    question.innerText = data[i].question;
    let select = document.createElement("select");
    for (let i = 0; i < arr.length; i++) {
      let option = document.createElement("option");
      option.innerText = arr[i];
      option.value = arr[i];
      select.appendChild(option);
    }
    triviaDiv.append(question, select, answer);

    select.addEventListener("change", (event) => {
      let value = event.target.value;
      if (value === data[i].correct_answer) {
        answer.innerText = "Correct";
      } else {
        answer.innerText = "Wrong";
      }
    });
  }
};
