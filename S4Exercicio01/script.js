let numberOne = prompt("insira o primeiro número")
let numberTwo = prompt("insira o segundo número")

numberOne=Number(numberOne)
numberTwo= Number(numberTwo)

let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let multi = numberOne * numberTwo
let div = numberOne / numberTwo
let rest = numberOne % numberTwo

let par = sum % 2


alert(`a soma deles é: ${sum}`)
alert(`a subtração deles é: ${sub} `)
alert(`a multiplicação deles é: ${multi}`)
alert(`a divisão deles é: ${div}`)
alert(`o resto deles é: ${rest}`)

if(par == 0){
    alert(`a soma do primeiro número com o segundo número é PAR`)
}else{
    alert(`a soma do primeiro número com o segundo número é ÍMPAR`)
}

if(numberOne == numberTwo){
    alert(`o primeiro número e o segundo numero são IGUAIS`)
}else{
    alert(`o primeiro número e o segundo numero são DIFERENTES`)
}