import _ from "lodash";

function component({
  tagname = "div",
  innerText = ["Hello", "Webpack"]
}) {
  var element = document.createElement(tagname);
  element.innerHTML = _.join(innerText, " ");
  return element;
}

document.body.appendChild(component({ tagname: "h1" }));