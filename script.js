const params=new URLSearchParams(window.location.search);

const name=params.get("name") || "My Best Friend";

document.getElementById("heading").innerHTML=
"Happy Friendship Day ❤️<br>"+name;

const text=
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

function fireworks(){

for(let i=0;i<200;i++){

const heart=document.createElement("div");

heart.innerHTML=Math.random()>0.5?"❤️":"✨";

heart.style.position="absolute";

heart.style.left=Math.random()*100+"vw";

heart.style.top=Math.random()*100+"vh";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.transition="2s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(-200px) scale(2)";

heart.style.opacity=0;

},100);

setTimeout(()=>{

heart.remove();

},2200);

}

}
