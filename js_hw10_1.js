/*
В нас є масив об'єктів в яких міститься email.
У нас параноя, ми не довіряємо жодним адресам, окрім зареєстрованих на доменах gmail.com та yahoo.com.
За допомогою регулярного виразу створіть масив з адресами, гідними довіри. Постарайтеся також зробити просту валідацію до @
одне, або два слова які можуть містити (латинські букви, цифри) яке може бути розділене крапкою.
*/


var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru"
    },
];


var re = /[\w\.]+\@(gmail|yahoo)\.com/g;
var trustedEmails = [];

for (var userInfo in arr) {
    if (arr[userInfo].email.match(re)) {
        trustedEmails.push(arr[userInfo].email)
    }
}

console.log(trustedEmails);
