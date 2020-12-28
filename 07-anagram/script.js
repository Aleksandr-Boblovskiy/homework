/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
    // Напишите код здесь
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    if (str1.length != str2.length || str1 == str2) {
        return false;
    }

    let z = 0;

    for (let i = 0; i < str1.length; i++) {
        for (let n = 0; n < str2.length; n++) {
            if (str1[i] == str2[n]) {
                z++;
            }
        }
    }

    if (str1.length == z) {
        return true;
    }

}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false