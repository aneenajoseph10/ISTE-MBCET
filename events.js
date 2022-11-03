const a1=document.getElementById('team1');
const a2=document.getElementById('team2');
const b1=document.getElementById('th1');
const b2=document.getElementById('th2');
const b3=document.getElementById('th3');
const b4=document.getElementById('th4');

a1.style.display="block";
a2.style.display="none";
b1.style.color="#734045";
b2.style.color="white";
b3.style.color="white";
b4.style.color="white";

b1.addEventListener('click',()=>{
    a1.style.display="block";
    a2.style.display="none";
    b1.style.color="#734045";
    b2.style.color="white";
    b3.style.color="white";
    b4.style.color="white";
});
b2.addEventListener('click',()=>{
    a1.style.display="none";
    a2.style.display="block";
    b1.style.color="white";
    b2.style.color="#734045";
    b3.style.color="white";
    b4.style.color="white";
});
b3.addEventListener('click',()=>{
    a1.style.display="none";
    a2.style.display="none";
    b1.style.color="white";
    b2.style.color="white";
    b3.style.color="#734045";
    b4.style.color="white";
});
b4.addEventListener('click',()=>{
    a1.style.display="none";
    a2.style.display="none";
    b1.style.color="white";
    b2.style.color="white";
    b3.style.color="white";
    b4.style.color="#734045";
});
