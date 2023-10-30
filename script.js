
// user admin true welcome, 'user'
// false not correct user

// function myFunction(user) {
//     if (user.toLowerCase() === 'admin' ) {
//         return 'Welcome'
//     } else {
//         return `not correct user`
//     }
// }
//
// console.log(myFunction('admin'))
// console.log(myFunction('Abdulla'))


// today is 'day' of february
// on february only 28 day, your day is 'day' of another month

// function february(day) {
//     if (day <= 28) {
//         return `today is ${day} of february`
//     } else {
//         return `on february only 28 day, your day is ${day} of another month`
//     }
//
// }
//
// console.log(february(20))


// 'num' is equals of 50
// 'num' is not correct

// function myFunction(num) {
//     if (num == 50) {
//     return `${num} is equals of 50`
//     } else {
//        return `${num} is not correct`
//     }
// }
//
// console.log(myFunction(20))
// console.log(myFunction(50))


// 'user' 'age' old, welcome
// 'user' 'age' old, rejected

// function ageControl(age) {
//     if (age >= 18 ) {
//      return `${age} old, welcome`
//     } else {
//      return   `${age} old, rejected`
//     }
// }
//
// console.log(ageControl(10))
// console.log(ageControl(18))

// 'user' name is too short (min 3)
// 'user' name is accepted

// 'age' must be a number ('20')
// function myFunction(age) {
//     if (typeof age === 'number') {
//         return `${age} old`
//     } else {
//         return `${age} must be a number`
//     }
//
// }
// console.log(myFunction(90))
// console.log(myFunction('90'))


// function myFunction(age) {
//     if (typeof age === 'string') {
//         if (age < 23) {
//             return `${age} must be older then 23`
//         } else {
//             return `your ${age} old`
//         }
//
//     } else {
//         return `${age} must be a string (20)`
//     }
// }
//
// console.log(myFunction('22'))
// console.log(myFunction('30'))

// else if (age < 23 ) {
//     return `${age} must be older then 23`
// }
// function myFunction(user){
//     if (user.length < 3) {
//         return `${user} name is too short (min 3)`
//     } else {
//         return `${user} name is accepted`
//     }
// }
// console.log(myFunction('geralt'))
//


// 'user' name is too long (max 5)
// 'user' name is accepted

// function myFunction(user){
//     if (user.length > 5) {
//         return `${user} name is too loong (max 5)`
//     } else {
//         return `${user} name is accepted`
//     }
// }
// console.log(myFunction('Abdulla'))
// console.log(myFunction('dada'))

// today is monday/tuesday/wednesday/thursday/friday weekend
// max days of weeks 7

// function myFunction(num) {
//     if (num === 1) {
//         return 'today is monday weekend'
//     } else  if (num === 2) {
//         return 'today is tuesday weekend'
//     }   else  if (num === 3) {
//         return 'today is wednesday weekend'
//     }   else  if (num === 4) {
//         return 'today is thursday weekend'
//     }   else  if (num === 5) {
//         return 'today is friday weekend'
//     }   else  if (num === 6) {
//         return 'today is saturday weekend'
//     }   else  if (num === 7) {
//         return 'today is sunday weekend'
//     }   else {
//         return 'max days of weeks 7'
//     }
//
// }
//
// console.log(myFunction(2))
// console.log(myFunction(10))


// let str = '      hello world      '    ;
// let trimmedStr = str.trim() ;



// function myFunction(number) {
//     return number % 2 === 0;
// }
//
// console.log(myFunction(4));
// console.log(myFunction(7));



// let str = 'lorem ipsum dolor sit'
// let deleteSpaces = str.replace(/\s/g, '')
// console.log(deleteSpaces)


// function myFunction(price ,discount) {
//     if (price <= 0 || discount < 0 || discount > 100) {
//         return "Not correct";
//     }
//     let a = (price * discount) / 100;
//     let finalPrice = price - a;
//     return `Ценв со скидкой ${finalPrice}`;
// }
//
// console.log(myFunction(100,20))
// console.log(myFunction(-100,20))
//
//


// function myFunction(str) {
//     if (typeof str === "string") {
//         if (str.length >= 4 && str.length <= 10 && str.length % 2 === 0) {
//             return true;
//         }
//         }
//     return false;
// }

// console.log(myFunction("abcd"));
// console.log(myFunction('qasdasdasdadsw'))
// console.log(myFunction(123456))