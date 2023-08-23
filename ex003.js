function show(){
    var nome = document.getElementById('nome').value
    var curso = document.getElementById('curso').value
    var disc = document.getElementById('disc').value
    var media = document.getElementById('requerido')
    //Funciona como o valor das notas no banco de dados, caso houvesse um. Apenas para aplicar a lógica
    var nota1 = 6
    var nota2 = 8
    var med = (nota1+nota2)/2

    if(nome == 'Paulo Vitor' && curso == 'Informática' && disc == 'Matemática'){
        media.innerHTML = `Nota 1: ${nota1}, nota 2: ${nota2}. Aqui está a sua média: ${med}.`
    }else{
        media.innerHTML = 'Não encontramos as notas compatíveis com as informações.'
    }
}