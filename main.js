// 1) На forEach:

// - Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел

// - Дан массив с числами. Найдите сумму этих чисел.


// let numbers = [1, 2, 3, 4, 5];
// let squares = [];

// numbers.forEach(function(number) {
//   squares.push(number ** 2);
// });

// console.log(squares); 



// let numbers = [1, 2, 3, 4, 5];
// let sum = 0;

// numbers.forEach(function(number) {
//   sum += number;
// });

// console.log(sum); 



// 2) На map:

// - Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.


// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const squares = nums.map(function (num) {
//   return num * num
// })

// console.log(squares)



// 3) На reverse:

// - Дан массив с днями недели ['Понедельник', 'Вторник'...]. Сделайте так, что он начинался с воскресенья и заканчивался понедельником.


// let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг' , 'Пятница', 'Суббота', 'Воскресенье']


// console.log(week.reverse())


// 4) На split и join:

// - C помощью метода join превратить массив [3, 2, 1] в строку "3 больше, чем 2 больше, чем 1"

// - Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.

// - В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.


// let arr = [3, 2, 1]
// console.log(arr.join('>'))

// let string = 'я учу js!'.split(' ',3)

// console.log(string)


// let date = '2025-12-31'

// let str = date.split('-').reverse().join('.')

// console.log(str)



// 5) На filter:

// - Дан массив с числами. Оставьте в нем только отрицательные числа. В отдельную переменную положите количество отрицательных чисел в этом массиве.

// - Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.


// let arr = [1,-2,3,-4,5,-6,-7]

// let minusOnly = arr.filter(function(n) {
//     let remainder = n < 0
//     return remainder
// })

// console.log(minusOnly.length)


// let strs = ['asdsd', 'a', 'b', 'c', 'sdafsdffdsf', 'sdfsadfwqedfsd', 'a']

// let strLength = strs.filter(function(n) {
//     return n.length > 5;
// })

// console.log(strLength)













