function addFactory(valueToAdd) {
    return function (value) {
        return valueToAdd + value;
    }
}


const fnAdd2 = addFactory(2);
const fnAdd5 = addFactory(5);
const fnAdd10 = addFactory(10);

console.log(fnAdd2(3));
console.log(fnAdd5(3));
console.log(fnAdd10(3));
