import _ from "lodash";
import printMe from "./print";

function component({
  tagname = "div",
  innerText = ["Hello", "Webpack"]
}) {
  var element = document.createElement(tagname);
  element.innerHTML = _.join(innerText, " ");
  return element;
}

var wrapper = component({innerText: []})
var h1 = component({tagname: "h1"})
var btn = component({
  tagname: "button",
  innerText: ["Click me and check the console!"]
})

wrapper.appendChild(h1);
wrapper.appendChild(btn);
btn.onclick = printMe;

document.body.appendChild(wrapper);