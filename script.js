const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

//FUNÇÃO QUE PEGA O TEXTO PARA ENCRIPTAR

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

// FUNÇÃO PARA ENCRIPTAR A MENSAGEM

function encriptar(mensagemEncriptada) { 

    let matrizCodigo = [
        ["e", "enter"],
        ["a", "ai"],
        ["i", "imes"],
        ["o", "ober"],
        ["u", "ufat"],
        ["aimes", "ai"]
    ]    
   
    mensagemEncriptada = mensagemEncriptada.toLowerCase(); 
    

    for (let letra = 0; letra < matrizCodigo.length; letra++) {             
        
        if(mensagemEncriptada.includes(matrizCodigo[letra][0])) {
           mensagemEncriptada = mensagemEncriptada.replaceAll(matrizCodigo[letra][0], matrizCodigo[letra][1]);            
            
        }
        
    }    

    return mensagemEncriptada;  
}

//FUNÇÃO QUE PEGA O TEXTO PARA DESENCRIPTAR

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = '';
}

// FUNÇÃO PARA DESENCRIPTAR A MENSAGEM

function desencriptar(mensagemDesencriptada) { 

    let matrizCodigo = [
        ["e", "enter"], 
        ["a", "ai"], 
        ["i", "imes"], 
        ["o", "ober"], 
        ["u", "ufat"]
    ]  
    mensagemDesencriptada = mensagemDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if (mensagemDesencriptada.includes(matrizCodigo[i][0])) {
            mensagemDesencriptada = mensagemDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return mensagemDesencriptada;
}

//FUNÇÃO COPIAR TEXTOS

function btnCopiarTexto() {

    textoCopiado = document.getElementById("mensagem");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999); //para mobile
    document.execCommand("copy");

    

}



let mudarFundoTextArea = document.getElementById('mensagem');
let cliqueBtEncriptar = document.getElementById('bt-encriptar');

cliqueBtEncriptar.addEventListener('click', function() {
    mudarFundoTextArea.style.backgroundImage = 'none';
    mudarFundoTextArea.style.color = '#0A3871';
})

let cliqueBrdesencriptar = document.getElementById('bt-desencriptar');

cliqueBrdesencriptar.addEventListener('click', function() {
    mudarFundoTextArea.style.backgroundImage = 'none';
    mudarFundoTextArea.style.color = '#0A3871';
})


