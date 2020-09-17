let difs = document.querySelectorAll(".difficult");
let checks = document.querySelectorAll("#rhombus");
let menu = document.querySelector(".menu");
let play = document.querySelector(".btn");
let table = document.querySelector(".table");
let field = document.querySelector(".field");
let cards = document.querySelectorAll(".table-card__wrap");
let fronts = document.querySelectorAll(".card-loser");

play.disabled = true;

let clean = function () {
  for(let check of checks){
    if (check.classList.contains("difficult-check")){
      check.classList.remove("difficult-check");
    }
  }
};

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

let chooseDifs = function (dif, romb) {
  dif.onclick = function () {
    clean();
    romb.classList.add("difficult-check");
    switch (true) { 
      case dif.innerHTML.indexOf("Простой") !== -1:
          field.style.width = "726px";
          field.style.height = "600px";
          break;
      case dif.innerHTML.indexOf("Средний") !== -1:
          field.style.width = "727px";
          field.style.height = "inherit";
          break;
      case dif.innerHTML.indexOf("Сложный") !== -1:
          field.style.width = "1220px";
          field.style.height = "inherit";
          break;        
    }
    play.innerHTML = "Начать игру";
    play.disabled = false;
  };
};

let selectDfis = function() {
  for (let i = 0; i <= difs.length-1; i++){
    chooseDifs(difs[parseInt(i)],checks[parseInt(i)]);
  }
};

selectDfis();

play.onclick = function () {
  menu.style.display = "none";
  table.style.display = "flex";
  switch (field.style.width){
    case "726px":
      for(let i=0; i<3; i++){
        cards[parseInt(i)].style.display = "flex";
      }
      fronts[randomInteger(0, 2)].src = "images/bug.png";
      break;
    case "727px":
      for(let i=0; i<6; i++){
        cards[i].style.display = "flex";
      }
      fronts[randomInteger(0, 5)].src = "images/bug.png";
      break;
    case "1220px":
      for(let i=0; i<10; i++){
        cards[i].style.display = "flex"; 
      }
      fronts[randomInteger(0, 9)].src = "images/bug.png";
      break;
  }
};


let flip = function() {
  for(let card of cards){
    card.onclick = function () {
    card.classList.add("rotate");
    for(let card of cards){
      card.onclick = function () {
        window.location.href=window.location.href;
      };
    }
  };
}
};

flip();