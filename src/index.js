import _ from "lodash";
import "./styles/css-style.css"
import "./styles/sass-style.sass"
import "./styles/scss-style.scss"

function component(tagname) {
  var element = document.createElement(tagname || "div");
  element.innerHTML = _.join(["Hello", "webpack!!!"], " ");
  element.classList.add("css","sass","scss")
  return element;
}

document.body.appendChild(component("h1"));