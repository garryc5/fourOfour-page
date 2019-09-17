function rng(max)
{
   return  (Math.random() * (0 - max) + max);
}
var spawnRate = 10;
var spawnCheck = 0;

function add404(){
var f04 =document.createElement('div');
f04.setAttribute('class','ballon');
f04.textContent= '#404';
f04.style.left =`${rng(100)}vw`;
f04.style.top =`${rng(100)}vh`;
f04.style.fontSize=`${rng(30)}`
f04.style.color = `rgb(${rng(255)},${rng(255)},${rng(255)})`;
document.querySelector('body').appendChild(f04);
}
function four04()
{
    spawnCheck++;
    add404();
}

var nope = window.setInterval(four04,(1000/24));
