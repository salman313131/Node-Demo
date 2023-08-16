const arr = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon']

const newArr = arr.map((item)=>{
    if(item===' '){
        return 'empty string'
    }
    else{
        return item
    }
})

console.log(newArr)