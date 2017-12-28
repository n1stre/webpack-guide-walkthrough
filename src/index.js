function component(tagname) {
  var element = document.createElement(tagname || 'div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

document.body.appendChild(component('h1'));