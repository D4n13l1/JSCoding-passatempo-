function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    // var res = document.getElementById('res')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert("Verifique os dados e tente novamente")
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked){
            genero = 'Homem'
            document.body.style.background = '#3b80ff'
            if(idade < 18){
                //criança
                img.setAttribute('src', 'src/homemAdolescente.png')
            }
            else if(idade < 50){
                //adulto
                img.setAttribute('src', 'src/homemAdulto.png')

            }
            else if (idade < 90){
                //idoso
                img.setAttribute('src', 'src/homemIdoso.png')

            }
            else if (idade > 90 && idade < 110){
                //hora extra
                img.setAttribute('src', 'src/homemHoraExtra.png')
            }
            else if(idade > 110){
                img.setAttribute('src', 'src/morto.png')
            }
        }else if (fsex[1].checked){
            genero='Mulher'
            document.body.style.background = '#ff3d90'
            if(idade < 18){
                //criança
                img.setAttribute('src', 'src/mulherAdolescente.png')
            }
            else if(idade < 50){
                //adulto
                img.setAttribute('src', 'src/mulherAdulta.png')
            }
            else if (idade < 90){
                //idoso
                img.setAttribute('src', 'src/mulherIdosa.png')
            }
            else if (idade > 90 && idade < 110){
                //hora extra
                img.setAttribute('src', 'src/mulherHoraExtra.png')
            }
            else if(idade > 110){
                img.setAttribute('src', 'src/morto.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} de ${idade} anos de idade`
        res.appendChild(img)
    }    
}