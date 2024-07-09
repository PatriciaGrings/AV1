var aParedeTot = 0
var tipoTinta = 0

function tinta() {
    var ttinta = document.getElementById('txtTinta')
    var escolha = Number(ttinta.value)
    /*var ttinta= window.prompt('Qual tipo de tinta será utilizada?')
    var escolha = parseInt(ttinta)*/
    
    switch (escolha) {
        case 1:
            tipoTinta= 8
        break
        case 2:
            tipoTinta= 8
        break
        case 3:
            tipoTinta= 12
        break
        case 4:
            tipoTinta= 8
        break
        case 5:
            tipoTinta= 10
        break
        case 6:
            tipoTinta= 12
        break
        case 7:
            tipoTinta= 14
        break
        case 8:
            tipoTinta= 9
        break
    }
    var tinta= document.getElementById('txtTipotinta')
    tinta.innerHTML= ''
        var itemTinta= document.createElement('option')
        itemTinta.text= 'Você selecionou o tipo ' + escolha
        tinta.appendChild(itemTinta)
}

function paredes() {
    var qtPar = document.getElementById('nParede').value
    var qtPar = parseInt(qtPar)
    var aAberturasTot=0
    aParedeTot = 0
    /*var qtPar= window.prompt('Quantas paredes você deseja pintar?')
    var qtPar = parseInt(qtPar)*/
    
    for(var c=1; c<=qtPar; c++){
        /*var entAbert= window.prompt('Esta parede possui alguma porta ou janela? (s ou n)')*/
        var entAbert = document.getElementById('temAberturas')
        if (entAbert=='s') {
            var qtdAbert= window.prompt('Quantas portas/janelas possui?')
            for(var cont=1; cont<=qtdAbert; cont++) {
                var altAbert= window.prompt('Digite a altura da '+ cont + ' abertura: ')
                var altAbert= parseFloat(altAbert.replace(',', '.'))
                var largAbert= window.prompt('Digite a largura da '+ cont + ' abertura: ')
                var largAbert= parseFloat(largAbert.replace(',', '.'))
                var aAberturas= altAbert*largAbert
                var aAberturasTot= aAberturasTot+aAberturas            
            }
        }
        else if (entAbert==='n'){
            var aAberturasTot=0
        }
        else {
            window.alert('Opção inválida! Digite s ou n')
            return
        }
        var altParede = document.getElementById('hParede').value
        var altParede = parseInt(altParede)
        window.alert(altParede)
        var largParede = document.getElementById('lParede').value
        var largParede = parseInt(largParede)
        window.alert(largParede)
        /*var altParede= window.prompt('Digite a altura da '+ c + ' parede: ')
        var altParede= parseFloat(altParede.replace(',', '.'))            
        var largParede= window.prompt('Digite a largura da '+ c + ' parede: ')
        var largParede= parseFloat(largParede.replace(',', '.'))*/
        var aParede= altParede*largParede
        var aParedeDesc= aParede-aAberturasTot
        window.alert('A área da ' + c + ' parede é = ' + aParedeDesc)
        aParedeTot += aParedeDesc
        var aAberturasTot=0

        document.getElementById('hParede').value = ""
        document.getElementById('lParede').value = ""

    }
    window.alert('A área total de paredes é = ' + aParedeTot)

}

function aberturas(){
    
}
    
function calcular() {
    var tab= document.getElementById('txttab')
    tab.innerHTML = ''

            window.alert(aParedeTot)
            window.alert(tipoTinta)
            var h= aParedeTot/tipoTinta
            window.alert(h)
            item.text= aParedeTot + '/' + tipoTinta + '=' + h 
            tab.appendChild(item)    
    }   

    

