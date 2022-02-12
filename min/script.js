//Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.//
let age = prompt('How old are you?', );
if (age < 11) {
    message = 'Hi, baby!';
}  else if (age < 17) {
    message = 'Hi !';
  } else if (age < 59) {
    message = 'Hello!';
  } else if (age > 60) {
    message = 'Hello, dear person !';
  }  else {
    message = 'Wonderful age!';
  } 
  alert( message );

 // Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).//
 let number = prompt('What number ?', );
 switch (number) {
   case '0':
    alert(')');
     break;
   case '1':
    alert('! ');
     break;
   case '2':
    alert('@');
     break;
   case '3':
    alert('#');
     break;
   case '4':
    alert('$');
     break;
   case '5':
    alert('%');
     break;
     case '6':
    alert('^');
     break;
     case '7':
    alert('&');
     break;
     case '8':
    alert('*');
     break;
     case '9':
    alert('(');
     break;
     default:
     alert( 'Unknown number' );
 } 
  
 // Підрахуй суму всіх чисел в заданому користувачем діапазоні.
 let a = Number(prompt('What number ?', ));
 let n = Number(prompt('What numb?', ));
 let sum = 0;
 while(a <= n) {
    sum += a;
    a++;
  }
  alert(sum);
 
 
   
 // Запитай у користувача 2 числа і знайди найбільший спільний дільник.
 
let a = prompt('What one number ?', ); 
let b = prompt('What two number ?', ); 
let gcd;
while (a!=b) {
  if (a>b) {
    a = a - b;
  }
  else {
    b = b - a;
  }
}
gcd = a;
document.write(gcd);

 // Запитай у користувача число і виведи всі дільники цього числа.
 const num = prompt('Enter a positive number: ');
console.log(` ${num}`);
for(let i = 1; i <= num; i++) {
    if(num % i == 0) {
        console.log(i);
    }
}
