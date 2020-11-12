function razgovor() {
  let mojTekst = document.getElementById("mojTekst");
  let konverzacija = document.getElementById("konverzacija");
  let slika = document.getElementById("slika");
  let pisati = document.getElementById("pisati");

  let uvod = ["cao", "zdravo", "hellou"];
  let icebreaker = [" i ja sam dobro takodje", "takodje", "i kod mene ide"];
  let preporuka = [
    "Da li si gledao/la Sundjer Boba? Lignjoslav je moj omiljeni karakter",
    "Koji instrument volis da sviras? Ja volim klarinet",
    "Koju hranu najvise volis da jedes? Ja volim da jedem kebine pljeskavice!",
    "Koje knjige volis? Ja volim istoriju umetnosti"
  ];
  //POCETAK U KONVERZACIJI
  if (
    mojTekst.value == "cao" ||
    mojTekst.value == "caos" ||
    mojTekst.value == "zdravo" ||
    mojTekst.value == "pozdrav" ||
    mojTekst.value == "hello"
  ) {
    konverzacija = document.createElement("P");
    konverzacija.innerHTML = "Ti: " + mojTekst.value + "<br/>";

    setTimeout(function() {
      konverzacija.insertAdjacentHTML(
        "beforeend",
        "Lignjica: " +
          uvod[Math.floor(Math.random() * uvod.length)] +
          "<br>" +
          " Lignjica: kako si?"
      );
    }, 1000);

    document.getElementById("konverzacija").appendChild(konverzacija);
  } else if (mojTekst.value == "") {
    konverzacija = document.createElement("P");
    konverzacija.innerHTML = "Ti: " + mojTekst.value + "<br/>";

    setTimeout(function() {
      konverzacija.insertAdjacentHTML(
        "beforeend",
        "Moras napisati nesto kako bi ostvarili konverzaciju!  <br>Lignjica:  cao, kako si?"
      );
    }, 1000);

    document.getElementById("konverzacija").appendChild(konverzacija);
  } else if (
    mojTekst.value == "dobro" ||
    mojTekst.value == "dobro ti" ||
    mojTekst.value == "dobro ti?" ||
    mojTekst.value == "dobro sam" ||
    mojTekst.value == "dobro sam, a ti" ||
    mojTekst.value == "dobro sam, a ti?" ||
    mojTekst.value == "dobro sam a ti" ||
    mojTekst.value == "dobro sam, ti" ||
    mojTekst.value == "dobro sam, ti?" ||
    mojTekst.value == "dobro sam ti" ||
    mojTekst.value == "dobro sam ti?" ||
    mojTekst.value == "dobro sam kako si ti" ||
    mojTekst.value == "dobro sam kako si ti?" ||
    mojTekst.value == "dobro sam, kako si ti?" ||
    mojTekst.value == "lose" ||
    mojTekst.value == "lose sam" ||
    mojTekst.value == "solidno" ||
    mojTekst.value == "onako" ||
    mojTekst.value == "moze i bolje"
  ) {
    konverzacija = document.createElement("P");
    konverzacija.innerHTML = "Ti: " + mojTekst.value + "<br/>";

    setTimeout(function() {
      konverzacija.insertAdjacentHTML(
        "beforeend",
        "Lignjica: " +
          icebreaker[Math.floor(Math.random() * icebreaker.length)] +
          "<br>" +
          " Lignjica: Kako se zoves?"
      );
    }, 1000);

    document.getElementById("konverzacija").appendChild(konverzacija);
  } else if (
    mojTekst.value == "darko" ||
    mojTekst.value == "nina" ||
    mojTekst.value == "goran" ||
    mojTekst.value == "sol" ||
    mojTekst.value == "kiki" ||
    mojTekst.value == "kristijan" ||
    mojTekst.value == "nikolina" ||
    mojTekst.value == "vilim" ||
    mojTekst.value == "nikola" ||
    mojTekst.value == "kalaj" ||
    mojTekst.value == "jovana" ||
    mojTekst.value == "tea" ||
    mojTekst.value == "teodora" ||
    mojTekst.value == "ljilja" ||
    mojTekst.value == "ljiljana" ||
    mojTekst.value == "marija" ||
    mojTekst.value == "ankica" ||
    mojTekst.value == "anastasija" ||
    mojTekst.value == "nebojsa"
  ) {
    konverzacija = document.createElement("P");
    konverzacija.innerHTML = "Ti: " + mojTekst.value + "<br/>";

    setTimeout(function() {
      konverzacija.insertAdjacentHTML(
        "beforeend",
        "Lignjica: Jao prelepo ime, tako se zvala moja baka" +
          "<br>" +
          " Lignjica: Nego, koji je razlog zasto si ovde zaista?"
      );
    }, 1000);

    document.getElementById("konverzacija").appendChild(konverzacija);
  } else if (
    mojTekst.value == "mrs" ||
    mojTekst.value == "penis" ||
    mojTekst.value == "umri" ||
    mojTekst.value == "kurac" ||
    mojTekst.value == "picka" ||
    mojTekst.value == "jedi govna" ||
    mojTekst.value == "raskidamo" ||
    mojTekst.value == "jebi se" ||
    mojTekst.value == "sex" ||
    mojTekst.value == "sve ti jebem" ||
    mojTekst.value == "jebem te"
  ) {
    konverzacija = document.createElement("P");
    konverzacija.innerHTML = "Ti: " + mojTekst.value + "<br/>";

    setTimeout(function() {
      konverzacija.insertAdjacentHTML(
        "beforeend",
        "Lignjica: Zasto moras da psujes" +
          "<br>" +
          " Lignjica: Ovaj razgovor je gotov, dovidjenja"
      );
    }, 1000);

    setTimeout(function() {
      slika.style.display = "none";
      pisati.style.display = "none";
      brojac.style.display = "none";
    }, 3000);

    document.getElementById("konverzacija").appendChild(konverzacija);
  } else if (mojTekst.value == "klarinet") {
    konverzacija = document.createElement("P");
    konverzacija.innerHTML = "Ti: " + mojTekst.value + "<br/>";

    setTimeout(function() {
      konverzacija.insertAdjacentHTML(
        "beforeend",
        "cestitam, pronadjena je rec koja me lozi, smuvan sam, sada smo u vezi!" +
          "<br>" +
          "<span id='pobeda'>pobeda</span>" +
          '<img src="https://i.pinimg.com/736x/b8/6d/0a/b86d0ab465382b6b0d99de320cb2f711.jpg" width="300px" height="300px">'
      );
    }, 1000);
    setTimeout(function() {
      slika.style.display = "none";
      pisati.style.display = "none";
      brojac.style.display = "none";
    }, 1000);
    document.getElementById("konverzacija").appendChild(konverzacija);
  } else {
    konverzacija = document.createElement("P");
    konverzacija.innerHTML = "Ti: " + mojTekst.value + "<br/>";

    setTimeout(function() {
      konverzacija.insertAdjacentHTML(
        "beforeend",
        "Lignjica: Ne razumem <br/> " +
          "Lignjica: " +
          preporuka[Math.floor(Math.random() * preporuka.length)] +
          ",Ali nazalost nemamo vremena da pricamo o ovome jer me moras smuvati u 60sec tako sto ces naci rec koja me lozi!"
      );
    }, 1000);

    document.getElementById("konverzacija").appendChild(konverzacija);
  }
  //KRAJ BEJZDA

  //KRECE ZAPRAVO PRICA

  //ZAVRSETAK 2.FAZE
}

setTimeout(function() {
  slika.style.display = "none";
  pisati.style.display = "none";
  brojac.style.display = "none";
}, 60000);

function ocisti() {
  document.getElementById("mojTekst").value = "";
}

function fokusiraj() {
  document.getElementById("mojTekst").focus();
}
