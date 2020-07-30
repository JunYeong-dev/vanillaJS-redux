import {createStore} from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// reducer와 store는 개념적 용어이기 때문에 꼭 변수이름을 reducer, store로 할 필요는 없음
// reducer : data를 변경하기 위한 fucntion
const reducer = () => {}

// store : data를 저장하기 위한 저장소
const store = createStore(reducer);

/*
let count = 0;
number.innerText = count;

const updateText = () => {
    number.innerText = count;
}

const handleAdd = () => {
    count = count + 1;
    updateText();
}

const handleMinus = () => {
    count = count - 1;
    updateText();
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
*/