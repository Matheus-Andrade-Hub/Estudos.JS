class Furina {
    constructor (Ataque, Energia, Vida,pontos_Fanfarra,) {
        this.Ataque = Ataque
        this.Energia = Energia
        this.Vida = Vida
        this.pontos_Fanfarra = pontos_Fanfarra
    }
    Atacar (Inimigo) {
        Inimigo.Vida -= this.Ataque
        this.Energia = 15
    }
    habilidade_Elemental (Inimigo) {
        Inimigo.Vida -= 2000
        this.Energia += 35
        this.Vida -= 5000
        
        if (this.Energia > 100) {
            this.Energia = 100
        }

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

        } else if (this.pontos_Fanfarra > 60 && this.pontos_Fanfarra <= 90) {
            this.Ataque += 600

        } else if (this.pontos_Fanfarra >= 90 && this.pontos_Fanfarra <= 100) {
            this.Ataque += 700
        }
        
        if (this.pontos_Fanfarra > 105) {
            this.pontos_Fanfarra = 0
        }

        if (this.Energia > 100) {
            this.Energia = 100
        }
    }
}

let dados_Personagem = new Furina (1600, 0, 32000, 0)

class formaçao_Mecanica {
    constructor (Ataque, Vida) {
        this.Ataque = Ataque
        this.Vida = Vida
    }
}

let dados_Inimigo = new formaçao_Mecanica (1200, 48000)