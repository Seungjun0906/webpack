import _ from "lodash";
import "./style.css";
import Icon from "./info.png";

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack", " "]);
  element.classList.add("hello");

  // 기존 div에 Icon 추가하기
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
