console.log("Hello World")

const uname = "hari"
const age = 20 

// This is Templet version of log printing ,this is new feauter.
console.log(`haii My name is ${uname} and I am ${age}`)

//now lets convert data into json format

const todos = [
    {
        id :1,
        text : "meeting with boss",
        isCompleted : true
    },
    {
        id :2,
        text : "meeting with hari",
        isCompleted : false
    },
    {
        id :1,
        text : "meeting with vital",
        isCompleted : true
    }
]

var JSONtodo = JSON.stringify(todos)
console.log(JSONtodo)

// now lets look at way of iterating through array

for(let todo of todos){
    console.log(todo)
}

//for each

todos.forEach( function(todo2){console.log(todo2.text)} )



//maps
const todoText = todos.map(function(todo3){
    return(todo3.text)
})
console.log(todoText)



//filters
const todoCompleted = todos.filter(function(todo4){
    return todo4.isCompleted===true
}).map(function(todo5){
    return todo5.text
})
console.log(todoCompleted)

// "==" operator only checks for the equality of value
//" === " checks for the equality of both value and dayatype

// ternary operator
const x = 4;
const output = x > 10 ? 1 : 0;
console.log(output);

//switch case statments

switch(output){
    case 1 :
        console.log("This is red")
        break;
    case 0 :
        console.log("This is blue")
        break;
    default :
        console.log("There is no color")
}


//Arrow functions in java

const addNums = (num1, num2) => {
    return num1+num2;
}
console.log(addNums(5,5))

const subNums = (num1,num2) => num1-num2;
console.log(subNums(5,3))

const mulNum = num1 => num1*10;
console.log(mulNum(3))



//OOPs in java script

function personDetails (firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getDOByear = function () {
        return this.dob.getFullYear();
    }
    // this.getFullName = function() {
    //     return `${firstName} ${lastName}`;
    // }
}

// instead of modufying functions we use prototyping to add new variables to an object ,it works based inheritance

personDetails.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

const person1 = new personDetails("hari","vital",'12-31-2001');
const person2 = new personDetails("hari","krishna",'8-5-2000');

console.log(person1.getFullName());

//class .This is new version in javascript

class perDtails {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = Date(dob);
    }

    getDOByear() {
        return this.dob.getFullYear();
    }
    getPerFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    
}

const per = new perDtails("hari","vital",'12-31-2001');

console.log(per.getPerFullName());

//now working on user addtion form

console.log(document.getElementById('myForm'))
console.log(document.querySelector('.container'))
const items = document.querySelectorAll('.listItem')

//we can iterate through nodelist but html list elements

items.forEach((item) => console.log(item));

//we can manupilate DOM elements using javascript

const ul = document.querySelector('.items');

// ul.remove()  ------This will remove the whole class
ul.lastElementChild.remove();
ul.firstElementChild.textContent ='hello'
ul.children[1].innerText = "haii"
//we can write html in javascript like this
ul.lastElementChild.innerHTML = '<h1>hoo<h1/>'

//we can even do css in javascript ,generally use for reaction to some event 
const button = document.querySelector('.btn');
button.style.background = 'red'

// button.addEventListener('click', function (e) {
//         e.preventDefault()
//         document.querySelector('body').classList.add('bg-dark')
//     })

//now lets print inputs taken from the form

const myForm = document.querySelector('#myForm');
const usname = document.querySelector('#uname');
const email = document.querySelector('#email')
const msg = document.querySelector('.msg');
const userLi = document.querySelector('#userList');


myForm.addEventListener('submit' , onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(usname.value === '' || email.value === ''){
        msg.classList.add('error');
        msg.innerHTML = '<small>please enter in both fields</small>';

        setTimeout(() => msg.remove(), 3000); 
    } else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${usname.value} : ${email.value}`));

        userLi.appendChild(li)
        

        //clearing fields
        usname.value = '';
        email.value = '';
    }
}