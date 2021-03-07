// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;
// console.log(user);  
//--------------------------------------------------


// function isEmpty(obj){
//     for (let key in obj){
//         return false;
//     }
//     return true;
// }

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

// delete schedule["8:30"];

// alert( isEmpty(schedule) ); // true

//--------------------------------------------------

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// let sum = 0;
// for (let person in salaries){
//     sum += salaries[person]
// }

// alert(sum)

//--------------------------------------------------

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// multiplyNumeric(menu);

// function multiplyNumeric(obj) {
//     for (let key in menu){
//         if (typeof menu[key] === 'number') {
//             menu[key] *= 2
//         }
//         console.log(menu[key])
//     }
// }


//---------------------------------------------------

// let calculator = {
//     read(){
//         this.A = +prompt('введите число A', 0)
//         this.B = +prompt('введите число B', 0)
//     },
//     sum(){
//         return this.A + this.B
//     },
//     mul(){
//         return this.A * this.B
//     },
// }

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

//-----------------------------------------------------

// function Calculator() {
//     this.read = function() {
//         this.A = +prompt('введите число A', 0)
//         this.B = +prompt('введите число B', 0)
//     };
//     this.sum = function() {
//         return this.A + this.B
//     };
//     this.mul = function() {
//         return this.A * this.B
//     };
// }

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum = " + calculator.sum() );
// alert( "Mul = " + calculator.mul() );

//-----------------------------------------------------

// function Accumulator(startingValue) {
//     this.value = startingValue;
//     this.read = function(){
//         this.value += +prompt('введите число', 0)
//     }
// }

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// alert(accumulator.value); // выведет сумму этих значений

//------------------------------------------------------

// function getEven(arr) {
//     return arr.filter((elem) => !(elem % 2))
// }

// console.log(getEven([5,20,-5,0,88,17,-32]));

//---------------------------------------------------------

// let str = ''
// for (let i = 1; i < 6; i++) {
//     str += 'X'.repeat(i)
//     str +='\n'
// }
// console.log(str)

//------------------------------------------------------------

// function isIntersect(a, b) {
//     if (a.x === b.x && a.y === b.y){
//         return true
//     }
//     if (((a.x - b.x)**2)+((a.y - b.y)**2) <= ((a.r + b.r)**2)) {
//         return true
//     }
//     return false
// }

// console.log(isIntersect({x: 0,y: 0,r: 2}, {x: 5,y: 5,r: 1}))
// console.log(isIntersect({x: 0,y: 0,r: 2}, {x: 2,y: 2,r: 1}))
// console.log(isIntersect({x: 0,y: 0,r: 2}, {x: 0,y: 0,r: 1}))
// console.log(isIntersect({x: 0,y: 0,r: 2}, {x: 0,y: 0,r: 1}))

//----------------------------------------------------------

// function sort(arr) {
//     return arr.filter((elem,i,array) => {
//         if (i > 0) {
//             if (elem < array[i-1]){
//                 return false
//             }
//             return true
//         }
//         return true
//     })
// }

// const arr = [5, 18, 22, -7, 88, 20, 109]
// console.log(arr)

//--------------------------------------------------------

// function calculate(arr){
//     return arr.reduce((sum, elem)=> elem % 2 !== 0 && elem > 0 ? sum + elem : sum, 0)
// //         if ((!(elem % 2===0)) && elem > 0){
// //             console.log(elem)
// //             return sum + elem;
// //         }
// //         return sum + 0
// //     },0)
// }

// console.log(calculate([5,0,-5,20,88,17,-32,14,205]))

//-------------------------------------------------------

// function chek(arr,num){
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {           
//             if (arr[i]+arr[j] === num && i !== j){
//                 return true
//             }
//         }
//     }
//     return false;
// }

// console.log(chek([10, 15, 3, 7], 17));
// console.log(chek([10, 15, 3, 7], 20));  
// console.log(chek([10, 15, 3, 7], 10)); 
// console.log(chek([10, 15, 3, 7], 22)); 
// console.log(chek([10, 15, 3, 7], 30));
// console.log(chek([10, 15, 3, 7], 40));  


//---------------------------------------------------------

// function sumDigits(num) {
//     //return String(num).split('').reduce((sum, elem) => sum + +elem, 0)
//     //==================
//     // let sum = 0;
//     // numb = num;
//     // while(numb>0){
//     //     sum += numb % 10;
//     //     numb = Math.floor(numb/10);  
//     // } 
//     // return sum
//     //===================
// }

// console.log(sumDigits(12992));

//--------------------------------------------------------------

// function func(arr){
//     let greater = arr.reduce((accum, elem)=> elem > accum ? accum = elem : accum);
//     return arr.filter(elem => elem < (greater - greater*0.1) || elem === greater ? false : true)
// }

// console.log(func([5,88,95,100,77,21,92,90,89]))

//-------------------------------------------------------------

// function fillArr(arr, len) {
//     if (arr.length < len) {
//         arr.push(0)
//         fillArr(arr, len)
//     }
// }

// const arr = [2,6,8]
// fillArr(arr, 12)
// console.log(arr)

// ------------------------------------------------------------

// function unique(arr){
//     let newArr = [];
//     arr.forEach((elem, i, arr) => i === 0 || !(newArr.find(el => el === elem)) ? newArr.push(elem) : true)
//     return newArr
// }

// console.log(unique([1,8,1,5,9,5,8,1,1,1,1,1,12]))

//---------------------------------------------------------

// function round5(val){
//     return val % 5 > 2 ? val + (5 - val % 5) : val - val % 5
// }

// console.log(round5(-2))

//------------------------------------------------------------

// function uniquePoints(arr){
// let newArr = [];
// arr.forEach((elem, i) => i === 0 || !(newArr.find(el => el.x === elem.x && el.y === elem.y)) ? newArr.push(elem) : true)
// return newArr
//     return arr.reduce((accum, elem, i) => i === 0 || !(accum.find(el => el.x === elem.x && el.y === elem.y)) ? accum.push(elem) : true, [])
// }

// const arr = [
//     {x: 5, y: 10},
//     {x: 1, y: 15},
//     {x: 7, y: -5},
//     {x: 16, y: 33},
//     {x: 1, y: 15},
//     {x: 7, y: -5},
//     {x: 4, y: 12}
// ]

// console.log(uniquePoints(arr))

// ---------------------------------------------------------------

// function getArr(num){
//     let arr = []
//     while(num>=3){
//         if (!(num % 3)) arr.push(num)
//         num--
//     }   
//     return arr
// }
// console.log(getArr(12))

//--------------------------------------------------------------

// function getEvenElementSum(arr){
//     return arr.reduce((sum,elem,i) => !(i % 2) ? sum + elem : sum, 0)
// }

// console.log(getEvenElementSum([5,  7, -1, 12, 3, 0]));
// console.log(getEvenElementSum([4,  -12, 29, 6, 31, 2, -50]));

//----------------------------------------------------------------

// function filter(a, b, c){
//     const arr = []
//     for (let i = a; i <= b;){
//         if(!(i % c)) {
//             arr.push(i) 
//             i+=c
//         } else i++
//     }
//     return arr
// }

// console.log(filter(8, 35, 7))

//------------------------------------------------------------------

// for (let i = 0; i <= 1000000; i++){
//     let polindrom = i.toString().split('').reverse().join('')
//     if (polindrom == i) {
//         let binary = i.toString(2)
//         let binaryPolindrom = binary    .split('').reverse().join('') 
//         if (binary == binaryPolindrom){
//             console.log(i, binary)
//         }
//     }

// }

//-------------------------------------------------------------------

// function pal(str){
//     return str.toLowerCase().split('').reverse().join('') == str.toLowerCase() 
// }

// console.log(pal('фвфыв'))
// console.log(pal('топот'))
// console.log(pal('Анна'))

//-----------------------------------------------------------------------------

// function getLettersVariants(str) {
//     if (str.length === 0){
//         return [str]
//     }
//     const arr = []
//     for (let i = 0; i < str.length; i++) {
//         const variants = getLettersVariants(str.slice(0, i) + str.slice(i));

//     }
//     return arr
// }

// console.log(getLettersVariants('asd'))

//----------------------------------------------------------------------------

// function getMaxEvenElement(arr){
//     return arr.reduce((big,elem,i) => (i % 2 == 0) && elem > big ? sum = elem : sum, 0)
// }

// console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0]))
// console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50]))

// console.log(+'0000')

//------------------------------------------------------------------------

// function sumInput() {
//     let arr = [];
//     let value = 1;
//     while(+value || value === 0){
//         value = prompt('введите число', '0')
//         if (isFinite(value)) arr.push(value);
//     }
//     alert(arr)
// }

// sumInput()

//-------------------------------------------------------------------------

// function getMaxSubSum(arr){
//     let acc = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             let sum = arr[i];
//             if (sum > acc) acc = sum;
//             for (let j = i + 1; j < arr.length; j++) {
//                 sum += arr[j];
//                 if (sum > acc) acc = sum;
//             }
//         }
//     }
//     return acc
// }

// console.log(getMaxSubSum([-1, 2, -5, 3, -9])) 
// console.log(getMaxSubSum([2, -1, 2, 3, -9]))
// console.log(getMaxSubSum([-1, 2, 3, -9, 11]))
// console.log(getMaxSubSum([-2, -1, 1, 2]))
// console.log(getMaxSubSum([100, -9, 2, -3, 5, 100]))
// console.log(getMaxSubSum([1, 2, 3]))

// --------------------------------------------------------------

// const arr = [5,7,2,34,1,78,42,3,9,2,0]

// arr.sort( (a, b) => b - a )
// console.log(arr)

//------------------------------------------------------------------

// function filterRange(arr, a, b) {
//     let max = Math.max(a, b)
//     let min = Math.min(a, b)
//     arr.forEach((el, i) => {
//         if (!(min <= el && el <= max)) {
//             arr.splice(i, 1) 
//         }
//     })
// }

// let arr = [5, 3, 8, 1, 1, 1, 1, 5, 2, 3, 7];



// alert( arr ); // 3,1 (совsпадающие значения)
// filterRange(arr, 4, 1);
// alert( arr ); // 5,3,8,1 (без изменений)


// function Calculator() {

//     this.methods = {
//         "+": (a, b) => a + b,
//         "-": (a, b) => a - b,
//     };

//     this.calculate = function(str) {

//         let split = str.split(' '),
//         a = +split[0],
//         op = split[1],
//         b = +split[2]

//         if ( !this.methods[op] || isNaN(a) || isNaN(b)) {
//             return NaN;
//         }
//         return this.methods[op](a, b);
//     }

//     this.addMethod = function(name, func) {
//         this.methods[name] = func
//     }
// }

// let calc = new Calculator;
// calc.addMethod("*", (a, b) => a * b)
// calc.addMethod("/", (a, b) => a / b)
// calc.addMethod("**", (a, b) => a ** b)

// console.log(calc.calculate('5 - 3'))
// console.log(calc.calculate('5 * 3'))
// console.log(calc.calculate('5 / 3'))
// console.log(calc.calculate('5 ** 3'))

//------------------------------------------------

// function shuffle(arr) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
// }

// let count = {
//     '123': 0,
//     '132': 0,
//     '213': 0,
//     '231': 0,
//     '312': 0,
//     '321': 0,
// }

// for (let i = 0; i < 1000000; i++) {
//     let arr = [1, 2, 3];
//     shuffle(arr)
//     count[arr.join('')]++
// }

// for (let key in count) {
//     console.log(`${key}: ${count[key]}`);
// }

//--------------------------------------------------------


//   function unique(arr) {
//     let only = new Set(arr);
//     const newArr = [];
//     for (let value of only) newArr.push(value)
//     return newArr
//   }

//   let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];

//   alert( unique(values) ); // Hare,Krishna,:-O

//------------------------------------------------------

// function aclean(arr) {
//     const array = arr;
//     array.forEach((element, i) => {
//         array.forEach((elem, j) => {
//             if (i < j && element.length === elem.length) {
//                 let arr1 = element.toLowerCase().split('')
//                 let arr2 = elem.toLowerCase().split('')
//                 for (let z = 0; z < arr2.length; z++) {
//                     if (arr1.includes(arr2[z])){
//                         if (z === arr2.length - 1){
//                             array.splice(j, 1)
//                         } else {
//                             continue
//                         }
//                     } else {
//                         break
//                     }

//                 }         
//             }
//         });
//     });
//     return array
// }

// function aclean(arr) {
//     let map = new Map();

//     for (let i = arr.length-1; i > -1; i--) {
//       let sorted = arr[i].toLowerCase().split("").sort().join("");
//       map.set(sorted, arr[i]);
//     }

//     return Array.from(map.values());
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

//const start = new Date().getTime();
// console.time();
// console.log(aclean(arr)) // "nap,teachers,ear" or "PAN,cheaters,era"
// console.timeEnd();
// const end = new Date().getTime();
// console.log(`${end - start} ms`)

//------------------------------------------------------------------------

// let prices = {
//     banana: 1,
//     orange: 2,
//     meat: 4,
// };

// for (let key in prices) {
//     prices[key] *= 2
// }

// console.log(prices)

//---------------------------------------------------------------------



// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 350
// };

// function topSalary(salaries) {
//     let result = Object.entries(salaries).reduce(([k, v], [key, value]) => v < value || v === undefined ? [k, v] = [key, value]  : [k, v], [])
//     if (result.length === 0) return null
//     return result
// }

// console.log(topSalary(salaries))

//------------------------------------------------------------------

// let user = {
//     name: "Василий Иванович",
//     age: 35
// };

// let userJSON = JSON.stringify(user) 
// console.log(userJSON) 
// userJSON = JSON.parse(userJSON)
// console.log(userJSON) 

//----------------------------------------------------------

// function sumTo(n) { 
//     // let sum = 0;
//     // for (let i = 1; i <= n; i++ ) {
//     //     sum += i;
//     // }
//     // return sum
//     // let sum = n
//     // if (n > 1) {
//     //     return n + sumTo(n - 1) 
//     // }
//     // else {
//     //     return n
//     // }
//     return ((1 + n)/2)*n
// }


// console.log( sumTo(100) ); // 5050

//----------------------------------------------

// function factorial(n) {
//     return n == 1 ? 1 : n * factorial(n - 1);
// }

// console.log( factorial(7) ); // 120

//--------------------------------------------------

// function fib(n) {
//     //return n < 3 ? 1 : fib(n - 1) + (n - 1)
//     let a = 1;
//     let b = 1;
//     for (let i = 3; i <= n; i++) {
//         let c = a + b;
//         a = b;
//         b = c;
//     }
//     return b;
// }

// console.log( fib(12) );


//=-------------------------------------------------

// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };


// function printList(list) {

//     if (list.next)  {
//         printList(list.next) 
//     }
//     console.log(list)
// }

// function printList(list) {
//     let tmp = list;
//     while (tmp) {
//         console.log(tmp)
//         tmp = tmp.next       
//     }  
// }


// printList(list)

//----------------------------------------------------------

// function sum(n){
//     return (m) => n + m
// }



// console.log(sum(1)(2))   // = 3
// console.log(sum(5)(-1)) // = 4

//--------------------------------------------------------

// function inBetween(a, b) {
//     return function(x) {
//         return x >= a && x <= b
//     }
// }

// function inArray(arr) {
//     return function(x) {
//         return arr.includes(x)
//     }
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];

// console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2

//------------------------------------------------


// function makeCounter() {
//     let count = 0;
//     function counter() {
//         return count++
//     }

//     counter.set = x => count = x

//     counter.decrease = () => count--

//     return counter
//     // ... ваш код ...
//   }

//   let counter = makeCounter();

//   alert( counter() ); // 0
//   alert( counter() ); // 1

//   counter.set(10); // установить новое значение счётчика

//   alert( counter() ); // 10

//   counter.decrease(); // уменьшить значение счётчика на 1

//   alert( counter() ); // 10 (вместо 11)

//-------------------------------------------------------------------------

// function sum(n) {
//     let acc = n;
//     function f(m){
//         acc += m;
//         return f
//     }
//     f.toString = function() {
//         return acc;
//     };

//     return f
// }

// console.log(sum(1)(2))// == 3; // 1 + 2
// console.log(sum(1)(2)(3))// == 6; // 1 + 2 + 3
// console.log(sum(5)(-1)(2)) //== 6
// console.log(sum(6)(-1)(-2)(-3)) //== 0
// console.log(sum(0)(1)(2)(3)(4)(5)) //== 15


//--------------------------------------------------------------------

// function printNumbers(from, to) {
//     let number = from;
//     // let a = setInterval( () => {
//     //     console.log(number)
//     //     if (number === to) {
//     //         clearInterval(a)
//     //     }
//     //     number++;
//     // } , 1000 )

//     let a = setTimeout(function tick() {
//         console.log(number)
//         number++;
//         if (number <= to) {
//             a = setTimeout(tick, 1000)
//         }
//     }, 1000);  
// }

// printNumbers(4, 8)

//-------------------------------------------------------------

// function slow(x) {
//     alert(`Called with ${x}`);
//     return x;
// }

// function cashingDecorator(func) {
//     let cache = new Map();
//     return function() {
//         if (cache.has(x)) {
//             return cache.get(x);
//         }
//         let result = func(x)
//         cache.set(x, result)
//         return reault
//     }
// }

//-----------------------------------------------------------

// const arr = [
//     {name: 'name', value: 'vladimir'},
//     {name: 'age', value: 24},
// ]

// let obj = {}

// arr.forEach((elem) => obj[elem.name] = elem.value)

// console.log(obj)

//--------------------------------------------------------------

// function factorial(n) {
//     return n == 1n ? 1n : n * factorial(n - 1n);    
// }

// const sumNum = (factorial(10n) + '').split('').reduce((sum, el) => sum + +el, 0)
// console.log(sumNum)

//--------------------------------------------------------------

// function maxSum(arr) {
//     const array = arr;
//     let newSumma = 0;
//     const arrWay = [];
//     for (let i = array.length - 1; i >= 1; i--) {
//         const arrNew = [];
//         for (let j = 0; j < array[i].length; j++) {
//             if (j != array[i].length - 1) {
//                 let b = array[i-1][j];
//                 let bNew = b + array[i][j]; 
//                 if ((arrNew[j] < bNew || Number.isNaN(+arrNew[j])  && bNew > b)) arrNew[j] = bNew
//                 else if (arrNew[j] < b) {
//                    arrNew[j] = b    
//                 }
//             }
//             if (j != 0) {
//                 let a = array[i-1][j-1];
//                 let aNew = a + array[i][j]; 
//                 if ((arrNew[j-1] < aNew || Number.isNaN(+arrNew[j-1]) && aNew > a)) arrNew[j-1] = aNew
//                 else if (arrNew[j-1] < a) {
//                         arrNew[j-1] = a
//                 }
//             }
//             if (j < array[i].length - 2) {
//                 let c = array[i-1][j+1];
//                 let cNew = c + array[i][j];        
//                 if ((arrNew[j+1] < cNew || Number.isNaN(+arrNew[j+1]) && cNew > c)) arrNew[j+1] = cNew;
//                 else if (arrNew[j+1] = c) {
//                         arrNew[j+1] = c;
//                 }
//             }
//         }
//         arrWay.push(array[i].reduce((sum, el) => sum < el ? sum = el : sum, 0));               
//         array[i-1] = arrNew;
//         let summa = arrNew.reduce((sum, el) => sum < el ? sum = el : sum, 0);
//         if (summa > newSumma) newSumma = summa;
//     }
//     console.log(arrWay)
//     return newSumma
// }
// console.log(maxSum([
//     [1],
//     [2, -9],
//     [-7, 5, 20],
//     [12, 6, -8, 0],
//     [-5, 6, 9, 12, -2],
//     [12, 11, 5, 3, 0, -5]
// ]));


//--------------------------------------------------------------------------------------------

// function calculate(arr) {
//     return arr.reduce((sum, el, i) => i > 0 ? sum + el.reduce((acc, elem, j) => j < i ? acc + elem : acc, 0): sum , 0)
// }

// console.log(calculate([
//     [3, 5, 7, -1, 12],
//     [12, 5, 8, -5, 3],
//     [0, 6, 1, -2, 6],
//     [7, -2, 6, -2, 0],
//     [6, 5, -13, 3, 9],
// ]))


//----------------------------------------------------------------------------

// function stroke(str) {
//     return str.toLowerCase().split('').every(el => el >= 'a' && el <= 'z' || el >= '0' && el <= '9') && str !== ''
// }
// console.log(stroke('JavaScript'))
// console.log(stroke('JavaSc43ript21'))
// console.log(stroke('JavaScrip_'))
// console.log(stroke('       '))
// console.log(stroke(''))

//----------------------------------------------------------------------------

//console.log('xxxxxxxxxx\nxx      xx\nx x    x x\nx  x  x  x\nx   xx   x\nx   xx   x\nx  x  x  x\nx x    x x\nxx      xx\nxxxxxxxxxx')

//-------------------------------------------------------------------------------

// function selectBanners(banners, count) {
//     const newBanners = [];
//     if (banners.length <= count) return [...banners];
//     let variation = 0;
//     banners.forEach(el => { 
//         el.va1 = variation + 1;
//         el.va2 = variation + el.weight;
//         variation += el.weight;
//     })
//     while (newBanners.length < count) {
//         let variable = Math.floor(Math.random() * variation)
//         banners.forEach(el => {
//             if ((variable >= el.va1 && variable <= el.va2) && (!newBanners.includes(el))) {
//                 newBanners.push(el)
//             }
//         })
//     }
//     return newBanners
// }

// const banners = [
//     {id: 2, weight: 10},
//     {id: 4, weight: 5},
//     {id: 8, weight: 15},
//     {id: 22, weight: 18},
//     {id: 41, weight: 41},
//     {id: 53, weight: 1},
//     {id: 69, weight: 9},
// ];

// const arra = [0, 0, 0, 0, 0, 0, 0]

// for (let i = 0; i < 100000; i++) {
//     let ss = selectBanners(banners, 1)
//     if (ss[0].id === 2) arra[0]++
//     if (ss[0].id === 4) arra[1]++
//     if (ss[0].id === 8) arra[2]++
//     if (ss[0].id === 22) arra[3]++
//     if (ss[0].id === 41) arra[4]++
//     if (ss[0].id === 53) arra[5]++
//     if (ss[0].id === 69) arra[6]++
// }

// for (let i = 0; i< arra.length; i++) {
//     arra[i] = Math.floor(arra[i]/1000)
// }

// console.log(arra);


//---------------------------------------------------------

// let p = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         resolve('круто 1 промисс')
//     }, 2000);
//     setTimeout(() => {
//         const person = {
//             name: 'Vladimir',
//             age: 24,
//             job: 'Developer',
//         }
//         reject(person)
//     }, 3000);
// })

// let p2 = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         resolve('круто 2 промисс')
//     }, 3000);
//     setTimeout(() => {
//        reject('отстой 2') 
//     }, 5000);
// })

// Promise.all([p, p2]).then((x) => {
//     console.log(x)
// })

// Promise.race([p, p2]).then((x) => {
//     console.log(x)
// })

// p.then( y => {
//     console.log(y);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Вааааууу!!')
//         }, 2000);
//     })
// }).then( z => {
//     console.log(z);
//     a = 'Ничего себе!'
//     return a
// }).then( c => {
//     console.log(c);
// }).catch( obj => console.error('Error :' , obj))


// //---------------------------------------------------------------------------

// fetch(`https://api.openweathermap.org/data/2.5/weather?lat=55.739610&lon=37.656117&appid=5a8b65c0e13440f5fe1a809787cf47d1`)
// .then(resp => resp.json())
// .then(data => console.log(data)) 

// fetch(`https://api.openweathermap.org/data/2.5/weather?lat=55.739610&lon=37.656117&appid=5a8b65c0e13440f5fe1a809787cf47d1`)
// .then(resp => console.log(resp))

//----------------------------------------------------------------------------------

// class Animal {
//     static type = 'Animal'
//     constructor(options) {
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//     }

//     voice() {
//         console.log('I am animal!')
//     }
// }

// const animal = new Animal({
//     name: 'Animal',
//     age: 7,
//     hasTail: true,
// })

// console.log(animal)

// class Cat extends Animal {
//     static type = 'Cat'
//     constructor(options) {
//         super(options)
//         this.color = options.color
//     }
//     voice() {
//         console.log('I am cat')
//     }
// }

// const cat = new Cat({
//     name: 'Barsik',
//     age: 7,
//     hasTail: true,
//     color: 'Black',
// })

// console.log(cat)

//----------------------------------------------------------------------------------

// function User(name, surname) {
//     var firstName, surname;
//     this.setFirstName =  function(newFirstName) {
//         firstName = newFirstName;
//     };
//     this.setSurname = function(newSurname) {
//         surname = newSurname;
//     };
//     this.getFullName = function () {
//         return (`${firstName} ${surname}`)
//     }

// }

//   var user = new User();
//   user.setFirstName("Петя");
//   user.setSurname("Иванов");

//   alert( user.getFullName() ); // Петя Иванов

//-------------------------------------------------------------------------------

//  const url = 'https://api.openweathermap.org/data/2.5/weather?lat=55.739610&lon=37.656117&appid=5a8b65c0e13440f5fe1a809787cf47d1'

// const xhr = new XMLHttpRequest()
// xhr.open('GET', url)
// xhr.onload = () => {
//     if (xhr.status < 400) {
//         console.log(JSON.parse(xhr.response))
//     } else {
//         console.error(xhr.response)
//     }
// }
// xhr.onerror = () => {
//     console.error(xhr.response)
// }
// xhr.send()

//------------------------------------------------------------------------------------

// let map = [1, 5, 6, 2, 6, 7, 8, 9, 4, 3, 6, 8, 1, 4, 6, 7, 9, 0]
// const set = new Set(map)
// map = [...set]
// map.sort((a, b) => b - a)
// console.log(map)

//---------------------------------------------------------------------------------

// function fastSort(arr) {
//     if (arr.length < 2) return arr
//     let centr = Math.floor(arr.length/2);
//     let separator = 0;     
//     let j = arr.length - 1;
//     label: for (let i = 0; i < arr.length; i++) {
//         if (i > j) { 
//             if (i >= centr) {
//                 [arr[centr], arr[j]] = [arr[j], arr[centr]]
//                 separator = j
//                 centr = arr[j]
//             } else {
//                 [arr[centr], arr[i]] = [arr[i], arr[centr]]
//                 separator = i
//                 centr = arr[i]
//             }
//             break
//         } else if (arr[centr] === Math.max(...arr)) {
//             [arr[centr], arr[arr.length - 1]] = [arr[arr.length - 1], arr[centr]]  
//             separator = arr.length - 1
//             break
//         } else if (arr[centr] === Math.min(...arr)) {
//             [arr[centr], arr[0]] = [arr[0], arr[centr]]
//             separator = 0
//             break
//         } else if (arr[i] > arr[centr]) {
//             for (; j >= i - 1; j--) {
//                 if (i > j) {
//                     if (i > centr) {
//                         [arr[centr], arr[j]] = [arr[j], arr[centr]]
//                         separator = j
//                         centr = arr[j]
//                     } else {
//                         [arr[centr], arr[i]] = [arr[i], arr[centr]]
//                         separator = i
//                         centr = arr[i]
//                     }
//                     break label;
//                 } else if (arr[j] < arr[centr]) {
//                     [arr[j], arr[i]] = [arr[i], arr[j]];
//                     j--;
//                     break
//                 }
//             }
//         }
//     }
//     if (arr.length === 2) return arr
//     let newArr = arr.splice(0, separator)
//     arr.shift()
//     return [...(fastSort(newArr)), centr, ...(fastSort(arr))]
// }

// function slowSort(arr) {
//     for (let j = 0; j < arr.length; j++) {
//         for (let i = 0; i < arr.length - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
//             }        
//         }
//     }

//     return arr
// }

// let array = [];
// let array2 = [];
// let sizeArray = 5;

// function fillArray() {
//     const set = new Set();
//     for (let i = 0; i < sizeArray*100; i++) {
//         set.add(Math.round(Math.random() * (sizeArray-1)))
//         if(set.size === sizeArray) break
//     }
//     array = Array.from(set)
//     array2 = Array.from(set)
//     array3 = Array.from(set)
// }

// start = new Date().getTime();
// fillArray()
// end = new Date().getTime();
// console.log(`время заполнения массива длиной ${array.length} элементов ${end - start} ms`)   

// start = new Date().getTime();
// console.log(array)
// console.log(fastSort(array))
// end = new Date().getTime();
// console.log(`время быстрой сортировки ${end - start} ms`)

//start = new Date().getTime();
//slowSort(array2)
//end = new Date().getTime();
//console.log(`время пузырьковой сортировки ${end - start} ms`)

//start = new Date().getTime();
// array3.sort((a, b) => a - b)
// end = new Date().getTime();
// console.log(`время JS сортировки ${end - start} ms`)

// let a = {
//     b: {
//         c: {
//             d: [1, 2, 3, 4, 5]
//         },
//         e: [6, 7, 8, 9, 10]
//     }
// }


// let f = {...a}
// f.b.j = 11
// console.log(a)
// f.g = 10
// console.log(f)

// const flarArr = (arr) => {
//     let array = []
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'number') {
//             array = [...array, arr[i]] 
//         } else {

//             array = [...array, ...flarArr(arr[i])] 
//         } 
//     } 
//     return array
// }

// console.log(flarArr([1, [1, 2, [3, 4]], [2, 4]]))

// setTimeout(() => console.log('4'), 0)
// Promise.resolve().then(() => console.log('2'))
// Promise.resolve().then(() => setTimeout(() => console.log('6'), 0))
// Promise.resolve().then(() => console.log('3'))
// setTimeout(() => console.log('5'), 0)
// console.log('1')


// Promise.resolve(123)
// .then(x => x + 1)
// .catch(x => x + 2)
// .then(x => x + 3)



// function sum(n) {
//     console.log(n)
//     return function func(m) {
//         console.log(n += m)
//         return func 
//     }
// }

// //sum(1)

// sum(1)(2)(3)

let a = {
    arr: [1, 2, 3],
    name: {
        firstName: 'vladimir',
        lastname: 'bushev'
    },    
}

let b = JSON.parse(JSON.stringify(a))

console.log(a, b, a === b)