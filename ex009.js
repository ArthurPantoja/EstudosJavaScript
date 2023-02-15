var agora = new Date()
var hora = agora.getHours()
var minu = agora.getMinutes()
var seg = agora.getSeconds()

if(hora < 12 ){
    console.log("Bom dia!")
}else if(hora < 18){
    console.log("Boa Tarde!")
}else{
    console.log("Boa noite!")
}

console.log(`São exatamente ${hora} horas ${minu} minutos e ${seg} segundos`)


var agor = new Date()
var diaSeman = agora.getDay()

switch(diaSeman){
    case 0:
        console.log("Um belo Domingo")
        break
    case 1:
        console.log("Uma bela Segunda-feira")
        break
    case 2:
        console.log("Uma bela Terça-feira")
        break
    case 3:
        console.log("Uma bela Quarta-feira")
        break
    case 4:
        console.log("Uma bela Quinta-feira")
        break
    case 5:
        console.log("Uma bela Sexta-feira")
        break
    case 6:
        console.log("Um belo Sabado")
        break
    default:
        console.log("ERRO: Dia invalido!")
}