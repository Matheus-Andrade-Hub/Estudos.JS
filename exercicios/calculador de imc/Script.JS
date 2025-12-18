const Calcular = () => {
    let Nome = document.querySelector ("#nome")
    let Peso = document.querySelector ("#peso")
    let Altura = document.querySelector ("#altura")
    let Resultado = document.querySelector ("#res02")

    if (Nome.value == "" || Peso.value == "" || Altura.value == "") {
        alert ("[ERRO]: Preencha todos os campos para continuar.")
    }

    let Pes = Number(Peso.value)
    let Alt = (Number(Altura.value))

    let Multiplicar = 0
    let Total = 0
    
    Multiplicar = Alt* Alt
    Total = Pes / Multiplicar

    if (Total <= 18.5) {
        Resultado.innerHTML =` ${Nome.value}: Voce esta abaixo do peso, IMC atual de: ${Total.toFixed (2)}`

    } else if (Total > 18.5 && Total <= 24.9) {
        Resultado.innerHTML = ` ${Nome.value}: Voce esta com o peso normal, IMC atual de: ${Total.toFixed (2)}`

    } else if (Total > 24.9 && Total <= 29.9) {
        Resultado.innerHTML = ` ${Nome.value}: Voce esta com sobrepeso, IMC atual de: ${Total.toFixed (2)}`

    } else if (Total > 29.9 && Total <= 34.9) {
        Resultado.innerHTML = ` ${Nome.value}: Voce esta no grau | da obesidade, IMC atual de: ${Total.toFixed (2)}`

    } else if (Total > 34.9 && Total <= 39.9) {
        Resultado.innerHTML  =` ${Nome.value}: Voce esta no grau || da obesidade, IMC atual de: ${Total.toFixed (2)}`

    } else if (Total > 39.9) {
        Resultado.innerHTML = `${Nome.value}: Voce esta no gra ||| da obesidade, IMC atual de: ${Total.toFixed (2)}`
    }

    Nome.value = ""
    Peso.value = ""
    Altura.value = ""
}