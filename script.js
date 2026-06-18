const debut = new Date("2026-02-15");

/* =========================
   FILM MODE
========================= */

function lancerFilm(){

const intro = document.getElementById("intro");

intro.classList.add("fade-out");

setTimeout(()=>{

intro.remove();

},1500);

}

/* =========================
   COMPTEUR AMOUR
========================= */

function majCompteur(){

const maintenant = new Date();

const diff = maintenant - debut;

const jours = Math.floor(diff / (1000 * 60 * 60 * 24));

const heures = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

const secondes = Math.floor((diff % (1000 * 60)) / 1000);

const el = document.getElementById("compteur");

if(el){

el.innerHTML = `❤️ Ensemble depuis<br><br>
${jours} jours<br>
${heures} heures<br>
${minutes} minutes<br>
${secondes} secondes`;

}

}

majCompteur();

setInterval(majCompteur, 1000);

/* =========================
   MUSIQUE
========================= */

const musique = document.getElementById("musique");

const boutonMusique = document.getElementById("musiqueBtn");

let joue = false;

if(boutonMusique){

boutonMusique.onclick = function(){

if(joue){

musique.pause();

boutonMusique.innerHTML = "▶ Notre musique";

joue = false;

}else{

musique.play();

boutonMusique.innerHTML = "⏸ Pause";

joue = true;

}

};

}

/* =========================
   MESSAGE SECRET
========================= */

const secretBtn = document.getElementById("secretBtn");

if(secretBtn){

secretBtn.onclick = function(){

const msg = document.getElementById("message");

msg.style.display = "block";

msg.scrollIntoView({behavior: "smooth"});

explosionCoeurs();

};

}

/* =========================
   COEURS QUI TOMBENT
========================= */

function creerCoeur(){

const coeur = document.createElement("div");

const emojis = ["❤️","💖","💕","💘"];

coeur.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

coeur.classList.add("heart");

coeur.style.left = Math.random() * 100 + "vw";

coeur.style.animationDuration = (Math.random() * 3 + 2) + "s";

coeur.style.fontSize = (Math.random() * 20 + 15) + "px";

document.body.appendChild(coeur);

setTimeout(()=>{

coeur.remove();

},6000);

}

setInterval(creerCoeur, 200);

/* =========================
   EXPLOSION COEURS
========================= */

function explosionCoeurs(){

for(let i = 0; i < 30; i++){

const coeur = document.createElement("div");

coeur.innerHTML = "❤️";

coeur.style.position = "fixed";

coeur.style.left = Math.random() * 100 + "vw";

coeur.style.top = "50vh";

coeur.style.fontSize = (Math.random() * 30 + 10) + "px";

coeur.style.zIndex = "9999";

coeur.style.transition = "all 1s ease";

document.body.appendChild(coeur);

setTimeout(()=>{

coeur.style.transform = "translateY(-200px) scale(1.5)";

coeur.style.opacity = "0";

},50);

setTimeout(()=>{

coeur.remove();

},1000);

}

}