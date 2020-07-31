import {createStore} from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// reducer와 store는 개념적 용어이기 때문에 꼭 변수이름을 reducer, store로 할 필요는 없음
// reducer : state(data)를 변경하기 위한 fucntion
// const reducer = (state) => {}

// store : data를 저장하기 위한 저장소
// const store = createStore(reducer);

// reducer 
// count의 default값 설정(0)
const countModifier = (count = 0, action) => {
    if(action.type === "ADD") {
        return count + 1;
    } else if(action.type === "MINUS") {
        return count - 1;
    } else {
        return count;
    }
}

// store
const countStore = createStore(countModifier);

// dispatch : dispatch를 통해 reducer에 값을 보낼 수 있음
countStore.dispatch({type: "ADD"});

console.log(countStore.getState());

/*
// 기존 VanillaJS 코드

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