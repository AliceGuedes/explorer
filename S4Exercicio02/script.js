const students = [
    {nome: "Alice", nota01: 10, nota02: 8},
    {nome: "Nicholas", nota01: 6, nota02: 7},
    {nome: "Thomas", nota01: 7, nota02: 7},
    {nome: "Guilherme", nota01: 4, nota02: 10},
    {nome: "Vinicius", nota01: 5, nota02: 5}
]

function media(nota01, nota02){
    return((nota01+nota02)/2)
}


function approved (student) {
    return `
    O estudante ${student.nome} teve uma media de ${media(student.nota01, student.nota02) }! Parabens voçê foi APROVADO`
    
}

function notApproved (student){
    return`
    O estudante ${student.nome} teve uma media de ${media(student.nota01, student.nota02) }! Voçê foi REPROVADO`
}

for (const student of students) {
    if(media(student.nota01, student.nota02) >= 7){
        let mensagem = approved(student)
        alert(mensagem)
    }else{
        let mensagem =notApproved(student)
        alert(mensagem)
    }
    
}
