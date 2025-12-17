function Clicar () {
    let Nome = window.document.querySelector ("#text01")
    let Disciplina = window.document.querySelector ("#text02")
    let Serie = window.document.querySelector ("#text03")
    let Data = window.document.querySelector ("#text04")
    let IDs =  ["nota01", "nota02", "nota03", "nota04"]
    let Nota = []
    let Select = window.document.getElementById ("itens02")

    let dia = Number.parseInt (Data.value)

    for (let I = 0; I < IDs.length; I++) {
            let Valor = Number.parseFloat (window.document.getElementById (IDs [I]).value)
            if (isNaN (Valor) || Valor.length == 0) {
                 window.alert ("[ERROR]: Numero invalido")
                 return
        } Nota.push (Valor) 
    } let Soma = 0
    let Media = 0
    for (let I = 0; I < Nota.length; I++) {
         Soma = Soma + Nota [I]
    } Media = Soma / 4
    let Definiçao = "" 

    if (Media >= 0 && Media < 6) {
            Definiçao = ("Reprovado (a)")
    } else if (Media > 6 && Media <= 10) {
            Definiçao = ("Aprovado (a)")
    } else {
            window.alert ("[ERROR]: Media invalida, verifique e tente novamente")
    }
    
    let Itens = window.document.createElement (`option`)
    Itens.text = (`Aluno: ${Nome.value}: Disciplina: ${Disciplina.value}: Serie: ${Serie.value}: Data: ${Data.value}: Media: ${Media.toFixed (2)}:  Aluno (a) ${Definiçao}`)
    Select.appendChild (Itens)

    Nome.value = ""
    Disciplina.value = ""
    Serie.value = ""
    Data.value = ""
    
    for (let I = 0; I < IDs.length; I++) {
                window.document.getElementById(IDs [I]).value = ""
    }
}