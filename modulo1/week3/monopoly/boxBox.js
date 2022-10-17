const bonus = [10,30,20,5,50]

class Player{
    constructor(name,atk,defens){
        this.hp = 400;
        this.name=name;
        this.atk=atk;
        this.defens=defens;
    }
        //enemy = {name:2,hp:400,}
    hit(enemy){

        let baseAtk = this.atk
        if(this.hp <  200 ){
            enemy.hp = (baseAtk + bonus[Math.floor(Math.random() * bonus.length )]) - enemy.defens
            console.log(`${this.name} golpea brutalmente a ${enemy.name}`)
        }else{
            enemy.hp = baseAtk  - enemy.defens
            console.log(`${this.name} golpea a ${enemy.name}`)
        }

        if(enemy <= 0 ){
            console.log(`${enemy.name} perdio KO`)
        }
    }
}


class Mike extends Player{
    constructor(){
        super("Mike",100,70)//hardcode o colocando por defecto
    }

    bite(enemy){
            enemy.defens = enemy.defens/2
            console.log(`${this.name} activa su habilidad especial y afecta ${enemy.name}`)
    }
}

//invoke
const player1 = new Player("Dylan",80,100)
const player2 = new Mike()


player2.bite(player1)
player1.hit(player2)
player2.hit(player1)
player1.hit(player2)

console.log("status",player2,player1)