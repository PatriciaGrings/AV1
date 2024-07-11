var aParede = 0
var tipoTinta = 0
var textoTinta= ''
var aAberturas= 0
var aParedeTot=0
var aAberturasTot=0
var vetParedes = []
var vetAberturas = []

function tinta() {
    var ttinta = document.getElementById('txtTinta')    /*Pega do HTML o número da tinta escolhida*/
    var escolha = Number(ttinta.value)  /*Converte para número a variável de escolha do tipo de tinta */
    
    switch (escolha) {  /*Seleção do tipo de tinta*/
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

    var tintas= document.getElementById('txtTipotinta') /*Cria uma variável para interagir com a div que vai mostrar o tipo de tinta escolhido*/
    tintas.innerHTML= 'Você selecionou o tipo ' + escolha + ': ' + textoTinta
    document.getElementById('txtTinta').value = "" /*Exibe no HTML o tipo de tinta escolhido */
}

function paredes() {
    aParede = 0
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
    aParede= altParede*largParede   /* Calculo da área da parede */
    vetParedes.push(aParede)        /* Coloca a área da parede no vetor */
    document.getElementById('hParede').value = ""   /* Limpa a entrada de altura no HTML */
    document.getElementById('lParede').value = ""   /* Limpa a entrada de largura no HTML */
    var parede= document.getElementById('txtParede')    /*Cria uma variável para interagir com a div que vai mostrar a área das paredes*/
    parede.innerHTML+= '<br>Área da parede: ' + aParede.toFixed(2)  /*Exibe no HTML a área das paredes */
    
    }
}

function aberturas(){
    aAberturas= 0
    var altAbert = document.getElementById('hAberturas').value  /* Pega a altura da abertura do HTML */
    var altAbert= parseFloat(altAbert.replace(',', '.'))    /* Transforma a altura em n. real */
    var largAbert = document.getElementById('lAberturas').value /* Pega a largura da abertura do HTML */
    var largAbert= parseFloat(largAbert.replace(',', '.'))  /* Transforma a largura em n. real */
    if (isNaN(altAbert) || isNaN(largAbert)) { /*Validação para obrigar que se insira valores antes de pressionar ok */
        window.alert('Preencha os campos de altura e largura corretamente!')
        document.getElementById('hAberturas').value = ""
        document.getElementById('lAberturas').value = ""
        return
    }
    else{    
        aAberturas= altAbert*largAbert  /* Calculo da área da abertura */
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
    var calculo= aTot/tipoTinta /*Calcula a quantidade de tinta */
    var calculoFinal = document.getElementById('txtCalculo2')   /*Cria uma variável para interagir com a div que vai mostrar a quantidade de tinta*/
    calculoFinal.innerHTML = ''    /*Limpa no HTML a quantidade de tinta */
    calculoFinal.innerHTML = 'O tipo de tinta utilizado foi: ' + textoTinta + '<br>A área total de paredes é de: ' + (aParedeTot.toFixed(2)) + 'm² <br>'+ 'A área total de aberturas é de: ' + (aAberturasTot.toFixed(2)) + 'm² <br>' + 'A área útil de paredes considerada para o cálculo é de: ' + (aTot.toFixed(2)) + 'm² <br>' + 'Devem ser utilizados ' + (calculo.toFixed(2)) + ' litros de tinta por demão.<br>No caso de duas demãos, deverão ser utilizados ' + ((calculo * 2).toFixed(2)) + ' litros de tinta.'    /*Exibe no HTML a quantidade de tinta */
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

    

