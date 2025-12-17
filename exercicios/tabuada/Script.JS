const Calcular = () => {
    let numero_Tabuada = document.querySelector ("#text01")
    let Select = document.querySelector ("#itens")

    let Numero = Number(numero_Tabuada.value)
    
    numero_Tabuada.value = ""
    Select.innerHTML = ""
    if (Numero == "") {
        alert (`[Erro]: Digite um numero de 1 para cima.`)
    }
    for (let i = 0; i < 11; i++) {
        let Itens = document.createElement ("option")
        Itens.text = (`${Numero} X ${i} = ${Numero * i}`)
        Select.appendChild (Itens)
    }
}