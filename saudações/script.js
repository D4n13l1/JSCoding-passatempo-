function carregar(){

var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()
if (minuto < 10){
    minuto = '0' + minuto
}
msg.innerHTML = `<p>Agora são ${hora} horas e ${minuto} minutos!</p>`
msg.innerHTML += `<p>Faltam aproximadamente ${(24-hora)} horas pra acabar o dia</P`
if (hora >=0 && hora < 12){
    //bom dia
    img.src = 'src/manha.png'
    document.body.style.background = '#e2cd9f'
}else if (hora >= 12 && hora <= 18){
    img.src = 'src/tarde.png'
    document.body.style.background = '#b9846f'
}else{
    img.src = 'src/noite.png'
    document.body.style.background = '#515154'
}
}