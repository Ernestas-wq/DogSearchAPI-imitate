const searchKey = document.getElementById("search");
const results = document.getElementById("results");
const charSelect = document.getElementById("char");
const temperament = [];
const debounce = (func, wait) => {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

data.forEach((dog) => {
  var url = dog.url;
  dog.breeds.forEach((dog) => {
    temperament.push(dog.temperament);
    createCard();
    cardImage.style.backgroundImage = `url(${url})`;
    cardContentH2.innerText = dog.name;
    cardContentP.innerHTML = `Breed group: ${dog.breed_group}<br>Life span: ${dog.life_span}`;
    // var cards = Array.from(document.getElementsByClassName("card"));
  });
});

var card, cardContent, cardImage, cardContentH2, cardContentP;
function createCard() {
  card = document.createElement("div");
  card.className += "card";
  cardImage = document.createElement("div");
  cardImage.className += "card__image";
  cardContent = document.createElement("div");
  cardContent.className += "card__content";
  cardContentH2 = document.createElement("h2");
  cardContentP = document.createElement("p");
  results.appendChild(card);
  card.appendChild(cardImage);
  card.appendChild(cardContent);
  cardContent.appendChild(cardContentH2);
  cardContent.appendChild(cardContentP);
}
// Search
searchKey.addEventListener('keyup', debounce(function (e) {
  display();
}, 300));


charSelect.addEventListener('change', debounce(function (e) {
  display();
}, 300));

function display() {
  let searchResults = 0;
  data.forEach((item, index) => {
   results.children[index].classList.add('hide');
    if(item.breeds[0].name.toLowerCase().includes(searchKey.value.toLowerCase()) && 
    item.breeds[0].temperament.toLowerCase().includes(charSelect.value.toLowerCase()) )  {
      results.children[index].classList.remove("hide");
      searchResults++;
    }
  })
}