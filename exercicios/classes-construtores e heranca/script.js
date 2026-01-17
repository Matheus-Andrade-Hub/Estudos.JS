class Furina {
    constructor (Ataque, Energia, Vida, pontos_Fanfarra) {
        this.Ataque = Ataque
        this.Energia = Energia
        this.Vida = Vida
        this.pontos_Fanfarra = pontos_Fanfarra
    }
    Atacar (Inimigo) {
        Inimigo.Vida -= this.Ataque
        this.Energia = 15
        console.log (`Dano: ${this.Ataque} | Energia: +15`)
    }

    ataque_Carregado (Inimigo) {
        Inimigo.Vida -= 545
        this.Vida += 2500
        console.log (`Dano: ${545} | Vida atual: ${this.Vida}`)
    }

    habilidade_Elemental (Inimigo) {
        Inimigo.Vida -= 2000
        this.Energia += 35
        this.Vida -= 5000
        
        if (this.Energia > 100) {
            this.Energia = 100
        }
        console.log (`Dano: 2000 | Vida: -5000 | Energia: +35`)
    }
    Ultimate () {
        this.Energia -= 100

        if (this.Vida <= 27000) {
            this.pontos_Fanfarra += 35

        } else if (this.Vida <= 22000) {
            this.pontos_Fanfarra += 35

        } else if (this.Vida <= 17000) {
            this.pontos_Fanfarra += 35
        }

        if (this.pontos_Fanfarra >= 30) {
            this.Ataque += 200

        } else if (this.pontos_Fanfarra > 30 &&  this.pontos_Fanfarra <= 60) {
            this.Ataque += 400
            console.log (`Pontos_Fanfarra:${this.pontos_Fanfarra} | Ataque adicionado: +400`)

        } else if (this.pontos_Fanfarra > 60 && this.pontos_Fanfarra <= 90) {
            this.Ataque += 600
            console.log (`Pontos_Fanfarra:${this.pontos_Fanfarra} | Ataque adicionado: +600`)

        } else if (this.pontos_Fanfarra >= 90 && this.pontos_Fanfarra <= 100) {
            this.Ataque += 700
            console.log (`Pontos_Fanfarra:${this.pontos_Fanfarra}  |Ataque adicionado: +700`)
        }
        
        if (this.pontos_Fanfarra > 105) {
            this.pontos_Fanfarra = 0
        }

        if (this.Energia > 100) {
            this.Energia = 100
        }
    }
}

class Hutao extends Furina {
    constructor (Ataque, Energia, Vida) {
        super (Ataque, Energia, Vida, 0)
    }
    Atacar (Inimigo) {
        Inimigo.Vida -= this.Ataque
        this.Energia += 10
        
        if (this.Energia > 100) {
            this.Energia = 100
        }
        console.log (`Dano: ${this.Ataque} | Energia: +10`)
    }

    ataque_Carregado (Inimigo) {
        Inimigo.Vida -= 2400
        console.log (`Dano: 2400`)
    }

    habilidade_Elemental (Inimigo) {
        Inimigo.Vida -= 1700
        this.Energia += 25
        this.Vida -= 3500

        if (this.Energia > 100) {
            this.Energia = 100
        }
    }
    Ultimate () {
        this.Energia -= 100
        this.Vida += 7000

        if (this.Vida <= 24000) {
            this.Ataque += 200

        } else if (this.Vida <= 19000) {
            this.Ataque += 400

        } else if (this.Vida <= 16000) {
            this.Ataque += 600
        }
        console.log (`Energia: -100 | Vida: +1700`)
    }

}   


let dados_Hutao = new Hutao (1200, 0, 28000, 0)

let dados_Furina = new Furina (1600, 0, 32000, 0)

class formaçao_Mecanica {
    constructor (Ataque, Vida) {
        this.Ataque = Ataque
        this.Vida = Vida
    }
}

let dados_Inimigo = new formaçao_Mecanica (1200, 48000)