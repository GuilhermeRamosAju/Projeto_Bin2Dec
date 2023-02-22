const botao = document.querySelector('button')
const box = document.querySelector('.box')
const resultado = document.createElement('p')

function converter(){
  let binario = document.querySelector('input').value
  
  if(/[2-9]/gm.test(binario) || (/[a-z]/gm.test(binario))){
    resultado.innerText = 'Insira apenas 1 ou 0!'
  }else{
    let numero = Array.from(binario)
    let soma = 0
    let convertido = 0
    let posicao = 0
    for (i=numero.length-1; i >= 0; i--){
      convertido = (2**posicao)*numero[i]
      soma += convertido
      posicao++
      resultado.innerText = `O número ${binario} em decimal é ${soma}.`
    }
    console.log(soma)
    box.appendChild(resultado)
  }
}


