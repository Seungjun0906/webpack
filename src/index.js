import _ from "lodash";
import "./style.css";
import Icon from "./info.png";

function component() {
  const element = document.createElement("div");

  const span = document.createElement("span");

  span.innerHTML = "hello";
  span.classList.add("hello");

  element.appendChild(span);

  const span2 = document.createElement("span");
  span2.innerHTML = "wrold";
  span2.classList.add("world");

  element.appendChild(span2);

  // element.innerHTML = _.join(["Hello", "webpack", " "]);
  // element.classList.add("hello");

  // 기존 div에 Icon 추가하기
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
