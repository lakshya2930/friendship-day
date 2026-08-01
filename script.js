const params = new URLSearchParams(window.location.search);

const name = params.get("name") || "My Best Friend";

document.getElementById("heading").innerHTML =
"Happy Friendship Day ❤️<br>"+name;

const text =
"Friends are the family we choose ourselves. Thank you for always standing beside me. Wishing you endless happiness today and always.";

let i=0;

function type(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(type,40);

}

}

type();

function gift(){

document.getElementById("letterBox").classList.add("show");

}

function closeLetter(){

document.getElementById("letterBox").classList.remove("show");

}
