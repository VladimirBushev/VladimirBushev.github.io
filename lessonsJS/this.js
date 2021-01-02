function hello() {
    console.log('Hello', this)
}

const human = {
    name: 'Vladimer',
    age: 24,
    sayHello: hello,
    sayHelloWindow: hello.bind(this),
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)


        console.groupEnd()
    }
}

const lena = {
    name: 'ELena',
    age: 22  
}

human.logInfo.bind(lena, 'teacher', '8-900-999-88-77')
human.logInfo.call(lena, 'teacher', '8-900-999-88-77')
human.logInfo.apply(lena, ['teacher', '8-900-999-88-77'])

const array = [1, 2, 3, 4, 5]

Array.prototype.multBy = function(n) {
    return this.map(function(i) {
        return i * n
    })
}

console.log(array.multBy(10));