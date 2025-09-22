let score = 33 // confirm hy k number h

const {score} = req.body // is line say nhi pta chlta k value string hy ya number

console.log(typeof score);
//OUYPUT:
// number type btaye ga'

let score = "33"// agr dbl cot may likha hota to
//OUTPUT:
//string  

let valueInNumber = Number(score) // ab is line ki wja say number jo hy wo string say number ma convert hojye ga

//OUTPUT;
console.log(typeof valueInNumber);
//string
//number

//ab dekty hy conversion say kya deta hy
//"33"=> 33
//"33abc" => NaN
//"TRUE" => 1; ||"false" => 0;


let isLoggedIn = 1
let booleanIsLoggedIn = Baoolean(isLoggedIn)
console.log(booleanIsLoggedIn);
 // OUTPUT:
 TRUE
 //Isi  trha agr {""} empty kry gy to FALSE aye ga
 // agr  koi value dy di jsy {"amna"} to ansr aye ga true


