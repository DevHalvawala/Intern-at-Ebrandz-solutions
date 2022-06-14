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