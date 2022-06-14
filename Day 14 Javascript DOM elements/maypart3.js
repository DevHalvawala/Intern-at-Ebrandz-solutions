// DOM
// Getting elements by tag name
// syntax
document.getElementsByTagName('tagname')

const allTitles = document.getElementsByTagName('h1')

console.log(allTitles) //HTMLCollections
console.log(allTitles.length) // 4

for (let i = 0; i < allTitles.length; i++) {
    console.log(allTitles[i]) // prints each elements in the HTMLCollection
}

// Getting elements by class name
//syntax
document.getElementsByClassName('classname')

const allTitles1 = document.getElementsByClassName('title')

console.log(allTitles1) //HTMLCollections
console.log(allTitles1.length) // 4

for (let i = 0; i < allTitles1.length; i++) {
    console.log(allTitles1[i]) // prints each elements in the HTMLCollection
}

// Getting elements by an id
//syntax
document.getElementById('id')
let firstTitle = document.getElementById('first-title')
console.log(firstTitle) // <h1>First Title</h1>

let firstTitle1 = document.querySelector('#first-title') // select id with first-title
let firstTitle2 = document.querySelector('.title') // select the first available element with class title
let firstTitle3 = document.querySelector('h1') // select the first available h1 element

// -------------------------------

const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
    title.style.fontSize = '24px' // all titles will have 24px font size
    if (i % 2 === 0) {
        title.style.backgroundColor = 'green'
    } else {
        title.style.backgroundColor = 'red'
    }
})

// -------------------------------
const titles1 = document.querySelectorAll('h1')
titles1.forEach((title, i) => {
    title.style.fontSize = '24px' // all titles will have 24px font size
    if (i % 2 === 0) {
        title.style.fontSize = '20px'
    } else {
        title.style.fontSize = '30px'
    }
})