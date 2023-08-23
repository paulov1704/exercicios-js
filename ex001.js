function calcular(){
    var num = document.getElementById('number').value //pega o valor do input
    var resultado = document.getElementById('resultado') //pega o id do span

    num **= 3 // faz a operação aritmética num**3

    resultado.innerHTML = num // declara que a variável será escrita no documento
    
}