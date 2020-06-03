const computerTag = document.querySelector("#computer");
computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) 0 0`;

let option;
let computerChoice = "rock";
let score = 0;

const rockTag = document.querySelector("#rock");
const scissorsTag = document.querySelector("#scissors");
const paperTag = document.querySelector("#paper");
const resultTag = document.querySelector("#result");
const scoreTag = document.querySelector("#score");

const intervalMaker = () => {
  if (computerChoice === "rock") {
    option = "-142px";
    computerChoice = "scissors";
    computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${option} 0`;
    //console.log(computerChoice);
  } else if (computerChoice === "scissors") {
    option = "-284px";
    computerChoice = "paper";
    computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${option} 0`;
    //console.log(computerChoice);
  } else if (computerChoice === "paper") {
    option = "0";
    computerChoice = "rock";
    computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${option} 0`;
    //console.log(computerChoice);
  }
};

const RockScissorPaper = setInterval(intervalMaker, 30);

rockTag.addEventListener("click", () => {
  if (computerChoice === "rock") {
    result.textContent = "Draw!";
    scoreTag.textContent = score;
  } else if (computerChoice === "scissors") {
    result.textContent = "Win!";
    score++;
    scoreTag.textContent = score;
  } else if (computerChoice === "paper") {
    result.textContent = "lose!";
    score--;
    scoreTag.textContent = score;
  }
  if (score === 3 || score === -3) {
    clearInterval(RockScissorPaper);
  }
});

scissorsTag.addEventListener("click", () => {
  if (computerChoice === "scissors") {
    result.textContent = "Draw!";
    scoreTag.textContent = score;
  } else if (computerChoice === "paper") {
    result.textContent = "Win!";
    score++;
    scoreTag.textContent = score;
  } else if (computerChoice === "rock") {
    result.textContent = "lose!";
    score--;
    scoreTag.textContent = score;
  }
  if (score === 3 || score === -3) {
    clearInterval(RockScissorPaper);
  }
});

paperTag.addEventListener("click", () => {
  if (computerChoice === "paper") {
    result.textContent = "Draw!";
    scoreTag.textContent = score;
  } else if (computerChoice === "rock") {
    result.textContent = "Win!";
    score++;
    scoreTag.textContent = score;
  } else if (computerChoice === "scissors") {
    result.textContent = "lose!";
    score--;
    scoreTag.textContent = score;
  }
  if (score === 3 || score === -3) {
    clearInterval(RockScissorPaper);
  }
});
