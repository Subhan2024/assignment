import{msg, studentData} from'./work.js'
console.log(msg);

import {add,arr, studentData as std} from './demo.js'
add()

let stdData = new std();
stdData.carInfo();




function arrsorted(a){
    let sortedArr = a.sort(function(a, b){return (b-a)})
    console.log(sortedArr)
}
arrsorted(arr)
let student = new studentData()
student.msg()
studentData.greet()
