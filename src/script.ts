let numero1 = document.getElementById('numero1') as HTMLInputElement;
let numero2 = document.getElementById('numero2') as HTMLInputElement;
let botao = document.getElementById('botao');
let resultado = document.querySelector('.result')

function caucular (n1: number, n2: number) {
    return n1 + n2 ;
};

botao.addEventListener('click',function(){
    resultado.innerHTML ='Seu resultado e: '+ caucular(+numero1.value,+numero2.value).toString();
});
