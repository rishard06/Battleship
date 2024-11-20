import "./style.css";
import img from "./hhh.png";

function component() {
  const element = document.createElement('div');
  
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = "hello webpack";
  
  return element;
}

const element = document.createElement('img');
element.src = img;
 
document.body.appendChild(component());
document.body.appendChild(element);