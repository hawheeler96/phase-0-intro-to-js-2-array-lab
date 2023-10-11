// Write your solution here!
const cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat(name) {
    cats.splice(3,0, "Ralph");
} 

function destructivelyPrependCat(name) {
    cats.splice(0,0, "Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    const newCatBroom = [...cats, "Broom"];
    return newCatBroom
}

function prependCat(name) {
    const prependCatArnold = ["Arnold", ...cats];
    return prependCatArnold
}

function removeLastCat() {
    const removeLastCatArr = cats.slice(0,2)
    return removeLastCatArr
}

function removeFirstCat() {
    const removeFirstCatArr = cats.slice(1,3)
    return removeFirstCatArr
}