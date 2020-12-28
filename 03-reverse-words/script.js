/*
 * Задача 3: «Развернуть слова в предложении»
 *
 * Напишите функцию reverseWords(str), принимающую на вход строку.
 * Функция должна вернуть новую строку, расставив слова в обратном
 * порядке.Если в строке есть знаки препинания, их можно удалить
 * или оставить — на ваше усмотрение.
 *
*/

function reverseWords(str) {
    // Напишите код здесь
    let temp = '';
    let out = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ') {
            temp = str[i] + temp;
            out = temp + out;
            temp = '';   
        }
        else {
        temp = temp + str[i];
        }     
    }    
    out = temp + out;
    return out;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(reverseWords('всегда много путей достичь цель есть')); // "есть цель достичь путей много всегда"
console.log(reverseWords('испробовать их все должны вы')); // "вы должны все их испробовать"