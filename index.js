function Animal() {

	this.params = function () {
        this.health = 60, 
        this.satiety = 50,
        this.thirsty = 40,
        this.mood = 65,
        this.purity = 50,
        this.sleep = 20
	},	

    this.info =  function () {
        console.log('My data: ') 
        console.log('health = ' + this.health + '%')
        console.log('satiety = ' + this.satiety + '%') 
        console.log('thirsty = ' + this.thirsty + '%')  
        console.log('mood = ' + this.mood + '%')  
        console.log('purity = ' + this.purity + '%')
        console.log('sleep = ' + this.sleep + '%')
        console.log('-------------------------')  
    }

    this.toCreate = function (name) {
        this.name = name || 'name'
        console.log('Hi, my name is ' + name + ' I will be your best friend')
        this.params()
        this.info()
    },

    this.toEat = function () {
        if (this.satiety >= 90) {  
            console.log('I don\'t want eat')
        } else { 
            this.health += 5
            this.satiety += 15
            this.thirsty -= 15
            this.mood += 5
            this.purity -= 20

            console.log('Thank you, I feel better after meal')
            this.info()
            this.reset()
            this.randomCase()
        }
    },

    this.toPlay = function () {
        if (this.health >= 95) {  
            console.log('I don\'t want play')
        } else { 
            this.health -= 30
            this.satiety -= 15
            this.thirsty -= 20
            this.mood += 10
            this.purity -= 15
            this.sleep += 10

            console.log('Thank you, I feel better after playing')
            this.info()
            this.reset()
            this.randomCase()
        }
    },    

    this.toSleep = function () {
        if (this.sleep >= 80) {  
            console.log('I don\'t want sleep')
        } else { 
            this.health += 5
            this.satiety -= 20
            this.thirsty -= 15
            this.mood += 5
            this.sleep += 20

            console.log('Thank you, I feel better after sleep')
            this.info()
            this.reset()
            this.randomCase()
        }
    },

    this.toDrink = function () {
        if (this.thirsty >= 92) {
            console.log('I don\'t want water') 
        } else {
            this.health += 5
            this.satiety += 5
            this.thirsty += 20
            this.mood += 5

            console.log('Thank you, I feel better after drink water')
            this.info()
            this.reset()
            this.randomCase() 
        }
    },

    this.toWash = function () {
         if (this.purity >= 90) {
            console.log('I don\'t want to go the bath') 
        } else {
            this.health += 5  
            this.mood += 5
            this.purity += 20

            console.log('Thank you, I feel better after bath')
            this.info()
            this.reset()
            this.randomCase()  
        }
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
    },

    this.reset = function () {
       	if (this.health > 100) {
            this.health = 100
            console.log('Your animal healthy')

        }
        if (this.health < 0) {
            this.health = 0
            console.clear()
            console.log('Your animal is ill and died from the disease \n Restart app and play again!')
        }
        if (this.satiety > 100) {
            this.satiety = 100
            console.log('Your animal are not hungry.')

        }
        if (this.satiety < 0) {
            this.satiety = 0
            console.clear()
            console.log('Your animal died of starvation \n Restart app and play again!')
   	 	}
   	 	if (this.thirsty > 100) {
            this.thirsty = 100
            console.log('Your animal are not thirsty.')

        }
        if (this.thirsty < 0) {
            this.thirsty = 0
            console.clear()
            console.log('Your animal died of thirsty \n Restart app and play again!')
   	 	}
   	 	if (this.mood > 100) {
            this.mood = 100
            console.log('Your animal are very happy :)')

        }
        if (this.mood < 0) {
            this.mood = 0
            console.clear()
            console.log('Your animal sad and away from you \n Restart app and play again!')
   	 	}
   	 	if (this.purity > 100) {
            this.purity = 100
            console.log('Your animal are clean')

        }
        if (this.purity < 0) {
            this.purity = 0
            console.clear()
            console.log('Your animal was dirty and got the infection \n Restart app and play again!')
   	 	}
   	 	if (this.sleep > 100) {
            this.sleep = 100
            console.log('Your animal feels great')

        }
        if (this.sleep < 0) {
            this.sleep = 0
            console.clear()
            console.log('Your animal was taken to the hospital due to lack of sleep \n Restart app and play again!')
   	 	}
	},	
     
    this.randomCase = function () {
    var rand = Math.floor( Math.random() * 12)

    switch (rand) {
        case 4:
            console.clear()
            console.log('After this action your animal was killed neighbor!')
            console.log('------------------------------------------ \n Restart app and play again!') 
            console.log('----------------------------------')
            animal.help()
            break
        case 8:
            console.clear()
            console.log('After this action your animal run from you.')
            console.log('------------------------------------------ \n Restart app and play again!')
            console.log('----------------------------------') 
            animal.help()
            break
        case 12: 
            console.clear()
            console.log('After this action your animal was hit by car.')
            console.log('------------------------------------------ \n Restart app and play again!')
            console.log('----------------------------------') 
            animal.help()
            break
        }
    }   
}

var animal = new Animal()
animal.help()
