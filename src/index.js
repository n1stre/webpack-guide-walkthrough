import _ from "lodash";
import "./styles/css-style.css";
import "./styles/sass-style.sass";
import "./styles/scss-style.scss";
import HelloImg from "./img/hello-800-600.png";

function component({
  tagname = "div",
  innerText = ["Hello", "Webpack"],
  classNames = ["css", "sass", "scss"], 
  src
}) {
  var element = document.createElement(tagname);
  element.innerHTML = _.join(innerText, " ");
  element.classList.add(...classNames)

  if (tagname === "img" && src && typeof src === "string") {
    element.src = src
    element.classList.add("image")
  }

  return element;
}

var h1 = component({ tagname: "h1" });
var img = component({ tagname: "img", src: HelloImg })
var divWithImgBg = component({ 
  tagname: "div", 
  innerText: [],
  classNames: ["sass-img-bg"]
})

document.body.appendChild(img);
document.body.appendChild(h1);
document.body.appendChild(divWithImgBg);