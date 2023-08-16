const multiply = (a,b)=>a*b;

console.log(multiply(2,3))

const student = {
    name: 'student_name',
    age: 33,
    details : function(){
        console.log(`Student name is ${this.name} and age is ${this.age}`)
    }
}

student.details()