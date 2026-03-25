function printPyramid(rows) {
    for (let i = rows; i >= 1; i--) {
        let pattern = "";
        for (let j = 1; j <= i; j++) {
            pattern += "*";
        }
        console.log(pattern);
    }
}

printPyramid(5);


// function filterDemo1(){
//     let numbers =[1,2,3,4,5];
//     const incremented= numbers.filter((value)=> value%2==0);
//     console.log(incremented);
//     console.log(numbers);
// }
// filterDemo1()


//-------------------------------------------------


// const callback =(value,index) => {
// console.log(value,index);
// return value+1;

// }

// function demo1(){
//     let numbers=[1,2,3,4,5];
//     const incremented = numbers.map(callback);
//     console.log(incremented);
//     console.log(numbers);
// }
// demo1()