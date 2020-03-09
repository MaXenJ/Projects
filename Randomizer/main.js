let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let result = document.querySelector('.result');
let btn = document.querySelector('.btn');


btn.addEventListener('click', () => {

    let val1 = Number(input1.value);
    let val2 = Number(input2.value);
    
    result.style.fontSize = '140px';
    result.style.color ='grey';
    result.textContent = Randomizer(val1, val2);
})




function Randomizer (min, max) {

       if (isNaN(min) == true && isNaN(max) == true) { 
            return 'Invalid numbers';
    }
       else if (isNaN(max) == true) {
            return 'Max is not a number'; 
    }
       else if (isNaN(min) == true) {
            return 'Min is not a number';
    }
           else return min + Math.round(Math.random() * (max-min));
    
}


