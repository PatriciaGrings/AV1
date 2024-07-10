var aParede = 0
var tipoTinta = 0
var textoTinta= ''
var aAberturas= 0
var aParedeTot=0
var aAberturasTot=0
var vetParedes = []
var vetAberturas = []

function tinta() {
    var ttinta = document.getElementById('txtTinta')
    var escolha = Number(ttinta.value)
    
    switch (escolha) {
        case 1:
            tipoTinta= 8
            textoTinta= 'Látex ou PVA'
        break
        case 2:
            tipoTinta= 8
            textoTinta='Acrílica'
        break
        case 3:
            tipoTinta= 12
            textoTinta='Esmalte'
        break
        case 4:
            tipoTinta= 8
            textoTinta='Epóxi'
        break
        case 5:
            tipoTinta= 10
            textoTinta='Óleo'
        break
        case 6:
            tipoTinta= 12
            textoTinta='Verniz'
        break
        case 7:
            tipoTinta= 14
            textoTinta='Acrílica fosca premium'
        break
        case 8:
            tipoTinta= 9
            textoTinta='Epóxi à base de água'
        break
    }

    var tintas= document.getElementById('txtTipotinta')
    tintas.innerHTML= 'Você selecionou o tipo ' + tipoTinta + ': ' + textoTinta
    document.getElementById('txtTinta').value = ""
}

function paredes() {
    aParede = 0
    var altParede = document.getElementById('hParede').value    /* Pega a altura da parede do HTML */
    var altParede = parseFloat(altParede.replace(',', '.'))     /* Transforma a altura em n. real */
    var largParede = document.getElementById('lParede').value   /* Pega a largura da parede do HTML */
    var largParede = parseFloat(largParede.replace(',', '.'))   /* Transforma a largura em n. real */ 
    if (isNaN(altParede) || isNaN(largParede)) {
        window.alert('Preencha os campos de altura e largura corretamente!')
        document.getElementById('hParede').value = ""
        document.getElementById('lParede').value = ""
        return
    }
    else{    
    aParede= altParede*largParede   /* Calculo da área da parede */
    vetParedes.push(aParede)        /* Coloca a área da parede no vetor */
    document.getElementById('hParede').value = ""   /* Limpa a entrada de altura no HTML */
    document.getElementById('lParede').value = ""   /* Limpa a entrada de largura no HTML */
    var parede= document.getElementById('txtParede') 
    parede.innerHTML+= '<br>Área da parede: ' + aParede.toFixed(2)
    
    }
}

function aberturas(){
    aAberturas= 0
    var altAbert = document.getElementById('hAberturas').value
    var altAbert= parseFloat(altAbert.replace(',', '.'))
    var largAbert = document.getElementById('lAberturas').value
    var largAbert= parseFloat(largAbert.replace(',', '.'))
    if (isNaN(altAbert) || isNaN(largAbert)) {
        window.alert('Preencha os campos de altura e largura corretamente!')
        document.getElementById('hAberturas').value = ""
        document.getElementById('lAberturas').value = ""
        return
    }
    else{    
        aAberturas= altAbert*largAbert
        vetAberturas.push(aAberturas)            
        document.getElementById('hAberturas').value = ""
        document.getElementById('lAberturas').value = ""

        var abertura= document.getElementById('txtAbert')
        abertura.innerHTML+= '<br>Área da abertura: ' + aAberturas.toFixed(2)
    }    
}
    
function calcular() {
    aParedeTot=0
    aAberturasTot=0
        
    for (var con=0; con<vetParedes.length; con++ ){
        aParedeTot += vetParedes[con]   
        
    }
    for (var cont=0; cont<vetAberturas.length; cont++ ){
        aAberturasTot += vetAberturas[cont]   
        
    }
    var aTot= aParedeTot-aAberturasTot   
    var calculo= aTot/tipoTinta
    var calculoFinal = document.getElementById('txtCalculo2')
    calculoFinal.innerHTML = ''
    calculoFinal.innerHTML = 'O tipo de tinta utilizado foi: ' + textoTinta + '<br>A área total de paredes é de: ' + (aParedeTot.toFixed(2)) + 'm² <br>'+ 'A área total de aberturas é de: ' + (aAberturasTot.toFixed(2)) + 'm² <br>' + 'A área útil de paredes considerada para o cálculo é de: ' + (aTot.toFixed(2)) + 'm² <br>' + 'Devem ser utilizados ' + (calculo.toFixed(2)) + ' litros de tinta por demão.<br>No caso de duas demãos, deverão ser utilizados ' + ((calculo * 2).toFixed(2)) + ' litros de tinta.'    
} 
function resetForm() {
    aParede = 0
    tipoTinta = 0
    aAberturas= 0
    aParedeTot=0
    aAberturasTot=0
    vetParedes = []
    vetAberturas = []
    document.getElementById('txtAbert').innerHTML = ''
    document.getElementById('txtParede').innerHTML = ''
    document.getElementById('txtTipotinta').innerHTML = ''
    document.getElementById('txtCalculo2').innerHTML = ''
    document.getElementById('txtTinta').innerHTML = ''
    abertura.innerHTML = ''
    parede.innerHTML = ''
    tintas.innerHTML = ''
    calculoFinal.innerHTML = ''
}  

    

