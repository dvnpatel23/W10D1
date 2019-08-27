
// import clock from "./clock.js";

const partyHeader = document.getElementById('party');
let string = "I <3 Vanilla DOM manipulation So much!!!!";

export const htmlGenerator = (string, htmlElement) => {
  let paragraph = document.createElement("P");
  let text = document.createTextNode(string);
  paragraph.appendChild(text);
  htmlElement.appendChild(paragraph);
  

};

htmlGenerator(string , partyHeader);