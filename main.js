const insert = (num) =>{
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean(){
    document.getElementById('resultado').innerHTML = " ";
}
function back(){
    let resultado = document.getElementById('resultado').innerHTML.trim();
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1)
}
const calcular = ()=>{
    let resultado = document.getElementById('resultado').innerHTML.replace("X","*")
    document.getElementById('resultado').innerHTML = eval(resultado);
    if(document.getElementById('resultado').innerHTML == 'Infinity' || document.getElementById('resultado').innerHTML == 'undefined' ){
        document.getElementById('resultado').innerHTML = 'Erro';
    }
}
const body = document.querySelector('body');
const calculadora = document.querySelector('.calculadora')
const botoesOperacoes = document.querySelector('.botao-operador')

const lightButton = document.querySelector(".lightModeButton");
const darkButton = document.querySelector(".darkModeButton");

function change(current,next){
    if(current == 'light'){
        lightButton.style.display = 'none';
    } else if(current == 'dark'){
        darkButton.style.display = 'none';
    }
    if(next == 'dark'){
        darkButton.style.display = 'block';
        darkButton.style.marginLeft = 'auto';
        darkButton.style.marginRight = 'auto';
    } else if(next == 'light'){
        lightButton.style.display = 'block';
        lightButton.style.marginLeft = 'auto';
        lightButton.style.marginRight = 'auto';
    }
}
const tituloh1 = document.querySelector('h1');

const trocaCorDark =()=>{
    change('dark','light');
    tituloh1.style.color = 'white';
    calculadora.style.backgroundImage = 'linear-gradient(to right, #35965a, #63d471)';
    body.style.backgroundImage = 'linear-gradient(to right,#203044, #46174b)';
}
const trocaCorLight =()=>{
    change('light','dark');
    tituloh1.style.color = '#59355d';
    calculadora.style.backgroundImage = 'linear-gradient(to right, #476892, #59355d)';
    body.style.backgroundImage = 'linear-gradient(to right, #fff6b7, #f6416c)';
}