const conversor = document.querySelector('button')

conversor.onclick = () => {
  var anosLuz = Number(document.querySelector('input').value.replace('.',','))
  if (anosLuz < 1) {
    document.querySelector('span').innerHTML = "Valor inválido!"
  } else {
    document.querySelector('span').innerHTML = (anosLuz * 9.5).toFixed(2) + ' KM'
  }  
}

//codigo antigo a  baixo gerava no prompt 
/*var valorEmKmTexto = prompt("Qual o valor KM que você quer converter?") 
 
 
 var ValorEmKmNumero = parseFloat(valorEmKmTexto) 
 
  //fazendo o calculo
 var valorAnoLuz = ValorEmKmNumero / 9.5 
 var valorEmKmFixado = valorAnoLuz.toFixed(2) 
 
 //gerando o alerta com o resultado do calculo na tela
 alert("O valor em Anos Luz é :  " + valorAnoLuz )*/

//Revisão
//variaveis var int- float - string
//alert - joga info na tela
//parseInt e float 
//promt - traz campo pro user digitar na tela