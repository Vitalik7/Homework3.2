function Animal() {
    var health = 60
    var satiety = 50
    var thirsty = 40
    var mood = 65
    var purity = 50
    var sleep = 20


    this.toCreate = function (name) {
        Animal.name = name || 'name'
        console.log('Hi, my name is ' + name + ' I will be your best friend')
        health 
        satiety 
        thirsty 
        mood 
        purity
        sleep

        console.log('My data: ') 
        console.log('health = ' + health + '%')
        console.log('satiety = ' + satiety + '%') 
        console.log('thirsty = ' + thirsty + '%')  
        console.log('mood = ' + mood + '%')  
        console.log('purity = ' + purity + '%')
        console.log('sleep = ' + sleep + '%')
        console.log('-------------------------')  
            

    },

    this.toEat = function () {
        if (satiety >= 80) {  
            console.log('I don\'t want eat')
        } else { 
            health += 5
            satiety += 25
            thirsty -= 5
            mood += 5
            purity -= 15

            console.log('Thank you, I feel better after meal')
            console.log('My data: ') 
            console.log('health = ' + health + '%')
            console.log('satiety = ' + satiety + '%') 
            console.log('thirsty = ' + thirsty + '%')  
            console.log('mood = ' + mood + '%')  
            console.log('purity = ' + purity + '%')
            console.log('sleep = ' + sleep + '%')
            this.randomCase()
        }
        console.log('-------------------------')
    },

    this.toPlay = function () {
        if (health >= 85) {  
            console.log('I don\'t want play')
        } else { 
            health -= 30
            satiety -= 15
            thirsty -= 20
            mood += 15
            purity -= 10
            sleep += 10

            console.log('Thank you, I feel better after playing')
            console.log('My data: ') 
            console.log('health = ' + health + '%')
            console.log('satiety = ' + satiety + '%') 
            console.log('thirsty = ' + thirsty + '%')  
            console.log('mood = ' + mood + '%')  
            console.log('purity = ' + purity + '%')
            console.log('sleep = ' + sleep + '%')
            this.randomCase()
        }
        console.log('-------------------------')
    },    

    this.toSleep = function () {
        if (sleep >= 60) {  
            console.log('I don\'t want sleep')
        } else { 
            health += 10
            satiety -= 10
            thirsty -= 5
            mood += 5
            sleep += 25

            console.log('Thank you, I feel better after sleep')
            console.log('My data: ') 
            console.log('health = ' + health + '%')
            console.log('satiety = ' + satiety + '%') 
            console.log('thirsty = ' + thirsty + '%')  
            console.log('mood = ' + mood + '%')  
            console.log('purity = ' + purity + '%')
            console.log('sleep = ' + sleep + '%')
            this.randomCase()
        }
        console.log('-------------------------')
    },

    this.toDrink = function () {
        if (thirsty >= 80) {
            console.log('I don\'t want water') 
        } else {
            health += 5
            satiety += 5
            thirsty += 20
            mood += 5

            console.log('Thank you, I feel better after drink water')
            console.log('My data: ') 
            console.log('health = ' + health + '%')
            console.log('satiety = ' + satiety + '%') 
            console.log('thirsty = ' + thirsty + '%')  
            console.log('mood = ' + mood + '%')  
            console.log('purity = ' + purity + '%')
            console.log('sleep = ' + sleep + '%') 
            this.randomCase() 
        }
        console.log('-------------------------')
    },

    this.toWash = function () {
         if (purity >= 80) {
            console.log('I don\'t want to go the bath') 
        } else {
            health += 5  
            mood += 5
            purity += 20

            console.log('Thank you, I feel better after bath')
            console.log('My data: ') 
            console.log('health = ' + health + '%')
            console.log('satiety = ' + satiety + '%') 
            console.log('thirsty = ' + thirsty + '%')  
            console.log('mood = ' + mood + '%')  
            console.log('purity = ' + purity + '%')
            console.log('sleep = ' + sleep + '%')
            this.randomCase()  
        }
        console.log('-------------------------')
    },

    this.help = function () {
        console.log('All of the methods you can do with animal: ')
        console.log('animal.help() - Information abaut all methods')
        console.log('animal.toCreate() - Created your animal and give him name')
        console.log('animal.toEat() - Animal need to feed')
        console.log('animal.toPlay() - Animal want to play with you')
        console.log('animal.toSleep() - Your animal tired and want sleep')
        console.log('animal.toDrink() - Animal want water')
        console.log('animal.toWash() - Your animal needs a bath')
    }  
     
    this.randomCase = function () {
    var rand = Math.floor( Math.random() * 9 )

    switch (rand) {
        case 3:
            this.die 
            console.log('After this action your animal was killed neighbor')
            break
        case 6:
            this.runAway 
            console.log('After this action your animal run from you.')
            break
        case 9:
            this.die 
            console.log('After this action your animal was hit by car.')
            break
        }
    }   
}

var animal = new Animal()
animal.help()
