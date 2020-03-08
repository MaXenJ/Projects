let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let result = document.querySelector('.result');
let btn = document.querySelector('.btn');


function Randomizer (min, max) {
    let res = min + Math.round(Math.random() * (max-min));
     result.textContent = res;
    return result;    
}


btn.addEventListener('click', () => {
    result.style.fontSize = '280px';
    result.style.color ='grey';
    Randomizer(Number(input1.value), Number(input2.value));
})
