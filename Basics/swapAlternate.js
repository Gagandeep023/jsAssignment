const array = [2, 3, 6, 1, 6, 4];
console.log(array);

for(let i = 0; i < array.length - 1; i = i +2){
    swap(array, i, i+1);
}
console.log(array);

function swap(array, firstElement, secondElement){
    let temp = array[firstElement];
    array[firstElement] = array[secondElement];
    array[secondElement] = temp;
}