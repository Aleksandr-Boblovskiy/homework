/*
 * Задача 10: «Факториал»
 *
 * Напишите функцию factorial(n), возвращающую факториал неотрицательного
 * целого числа. Факториал — это произведение всех натуральных чисел
 * от 1 до n включительно. Факториал 0 равен 1.
 * 
*/

function factorial(n) {
    // Напишите код здесь
    let out = 1;
    if (n == 0 || n == 1) {
        return out;
    }

    let arr = [];
    
    for (let i = 1; i <= n; i++) {
        arr[arr.length] = i;
    }
    
    for (let i = 0; i < arr.length; i++) {
        out = out * arr[i];
    }
        
    return out;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(6)); // 720