// Dates

let myDate = new Date()//the output not readable

 console.log(myDate.toString());//**thora sa output theek hy date smj ari***
 console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());**best date show hoti h***

 console.log(typeof myDate);*** date ek Object hy**

let myCreatedDate = new Date(2023, 0, 23)//***month js may 0 say start hhoty */

 let myCreatedDate = new Date(2023, 0, 23, 5, 3)//***agr time bhi show krna chty */


 let myCreatedDate = new Date("2023-01-14")

let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
 console.log(myCreatedDate.getTime());
}//***bry project  may use hota hy date ko comapre krny k liye

 console.log(Math.floor(Date.now()/1000));//mili second may date show krny k liye

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970
const myDate = new Date();
console.log(myDate) //Output : 2023-10-09T14:38:09.847Z
// We can use various methods to convert this date into more readable value.
console.log(myDate.toString()) //Output : Mon Oct 09 2023 07:39:18 GMT-0700 (Pacific Daylight Time)

console.log(myDate.toLocaleString()) // Output : 10/9/2023, 7:44:20 AM
console.log(myDate.toLocaleDateString()) //Output : 10/9/2023
console.log(myDate.toLocaleTimeString()) // Output : 7:45:31 AM

console.log(myDate.toDateString()) //Output : Mon Oct 09 2023
console.log(myDate.toTimeString()) // Output : 07:46:40 GMT-0700 (Pacific Daylight Time)

console.log(myDate.toISOString()) // Output : 2023-10-09T14:43:39.337Z
console.log(myDate.toJSON()) //Output : 2023-10-09T14:40:58.495Z