// const number = [1,2,3,4,5,6,7,8,9,10]
// //value, index, arrray
// number.forEach((value)=>{
//      Math.sqrt(value);
// });
// console.table(number);

//slice

// const number = [1,2,3,4,5,6,7,8,9,10];
// console.log(number);
// console.log("slice: " + number.slice(2));


//splice

// const number1 = [1,2,3,4,5,6,7,8,9,10];
// console.log(number1);
// let removed = number1.splice(2)
// console.log(removed);
// console.log(number1);

// let number2 = [1,2,3,4,5,6]
// console.log("Before removing: " + number2)
// let removedEl = number2.splice(2,0,[55,66,77])
// console.log("After removing: " + number2)

//concat

// let a = [10,20,30];
// let b = [40,50,60];
// let c = [70,80,90];
// let d = a.concat(b,c,25,45,55,65,"a","b");
// console.table(d)


//sort

// let names = [ "kumar", "jamam", "subair", "siddhika", "Rasina"];
// console.log("Before Sort: " +  names);
// names.sort();
// console.log("After Sort: " + names);

// const num = [12,2,34,56,76,31]
// console.log("Before Sorting: " + num)

// num.sort((a,b)=>{
//     return a-b;
// })
// console.log("After Sorting: " + num)


//fill method

// let n =[1,2,3,4,5]
// console.log("Before Fill" + n);
// n.fill(20,2,4);
// console.log("After fill: " + n)


// const products = ["pen","pencil","Eraser" , "Box"];
// let result  = products.includes("pen",2)
// console.log(result);

// console.log(products);

// console.log(products.join());
// console.log(products.join("  "));

// const n = [1,2,3,4,5,6]
// console.log("Before reverse: " + n );
// n.reverse()
// console.log("After reverse: " + n)



//push

// const arr = [1,2,3,4,5,6]
// console.log("Before push: " + arr)
// arr.push("Okay")
// console.log("Atter the push: " + arr)

//pop

// const user = ["ram","kumar","sam"];
// console.log(user);
// console.log(user.pop());
// console.log(user);


//shift

// const user1 = ["ram","kumar","sam","som"];
// console.log("Before shift: "+user1);
// console.log("After shift: " + user1.shift());


//unshift

// const students = ["kumar","syriya","sumar","kumar"]
// console.log("before unshift: " + students)
// let name = students.unshift("jjjjj");
// console.log("after unshift: " + students)













const HoursEl = document.getElementById("hrs");
const MinutesEl = document.getElementById("mins");
const SecondsEl = document.getElementById("sec");



function getTime() {
    
        const time = new Date();
        const Sec = time.getSeconds()/60;
        const Minus = (Sec+time.getMinutes())/60; 
        const Hrs = (Sec+time.getHours())/12;     
        HoursEl.style.setProperty('--rotation',Hrs*360)
        MinutesEl.style.setProperty('--rotation',Minus*360)
        SecondsEl.style.setProperty('--rotation',Sec*360)
   
}
setInterval(getTime,1000)
getTime();





















