/*Mission 1
1. С помощью цикла while вывести все простые числа
в промежутке от 0 до 100.

var x = 0;
while (x < 101) {
    alert(x = x + 1)
}
*/


/*Mission 2
2. С этого урока начинаем работать с функционалом интернет-магазина.
 Предположим, есть сущность корзины.
Нужно реализовать функционал подсчета стоимости корзины
в зависимости от находящихся в ней товаров.

var wood = 10;
var stone = 15;
var copper = 50;
var gold = 100;
let product = [wood, stone, copper, gold];
let basket = [gold, wood];
var cost_basket = 0;

for (var i = 0; i < product.length; ++i) {
    if (basket.indexOf(product[i]) !== -1) {
        cost_basket = cost_basket + product[i]
    }
}
console.log("Стоимость: " + cost_basket);
*/


/*Mission 3
3. Товары в корзине хранятся в массиве.
Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

var wood = 10;
var stone = 15;
var copper = 50;
var gold = 100;
let basket = [wood, stone, copper, gold];
var countBasketPrice = 0;
for (var i = 0; i < basket.length; ++i) {
    countBasketPrice = countBasketPrice + basket[i]
}
console.log(countBasketPrice)
*/


/* Mission 4
4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
for(…){// здесь пусто}


for (var x = 0; x < 10; x += 1) {
    console.log(x)
}
*/


/*Mission 5
5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке,
только у вашей пирамиды должно быть 20 рядов, а не 5:


var str = "";
while (str.length < 20) {
    str += "x";
    console.log(str)
}
*/