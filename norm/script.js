
//1 Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
let string = prompt('Name a dfive  digit number')
const len = string.length;
for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
        alert ('It is not a palindrome');
    } else {
        alert ('It is a palindrome');
    }
}

//2 Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.
let buy = +prompt('What amount?')

if (buy >= 200 && buy <= 300) {
   discountedBuy = buy - (buy / 100 * 3);
   alert('Payable at a discount ' +discountedBuy);
} else if (buy > 300 && buy < 500) {
   discountedBuy = buy - (buy / 100 * 5);
   alert('Payable at a discount ' +discountedBuy);
} else if (buy >= 500) {
    alert('Payable at a discount ' +discountedBuy);
   alert(discountedBuy);
}

//3 Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.
let positive = 0;
let negative = 0;
let loyal = 0;
let odd = 0;
let even = 0;
for (let i = 0; i < 10; i++) {
  let arr = +prompt("Enter 10 numbers separated by a space", " ");
  if (arr % 2 == 0) even++;
  if (arr % 2 != 0) odd++;
  if (arr == 0) loyal++;
  if (arr > 0) positive++;
  if (arr < 0) negative++;
}
console.log(
  "positive: " + positive + " negative: " + negative + " loyal: " + loyal
);
console.log(" odd: " + odd + " even: " + even);

//4 Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.
let a = prompt("День тижня.", "Хочеш побачити наступний день?");

switch (a) {
  case "Хочеш побачити наступний день?":
    alert("Sunday");
  case "Хочеш побачити наступний день?":
    alert("Monday");
  case "Хочеш побачити наступний день?":
    alert("Tuesday");
  case "Хочеш побачити наступний день?":
    alert("Wednesday");
  case "Хочеш побачити наступний день?":
    alert("Thursday");
  case "Хочеш побачити наступний день?":
    alert("Friday");
  case "Хочеш побачити наступний день?":
    alert("Saturday");
}






