//Задание 1. Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.


// const parser1 = new DOMParser();
// console.log(parser1);

// const xmlString1 = `
//         <book>
//             <title lang="en">Ivan</title>
//             <author>IvanIvanov</author>
//             <year>12</year>
//             <price>35</price>
//         </book> 
//     `;

// const xmlDOM1 = parser1.parseFromString(xmlString1, "text/xml");

// const bookNode = xmlDOM1.querySelector("book");
// const titleNode = bookNode.querySelector("title");
// const authorNode = bookNode.querySelector("author");
// const yearNode = bookNode.querySelector("year");
// const priceNode = bookNode.querySelector("price");
// console.log(bookNode);
// console.log(titleNode);
// console.log(authorNode);
// console.log(yearNode);
// console.log(priceNode);

// const langAttr = titleNode.getAttribute("lang");

// console.log(langAttr);
// const result = {
//     lang: langAttr,
//     title: titleNode.textContent,
//     author: authorNode.textContent,
//     year: Number(yearNode.textContent),
//     price: Number(priceNode.textContent),

// };

// console.log("result", result);


const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;



const xmlDOM = parser.parseFromString(xmlString, 'text/xml');


const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelector("student");
const nameNode = studentNode.querySelector("name");
const firstNode = nameNode.querySelector("first");
const secondNode = nameNode.querySelector("second");
const ageNode = studentNode.querySelector("age");
const profNode = studentNode.querySelector("prof");

// console.log(listNode);
// console.log(studentNode);
// console.log(nameNode);
// console.log(firstNode);
// console.log(secondNode);
// console.log(ageNode);
// console.log(profNode);


const langAttr = nameNode.getAttribute('lang')


const result = {
    lang: langAttr,
    prof: profNode.textContent,
    age: ageNode.textContent,
    second: secondNode.textContent,
    first: firstNode.textContent,
    name: nameNode.textContent,
    student: studentNode.textContent,
};


console.log(result);