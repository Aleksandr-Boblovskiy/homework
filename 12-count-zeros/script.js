/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход целое неотрицательное
 * число n. Возвращать функция должна количество нулей, содержащихся в аргументе.
 * 
*/

function countZeros(n) {
    // Напишите код здесь
    let str = '';
    let result = 0;
    for (let i = 1; i <= n; i++)
        str = str + i;
    for (i = 0; i < str.length; i++)
        if (str[i] == '0')
            result++;
    return result;

}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(countZeros(20)); // 2 – два нуля, по одному в числах 10 и 20
console.log(countZeros(100)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
console.log(countZeros(102));
console.log(countZeros(110));
console.log(countZeros(342));