function verificar() {
    var data = new Date()
    var anoAtual = data.getUTCFullYear()
    var anoInserido = document.getElementById('nasc')
    var res = document.querySelector('div#resultado')
    if (anoInserido.value.length == 0 || anoInserido.value > anoAtual) {
        alert("Valor inserido incorreto. Verifique o valor e tente novamente")
    } else {
        var fsex = document.getElementsByName('sex') //input radio sex
        var idade = anoAtual - Number(anoInserido.value) //calculo da idade
        var img = document.createElement('img') // criar elemento imagem
        
        // res.innerHTML= `Idade calculada igual a ${idade} anos`
        var genero = ''

        if (fsex[0].checked) {
            
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'mbebe.png')
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'mmenino.png')
            } else if (idade >= 21 && idade < 60) {
                img.setAttribute('src', 'mhomem.png')
            } else {
                img.setAttribute('src', 'midoso.png')
            }

        res.style.textAlign = 'center'
        res.innerHTML= `Gênero: ${genero}, idade: ${idade} anos`
        res.appendChild(img)
        
        } else if (fsex[1].checked) {
            
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'fbebe.png')
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'mmenina.png')
            } else if (idade >= 21 && idade < 60) {
                img.setAttribute('src', 'fmulher.png')
            } else {
                img.setAttribute('src', 'midosa.png')
            }
        

        res.style.textAlign = 'center'
        res.innerHTML= `Gênero: ${genero}, idade: ${idade} anos`
        res.appendChild(img)
        
    }
    }
    
}