function contar () {
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('passo')
    var res = document.getElementById('resultado')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        alert('[ERRO Dados faltantes')
    } 
    
    
    else {
        res.innerHTML = 'Contando: '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)

        if (p <= 0) {
            alert('Passo deve ser maior que 0')
        }
        
        //Contagem crescente
        if (i < f) {
            for(var c = i; c <= f; c += p ){
                res.innerHTML += ` ${c} `
            }
        }
        
        //contagem descrescente
        else {
            for(var c = i; c >= f; c -= p ){
                res.innerHTML += ` ${c} `
            }
        } 

    }
}
