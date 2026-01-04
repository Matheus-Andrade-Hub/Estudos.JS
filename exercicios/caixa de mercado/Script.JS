let Total = 0

const Adicionar = () => {
    let nome_Item = document.querySelector ("#text00")
    let Quantidade = document.querySelector ("#text01")
    let Preço = document.querySelector ("#text02")
    let Resultado = document.querySelector ("#res01")
    let Seletor  = document.querySelector ("#itens")

    if (nome_Item.value == "" || Quantidade.value == 0 || Preço.value == 0) {
            alert (`[Error]: Preencha todos os campos para continuar.`)
    }

    let Quanti = Number (Quantidade.value)
    let Pre = Number(Preço.value.replace(".", ""));

    Total += Quanti * Pre

    let Itens = document.createElement ("option")
    Itens.text = (`Nome: ${nome_Item.value} | Quantidade: ${Quantidade.value} Preço: ${Preço.value}`)
    Seletor.appendChild (Itens)

    Resultado.innerHTML = `<Strong> Total a pagar:  ${Total.toFixed (2)}R$ </strong>`
}