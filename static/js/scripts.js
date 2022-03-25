/*!
 * Start Bootstrap - Freelancer v7.0.5 (https://startbootstrap.com/theme/freelancer)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  $("#myModal").modal("toggle");
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 72,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

const listletters = [];
const players = [];
const PLayerActual = new Object();
let contplayer = 0;

function newGame() {
  alert("New Game");
  distributeletters();
}

async function distributeletters(name) {
  await fetch("http://localhost:3000/initgame")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        listletters.push(data[i]);
      }
    });
  $("#myModal").modal("hide");
  for (let i = 0; i < 2; i++) {
    const vec = [];
    for (let j = 0; j < 7; j++) {
      let random = Math.floor(Math.random() * 25);
      if (listletters[random][2] != 0) {
        listletters[random][2] = listletters[random][2] - 1;
      } else {
        random = Math.floor(Math.random() * 25);
      }
      vec.push(listletters[random]);
    }
    username = document.getElementById("user" + (i + 1)).value;
    const player = new Object();
    player.name = username;
    player.points = 0;
    player.letter = vec;
    players.push(player);
  }
  game();
}

function game() {
  if (contplayer == players.length) {
    contplayer = 0;
  }
  PLayerActual.name = players[contplayer].name;
  PLayerActual.points = players[contplayer].points;
  PLayerActual.letter = players[contplayer].letter;
  document.getElementById("usernameindex").innerHTML =
    "PLAYER: " + PLayerActual.name;
  whatchletters(PLayerActual.letter);
}

function whatchletters(list) {
  let aux = "";
  table = document.getElementById("letters");
  alert(contletters());
  for (let i = 0; i < list.length; i++) {
    aux +=
      "<div class='pokemon example-draggable' draggable='true' ondragstart='drag(event)' id=drag" +
      PLayerActual.name +
      i +
      list[i][0] +
      "'><h2>" +
      list[i][0] +
      "</h2></div>";
  }
  table.innerHTML = aux;
  aux = "";
}

function colors() {
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
      document.getElementById(i + ":" + j).style.backgroundColor = "white";
      if (
        (i == 0 && j == 0) ||
        (i == 0 && j == 7) ||
        (i == 0 && j == 14) ||
        (i == 7 && j == 0) ||
        (i == 7 && j == 14) ||
        (i == 14 && j == 0) ||
        (i == 14 && j == 7) ||
        (i == 14 && j == 14)
      ) {
        document.getElementById(i + ":" + j).style.backgroundColor = "red";
      }
      if (
        (i == 1 && j == 5) ||
        (i == 1 && j == 9) ||
        (i == 5 && j == 1) ||
        (i == 5 && j == 5) ||
        (i == 5 && j == 9) ||
        (i == 5 && j == 13) ||
        (i == 9 && j == 1) ||
        (i == 9 && j == 5) ||
        (i == 9 && j == 9) ||
        (i == 9 && j == 13) ||
        (i == 13 && j == 5) ||
        (i == 13 && j == 9)
      ) {
        document.getElementById(i + ":" + j).style.backgroundColor = "blue";
      }
      if (
        (i == 1 && j == 1) ||
        (i == 2 && j == 2) ||
        (i == 3 && j == 3) ||
        (i == 4 && j == 4) ||
        (i == 10 && j == 10) ||
        (i == 11 && j == 11) ||
        (i == 12 && j == 12) ||
        (i == 13 && j == 13)||
        (i == 13 && j == 1)||
        (i == 12 && j == 2)||
        (i == 11 && j == 3)||
        (i == 10 && j == 4)||
        (i == 1 && j == 13)||
        (i == 2 && j == 12)||
        (i == 3 && j == 11)||
        (i == 4 && j == 10)
      ) {
        document.getElementById(i + ":" + j).style.backgroundColor = "yellow";
      }
      if (
        (i == 0 && j == 3) ||
        (i == 0 && j == 11) ||
        (i == 2 && j == 6) ||
        (i == 2 && j == 8) ||
        (i == 3 && j == 0) ||
        (i == 3 && j == 7) ||
        (i == 3 && j == 14) ||
        (i == 6 && j == 2)||
        (i == 6 && j == 6)||
        (i == 6 && j == 8)||
        (i == 6 && j == 12)||
        (i == 7 && j == 3)||
        (i == 7 && j == 11)||
        (i == 8 && j == 2)||
        (i == 8 && j == 6)||
        (i == 8 && j == 8)||
        (i == 8 && j == 12)||
        (i == 8 && j == 12)||
        (i == 11 && j == 0)||
        (i == 11 && j == 7)||
        (i == 11 && j == 14)||
        (i == 12 && j == 6)||
        (i == 12 && j == 8)||
        (i == 14 && j == 3)||
        (i == 14 && j == 11)
      ) {
        document.getElementById(i + ":" + j).style.backgroundColor = "#0dcaf0";
      }
    }
  }
}

function valueLetter(opc) {
  for (let i = 0; i < listletters.length; i++) {
    if (listletters[i][0] == opc) {
      return listletters[i][1];
    }
  }
}
let fichasborradas = 0;
let conletters = [];
async function data() {
  conletters = [];
  var resume_table = document.getElementById("tableScrabble");
  const vec = [];
  const vecword = [];
  let word = "";
  let posx = "";
  let posy = "";
  for (let i = 0, row; (row = resume_table.rows[i]); i++) {
    const vec1 = [];
    for (var j = 0, col; (col = row.cells[j]); j++) {
      var box = new Object();
      box.x = i;
      box.y = j;
      box.pp = col.innerText;
      vec1.push(box);
    }
    vec.push(vec1);
  }
  for (let i = 0; i < vec.length; i++) {
    for (var j = 0; j < vec[0].length; j++) {
      if (vec[i][j].pp.length != 0) {
        word += vec[i][j].pp;
        posx += i + ",";
        posy += j + ",";
      }
      if (vec[i][j].pp.length == 0 && word.length > 0) {
        var newObj = new Object();
        newObj.word = word;
        newObj.posx = posx;
        newObj.posy = posy;
        vecword.push(newObj);
        word = "";
        posx = "";
        posy = "";
      }
      if (j == vec[0].length - 1 && word.length > 0) {
        var newObj = new Object();
        newObj.word = word;
        newObj.posx = posx;
        newObj.posy = posy;
        vecword.push(newObj);
      }
    }
    word = "";
    posx = "";
    posy = "";
  }

  for (let i = 0; i < vec[0].length; i++) {
    for (var j = 0; j < vec.length; j++) {
      if (vec[j][i].pp.length != 0) {
        word += vec[j][i].pp;
        posx += j + ",";
        posy += i + ",";
      }
      if (vec[j][i].pp.length == 0 && word.length > 0) {
        var newObj = new Object();
        newObj.word = word;
        newObj.posx = posx;
        newObj.posy = posy;
        vecword.push(newObj);
        word = "";
        posx = "";
        posy = "";
      }
      if (j == vec[0].length - 1 && word.length > 0) {
        var newObj = new Object();
        newObj.word = word;
        newObj.posx = posx;
        newObj.posy = posy;
        vecword.push(newObj);
      }
    }
    word = "";
    posx = "";
    posy = "";
  }

  colors();
  testing();

  let actualpoints = 0;
  for (let i = 0; i < vecword.length; i++) {
    await fetch("http://localhost:3000/words?word=" + vecword[i].word)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.length > 0) {
          const posy = vecword[i].posy.split(",");
          const posx = vecword[i].posx.split(",");
          for (let k = 0; k < posy.length - 1; k++) {
            conletters.push(vecword[i]);
            document.getElementById(
              posx[k] + ":" + posy[k]
            ).style.backgroundColor = "green";
          }
          for (let j = 0; j < vecword[i].word.length; j++) {
            actualpoints += valueLetter(vecword[i].word[j]);
          }
        }
      });
    document.getElementById("actualpoints").innerHTML = "" + actualpoints;
  }
}

function next() {
  console.log(conletters.length);
  if (conletters.letter != fichasborradas) {
    for (let index = 0; index < conletters.length; index++) {
      for (let j = 0; j < conletters[index].word.length; j++) {
        for (let k = 0; k < PLayerActual.letter.length; k++) {
          if (PLayerActual.letter[k][0] == conletters[index].word[j]) {
            PLayerActual.letter.splice(k, 1);
            break;
          }
        }
      }

      for (let i = 0; i < 7 - PLayerActual.letter.length; i++) {
        let random = Math.floor(Math.random() * 25);
        if (listletters[random][2] != 0) {
          listletters[random][2] = listletters[random][2] - 1;
        } else {
          random = Math.floor(Math.random() * 25);
        }
        PLayerActual.letter.push(listletters[random]);
      }
      fichasborradas = conletters.length;
    }
  }

  contplayer++;
  alert("player change " + contplayer);
  game();
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  document.getElementById(data).value = "a";
}

function testing() {
  const alert = document.getElementById("missingletters");
  alert.innerHTML = contletters();
}

function contletters() {
  let cont = 0;
  for (let i = 0; i < listletters.length; i++) {
    cont += listletters[i][2];
  }
  return cont;
}

setInterval("data()", 1000);