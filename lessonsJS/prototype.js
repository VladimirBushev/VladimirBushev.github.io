const person = new Object ({
    name: 'VLadimir',
    age: 24,
    job: 'Driver',
    greet: function() {
        console.log('greet')
    }
})

Object.prototype.sayHello = function() {
    console.log('Hello')
}

const Elena = Object.create(person)
Elena.name = 'Elena';

const str = new String('I am string')
