// ジャンケンのエリア////////////////////////////
const form = document.getElementById("form");
const input = document.getElementById("input");
const taskSection = document.getElementById("task");
const hands = ["rock", "paper", "scissors"];
const li = document.createElement("li");

let result = undefined;
let target = undefined;

target = document.querySelector(".harunumber");
target = document.querySelector(".kotominumber");

let element = document.getElementById("meitest");
let targetNummei = 100;
let targetNumkoyuki = 100;
let targetNumharu = 100;
let targetNumkotomi = 100;
let targetmei = document.querySelector(".meinumber");
let targetkoyuki = document.querySelector(".koyukinumber");
let targetharu = document.querySelector(".harunumber");
let targetkotomi = document.querySelector(".kotominumber");

function onHandClick(btn) {
  const playerHand = btn.id;

  // ランダム関数の乱数には1を含まない
  const i = Math.floor(Math.random() * hands.length);

  const computerHand = hands[i];
  console.log(computerHand);
  const computerElement = document.querySelector("#computerHand");
  computerElement.innerText = computerHand;
  computerElement.classList.add("determined");
  console.log(computerElement);

  const result = judge(playerHand, computerHand);

  document.querySelector("#outcome").innerText = result;

  // タスクの表示部分////////////////////////////
  // const element = document.getElementById("meitest");
  // element.textContent = task;

  const task = input.value;

  if (result == "全員") {
    // targetNum = 200;
    targetNumharu = targetNumharu + 100;
    targetNumkotomi = targetNumkotomi + 100;
    targetNummei = targetNummei + 100;
    targetNumkoyuki = targetNumkoyuki + 100;
    shuffleNumberCounter(targetNummei);
    shuffleNumberCounter1(targetNumharu);
    shuffleNumberCounter2(targetNumkoyuki);
    shuffleNumberCounter3(targetNumkotomi);
    element = document.getElementById("meitest");
    element.textContent = task;
    element = document.getElementById("harutest");
    element.textContent = task;
    element = document.getElementById("koyukitest");
    element.textContent = task;
    element = document.getElementById("kotomitest");
    element.textContent = task;
  } else if (result == "はる・ことみがお手伝い") {
    targetNumharu = targetNumharu + 100;
    targetNumkotomi = targetNumkotomi + 100;
    shuffleNumberCounter1(targetNumharu);
    shuffleNumberCounter2(targetNumkotomi);
    element = document.getElementById("harutest");
    element.textContent = task;
    element = document.getElementById("kotomitest");
    element.textContent = task;
  } else {
    targetNummei = targetNummei + 100;
    targetNumkoyuki = targetNumkoyuki + 100;
    shuffleNumberCounter(targetNummei);
    shuffleNumberCounter3(targetNumkoyuki);
    element = document.getElementById("meitest");
    element.textContent = task;
    element = document.getElementById("koyukitest");
    element.textContent = task;
  }
}
// タスクの表示部分////////////////////////////

function judge(playerHand, computerHand) {
  if (playerHand === computerHand) {
    result = "全員";
  } else if (
    (playerHand === "rock" && computerHand === "scissors") ||
    (playerHand === "paper" && computerHand === "rock") ||
    (playerHand === "scissors" && computerHand === "paper")
  ) {
    result = "はる・ことみがお手伝い";
  } else {
    result = "めい・こゆきがお手伝い";
  }

  return result;
}

// ジャンケンのエリア////////////////////////////

// 家事表示のエリア////////////////////////////

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const task = input.value; // Get the task input

  li.innerText = task; // Set the text of the li element to the task
  taskSection.innerText = "お手伝い内容：" + task;
});
// 家事表示のエリア////////////////////////////

// お小遣い表示部分////////////////////////////////////

const shuffleNumberCounter = (targetNum) => {
  // const targetNum = Number(target.getAttribute("data-num"));

  if (!targetNum) {
    return;
  }

  let counterData = null;
  const speed = 2000 / targetNum;
  let initNum = 0;

  const countUp = () => {
    if (Number.isInteger(targetNum)) {
      targetmei.innerHTML = initNum;
    } else {
      targetmei.innerHTML = `${initNum}.${Math.floor(Math.random() * 9)}`;
    }

    initNum++;

    if (initNum > targetNum) {
      targetmei.innerHTML = targetNum;
      clearInterval(counterData);
    }
  };

  counterData = setInterval(countUp, speed);
};

const shuffleNumberCounter1 = (targetNum) => {
  // const targetNum = Number(target.getAttribute("data-num"));

  if (!targetNum) {
    return;
  }

  let counterData = null;
  const speed = 1000 / targetNum;
  let initNum = 0;

  const countUp = () => {
    if (Number.isInteger(targetNum)) {
      target.innerHTML = initNum;
    } else {
      targetkotomi.innerHTML = `${initNum}.${Math.floor(Math.random() * 9)}`;
    }

    initNum++;

    if (initNum > targetNum) {
      targetkotomi.innerHTML = targetNum;
      clearInterval(counterData);
    }
  };

  counterData = setInterval(countUp, speed);
};
const shuffleNumberCounter2 = (targetNum) => {
  // const targetNum = Number(target.getAttribute("data-num"));

  if (!targetNum) {
    return;
  }

  let counterData = null;
  const speed = 1000 / targetNum;
  let initNum = 0;

  const countUp = () => {
    if (Number.isInteger(targetNum)) {
      targetharu.innerHTML = initNum;
    } else {
      targetharu.innerHTML = `${initNum}.${Math.floor(Math.random() * 9)}`;
    }

    initNum++;

    if (initNum > targetNum) {
      targetharu.innerHTML = targetNum;
      clearInterval(counterData);
    }
  };

  counterData = setInterval(countUp, speed);
};
const shuffleNumberCounter3 = (targetNum) => {
  // const targetNum = Number(target.getAttribute("data-num"));

  if (!targetNum) {
    return;
  }

  let counterData = null;
  const speed = 1000 / targetNum;
  let initNum = 0;

  const countUp = () => {
    if (Number.isInteger(targetNum)) {
      targetkoyuki.innerHTML = initNum;
    } else {
      targetkoyuki.innerHTML = `${initNum}.${Math.floor(Math.random() * 9)}`;
    }

    initNum++;

    if (initNum > targetNum) {
      targetkoyuki.innerHTML = targetNum;
      clearInterval(counterData);
    }
  };

  counterData = setInterval(countUp, speed);
};
// お小遣い表示部分////////////////////////////////////
