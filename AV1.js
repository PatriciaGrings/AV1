
function tinta() {
    var ttinta = document.getElementById('txtTinta')
    var escolha = Number(ttinta.value)
    switch (escolha) {
        case 1:
           var quantidade= 8
        break
        case 2:
           var quantidade= 8
        break
        case 3:
           var quantidade= 12
        break
        case 4:
           var quantidade= 8
        break
        case 5:
           var quantidade= 10
        break
        case 6:
           var quantidade= 12
        break
        case 7:
           var quantidade= 14
        break
        case 8:
           var quantidade= 9
        break
    }
    window.alert(quantidade)
    return quantidade;
    
}
    var hParedes=[]
    var lParedes=[]
    var hAberturas=[]
    var lAberturas=[]
    var aberturas=[]
function paredes() {
    var qtPar = document.getElementById('nParede').value
    window.alert(qtPar)

    for(var c=1; c<=qtPar; c++){
        var z= window.prompt('Esta parede possui alguma porta ou janela? (s ou n)')
        if (z=='s') {
            var z3= window.prompt('Quantas portas/janelas possui?')
            for(var cont=1; cont<=z3; cont++) {
            var z1= window.prompt('Digite a altura da '+ cont + ' abertura: ')
            hAberturas.push(z1)
            var z2= window.prompt('Digite a largura da '+ cont + ' abertura: ')
            lAberturas.push(z2)
        }
        }
        else if (z=='n'){
            hAberturas.push(0)
            lAberturas.push(0)
        }
        else {
            window.prompt('Opção inválida! Digite s ou n')
        }
        var x= window.prompt('Digite a altura da '+ c + ' parede: ')
        hParedes.push(x)
        
        var y= window.prompt('Digite a largura da '+ c + ' parede: ')
        lParedes.push(y)
       
    }
    /*window.alert(hParedes)
    window.alert(lParedes)
    window.alert(hAberturas)
    window.alert(lAberturas)*/ 
    return qtPar;
    /*for(var c=1; c<=qtPar; c++){ 

    }*/
   
}
function calcular() {
    var a = tinta()
    var b = paredes()
    window.alert(a)
    window.alert(b)
    for (var conta=1; conta<=b; conta++){
        var parede = (hParedes*lParedes)-aberturas
        window.alert(parede)
    }
    
}     
    

