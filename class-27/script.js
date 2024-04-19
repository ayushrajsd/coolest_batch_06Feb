const alice = {
    nickName: 'Alice',
    age: 25,
    introduce: function(){
        console.log(this)
        console.log(`Hello, my name is ${this.nickName} and I am ${this.age} years old`);
    }
}

const button = document.getElementById('introduceButton')
const boundIntroduce = alice.introduce.bind(alice)

// button.addEventListener('click', alice.introduce)
button.addEventListener('click', boundIntroduce)