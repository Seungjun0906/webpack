import _ from "lodash";
import "./style.css";
import Icon from "./info.png";
// import dataCSV from "./data.csv";
// import dataXML from "./data.xml";
import dataJSON from "@assets/data.json";
import dataTOML from "@assets/data.toml";
import dataYAML from "@assets/data.yaml";
import dataJSON5 from "@assets/data.json5";

console.log(dataJSON);
console.log(dataTOML);
console.log(dataYAML);
console.log(dataJSON5);

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
  console.log(dataJSON);

  // element.innerHTML = _.join(["Hello", "webpack", " "]);
  // element.classList.add("hello");

  // 기존 div에 Icon 추가하기
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  // console.log(dataCSV);
  // console.log(dataXML);

  return element;
}

document.body.appendChild(component());
