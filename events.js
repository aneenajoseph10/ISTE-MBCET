const a1=document.getElementById('team1');
const b1=document.getElementById('th1');
const b2=document.getElementById('th2');
const b3=document.getElementById('th3');
const b4=document.getElementById('th4');

a1.style.display="block";

b1.addEventListener('click',()=>{
    a1.style.display="block";
});
b2.addEventListener('click',()=>{
    a1.style.display="none";
});
b3.addEventListener('click',()=>{
    a1.style.display="none";
});
b4.addEventListener('click',()=>{
    a1.style.display="none";
});
