/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    // Напишите код здесь
    let out = '';
    if (str == out) {
        return out;
    } 
    out = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        if (str[i] == ' ' && (i + 1) < str.length && str[i + 1] != ' ') {
            out = out + str[i] + str[i +1].toUpperCase();
            i++;            
        } else {
            out = out + str[i];
            }
    }
    return out;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"