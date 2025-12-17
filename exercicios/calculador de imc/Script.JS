const Calcular = () => {
    let Nome = document.querySelector ("#nome")
    let Peso = document.querySelector ("#peso")
    let Altura = document.querySelector ("#altura")
    let Resultado = document.querySelector ("#res02")

    let Multiplicar = 0
    let Total = 0
    
    Multiplicar = Altura * Altura
    Total = Peso / Multiplicar

    if (Total <= 18.5) {
        Resultado.innerHTML =` ${Nome}: Voce esta abaixo do peso.`

    } else if (Total > 18.5 && Total <= 24.9) {
        Resultado.innerHTML = ` ${Nome}: Voce esta com o peso normal.`

    } else if (Total > 24.9 && Total <= 29.9) {
        Resultado.innerHTML = ` ${Nome}: Voce esta com sobrepeso.`

    } else if (Total > 29.9 && Total <= 34.9) {
        Resultado.innerHTML = ` ${Nome}: Voce esta no grau | da obesidade.`

    } else if (Total > 34.9 && Total <= 39.9) {
        Resultado.innerHTML  =` ${Nome}: Voce esta no grau || da obesidade.`

    } else if (Total > 39.9) {
        Resultado.innerHTML = `${Nome}: Voce esta no gra ||| da obesidade.`
    }
}