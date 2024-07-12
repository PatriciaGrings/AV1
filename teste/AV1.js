/*var aParede = 0*/
var tipoTinta = 0
var textoTinta= ''
var aAberturas= 0
var aParedeTot=0
var aAberturasTot=0
var vetParedes = []
var vetAberturas = []
var vetTeste = []
var elementoClicado=0
var textoElemento=0
var clique= evList('op1',tinta)
var clique= evList('op2',tinta)
var clique= evList('op3',tinta)
var clique= evList('op4',tinta)
var clique= evList('op5',tinta)
var clique= evList('op6',tinta)
var clique= evList('op7',tinta)
var clique= evList('op8',tinta)

function evList(n1,n2) {
    var clicar = document.getElementById(n1).addEventListener("click",n2)
    return clicar
}

function tinta(){
    elementoClicado = this
    textoElemento = elementoClicado.value
    if (elementoClicado.id === 'op1' || elementoClicado.id === 'op2' || elementoClicado.id === 'op4') {
        textoElemento = 8;
    }
    else if (elementoClicado.id === 'op3' || elementoClicado.id === 'op6') {
        textoElemento = 12;
    }
    else if (elementoClicado.id === 'op5') {
        textoElemento = 10;
    }
    else if (elementoClicado.id === 'op7') {
        textoElemento = 14;
    }
    else if (elementoClicado.id === 'op8') {
        textoElemento = 9;
    }

    var tintas= document.getElementById('txtTipotinta') /*Cria uma variável para interagir com a div que vai mostrar o tipo de tinta escolhido*/
    tintas.innerHTML= 'Você selecionou tinta: ' + elementoClicado.innerText
    document.getElementById('txtTinta').value = "" /*Limpa no HTML o tipo de tinta escolhido */
}

function paredes() {
    /*aParede = 0*/
    var altParede = document.getElementById('hParede').value    /* Pega a altura da parede do HTML */
    var altParede = parseFloat(altParede.replace(',', '.'))     /* Transforma a altura em n. real */
    var largParede = document.getElementById('lParede').value   /* Pega a largura da parede do HTML */
    var largParede = parseFloat(largParede.replace(',', '.'))   /* Transforma a largura em n. real */ 
    if (isNaN(altParede) || isNaN(largParede)) {    /*Validação para obrigar que se insira valores antes de pressionar ok */
        window.alert('Preencha os campos de altura e largura corretamente!')
        document.getElementById('hParede').value = ""
        document.getElementById('lParede').value = ""
        return
    }
    else{    
    aParede= calc(altParede,largParede)   /* Calculo da área da parede */
    vetParedes.push(aParede)        /* Coloca a área da parede no vetor */
    document.getElementById('hParede').value = ""   /* Limpa a entrada de altura no HTML */
    document.getElementById('lParede').value = ""   /* Limpa a entrada de largura no HTML */
    var parede= document.getElementById('txtParede')    /*Cria uma variável para interagir com a div que vai mostrar a área das paredes*/
    parede.innerHTML+= '<br>Área da parede: ' + aParede.toFixed(2)  /*Exibe no HTML a área das paredes */
    }
}

function calc(n1,n2){
    var multi= n1*n2
    return multi
}

function aberturas(){
    aAberturas= 0
    var altAbert = document.getElementById('hAberturas').value    /* Pega a altura da parede do HTML */
    var altAbert = parseFloat(altAbert.replace(',', '.'))     /* Transforma a altura em n. real */
    var largAbert = document.getElementById('lAberturas').value   /* Pega a largura da parede do HTML */
    var largAbert = parseFloat(largAbert.replace(',', '.'))   /* Transforma a largura em n. real */
    if (isNaN(altAbert) || isNaN(largAbert)) { /*Validação para obrigar que se insira valores antes de pressionar ok */
        window.alert('Preencha os campos de altura e largura corretamente!')
        document.getElementById('hAberturas').value = ""
        document.getElementById('lAberturas').value = ""
        return
    }
    else{    
        aAberturas= calc(altAbert,largAbert)  /* Calculo da área da abertura */
        vetAberturas.push(aAberturas)   /* Coloca a área da abertura no vetor */            
        document.getElementById('hAberturas').value = ""    /* Limpa a entrada de altura no HTML */
        document.getElementById('lAberturas').value = ""    /* Limpa a entrada de largura no HTML */

        var abertura= document.getElementById('txtAbert')   /*Cria uma variável para interagir com a div que vai mostrar a área das aberturas*/
        abertura.innerHTML+= '<br>Área da abertura: ' + aAberturas.toFixed(2)   /*Exibe no HTML a área das aberturas */
    }    
}
    
function calcular() {
    aParedeTot=0
    aAberturasTot=0
        
    for (var con=0; con<vetParedes.length; con++ ){ /*Percorre o vetor com as áreas das paredes para somar todas e salvar a soma em uma variável */
        aParedeTot += vetParedes[con]   
        
    }
    for (var cont=0; cont<vetAberturas.length; cont++ ){    /*Percorre o vetor com as áreas das aberturas para somar todas e salvar a soma em uma variável */
        aAberturasTot += vetAberturas[cont]   
        
    }
    var aTot= aParedeTot-aAberturasTot   /*Calcula a área útil de parede */
    var calculo= aTot/textoElemento /*Calcula a quantidade de tinta */
    var calculoFinal = document.getElementById('txtCalculo2')   /*Cria uma variável para interagir com a div que vai mostrar a quantidade de tinta*/
    calculoFinal.innerHTML = ''    /*Limpa no HTML a quantidade de tinta */ 
    calculoFinal.innerHTML = 'O tipo de tinta utilizado foi: ' + elementoClicado.innerText + '<br>A área total de paredes é de: ' + (aParedeTot.toFixed(2)) + 'm² <br>'+ 'A área total de aberturas é de: ' + (aAberturasTot.toFixed(2)) + 'm² <br>' + 'A área útil de paredes considerada para o cálculo é de: ' + (aTot.toFixed(2)) + 'm² <br>' + 'Devem ser utilizados ' + (calculo.toFixed(2)) + ' litros de tinta por demão.<br>No caso de duas demãos, deverão ser utilizados ' + ((calculo * 2).toFixed(2)) + ' litros de tinta.'    /*Exibe no HTML a quantidade de tinta */
} 
function resetForm() {  /*Zera todas as variáveis e todos os campos para recomeçar o cálculo */
    aParede = 0
    tipoTinta = 0
    aAberturas= 0
    aParedeTot=0
    aAberturasTot=0
    vetParedes = []
    vetAberturas = []
    document.getElementById('txtAbert').innerHTML = 'Aberturas:'
    document.getElementById('txtParede').innerHTML = 'Paredes:'
    document.getElementById('txtTipotinta').innerHTML = 'Seleção:'
    document.getElementById('txtCalculo2').innerHTML = 'Total de Tinta'
    document.getElementById('txtTinta').innerHTML = ''
    abertura.innerHTML = ''
    parede.innerHTML = ''
    tintas.innerHTML = ''
    calculoFinal.innerHTML = ''
}  

    

