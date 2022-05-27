//this is to display text contents after being converted to an Array
let book1 = document.querySelectorAll('#book-list li .name');
Array.from(book1).forEach(function (book1) {
    console.log(book1.textContent);
})
//this is for appending items
let book = document.querySelectorAll('#book-list li .name');
Array.from(book).forEach(function (book) {
    (book.textContent) += " (titles)";
})
const pageBanner = document.querySelector("#book-list");
pageBanner.innerHTML='<h2>more books</h2>';
const banner= document.querySelector('#page-banner');
console.log('#page-banner node type is :', banner.nodeName);
console.log('#page-banner has child nodes? :', banner.hasChildNodes());
const bookList= document.querySelector('#book-list');//finding parent node
console.log('#page-banner parent node is :', bookList.parentNode);
let btnDelete= document.querySelectorAll("#book-list ul li");
Array.from(btnDelete).forEach (function(btnDelete) {
    btnDelete.addEventListener('click', function(e) {
       const li=e.target.parentElement;
       li.parentNode.removeChild(li);
    })
});
let list=document.querySelector('#book-list h2');
list.addEventListener('click', function (e) {
    console.log(e);
    //console.log(e.target);
});

const listTexts=document.querySelectorAll("#book-list ul li");
listTexts.forEach(e => {
    console.log(e.innerText);
});
let header =document.querySelector("#book-list");

header.innerHTML +="<h1>topic</h1>"

const  addBooks= document.querySelector("#book-list");

const manyBooks=['rook', 'knight', 'bishop', 'queen'];

manyBooks.forEach( book => {
    addBooks.innerHTML += `<p>${book}</p>`;
    //console.log(book);

});

const link=document.querySelector("ul");
link.getAttribute('li');
link.setAttribute('li','safaricom.com');
link.innerText='safaricom'
link.setAttribute('style','color:green',)
link.setAttribute('style','font-size:24px')

const title=document.querySelector('span');
title.style.color='green';

// let named="abu";
// console.log(named.charAt(0));