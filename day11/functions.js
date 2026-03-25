const addAsArrow =(numbers)=>{
    let sum=0;
    for(let index=0;index<numbers.length;index++){
        const element= numbers[index];
        sum+=element;
    }
    return sum;
}
console.log(addAsArrow([1,2,3]));


// function add(){
//     let result=0;
//     debugger;
//     console.log(arguments);
//     for(let index=0;index<arguments.length;index++){
//     result+=arguments[index];
//     }
//     return result;
// }
// const result=add(3,4,7,9);
// console.log(result);