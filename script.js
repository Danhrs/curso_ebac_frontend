const form  = document.getElementById('form-maiorq');

function maiorQue(valorA,valorB){
    valA = parseInt(valorA.value);
    valB = parseInt(valorB.value);
    if (valB > valA){
        return true;
    }
    else{
        return false;
    }
    
}


form.addEventListener('submit',function(e){
    e.preventDefault();

    const A = document.getElementById('valueA');
    const B = document.getElementById('valueB');

    const mensagemSucesso = `BOOOOA! o Valor de B: <b>${B.value}</b> é maior que valor de A: <b>${A.value}</b>`
    const mensagemErro = `Tente Novamente =( ! o Valor de A: <b>${A.value}</b> é maior que valor de B: <b>${B.value}</b>`

    formValido = maiorQue(A,B);

    if (formValido == true){
        const containerMensagem = document.querySelector('#message');
        containerMensagem.innerHTML = mensagemSucesso;
        containerMensagem.style.display = 'block';

        A = '';
        B = '';
    }
    else{
        const containerMensagem = document.querySelector('#message');
        containerMensagem.innerHTML = mensagemErro;
        containerMensagem.style.display = 'block';

        A = '';
        B = '';
    }
})

