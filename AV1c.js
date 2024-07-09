var aParede = 0
var tipoTinta = 0
var aAberturasTot= 0
var vetParedes = []
var vetAberturas = []

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
    aParede = 0 
   
        var altParede = document.getElementById('hParede').value
        var altParede = parseFloat(altParede.replace(',', '.'))
        window.alert(altParede)
        var largParede = document.getElementById('lParede').value
        var largParede = parseFloat(largParede.replace(',', '.'))
        window.alert(largParede)
        aParede= altParede*largParede
        window.alert(aParede)
        vetParedes.push(aParede)
        window.alert('A área total de paredes é = ' + vetParedes)
        document.getElementById('hParede').value = ""
        document.getElementById('lParede').value = ""

    }
    window.alert('A área total de paredes é = ' + vetParedes)


function aberturas(){
    aAberturasTot= 0
    var entAbert= document.getElementsByName('abert')
        if (entAbert[0].checked) {
            var qtdAbert = document.getElementById('nAberturas').value
            var qtdAbert = parseInt(qtdAbert)
            for(var cont=1; cont<=qtdAbert; cont++) {
                var altAbert = document.getElementById('hAberturas').value
                var altAbert= parseFloat(altAbert.replace(',', '.'))
                window.alert(altAbert)
                var largAbert = document.getElementById('lAberturas').value
                var largAbert= parseFloat(largAbert.replace(',', '.'))
                window.alert(largAbert)
                var aAberturas= altAbert*largAbert
                window.alert(aAberturas)
                aAberturasTot += aAberturas
                window.alert(aAberturasTot)
                vetAberturas.push(aAberturasTot)            
                document.getElementById('hAberturas').value = ""
                document.getElementById('lAberturas').value = ""  
            }
            window.alert(vetAberturas)
        }
        else {
            vetAberturas.push(0)
        }

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

    

