
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator() {
  let dogArray = [];
  for (let key in dogs) {
    let atag = document.createElement("a");
    atag.innerHTML = key;
    atag.href = dogs[key];
    let litag = document.createElement("li");
    litag.classList.add("dog-link");
    litag.appendChild(atag);
    dogArray.push(litag);
  }
  return dogArray;
}

function attachDogLinks() {
  let dogLinks = dogLinkCreator();

  let ulElement = document.getElementsByClassName("drop-down-dog-list")[0];
  dogLinks.forEach(el => {
    ulElement.appendChild(el);
  });

}




attachDogLinks();

function handleEnter() {
  let linksArray = Array.from(document.getElementsByClassName("dog-link"));
  linksArray.forEach(el => {
    el.classList.remove("dog-link");
  });
}

function handleLeave() {
  let linksArray = Array.from(document.querySelectorAll(".drop-down-dog-nav li"));
  linksArray.forEach(el => {
    el.classList.add("dog-link");
  });
}


document.querySelector(".drop-down-dog-nav").addEventListener("mouseenter", handleEnter);

document.querySelector(".drop-down-dog-nav").addEventListener("mouseleave", handleLeave);

