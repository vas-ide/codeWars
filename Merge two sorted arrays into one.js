
function mergeArrays(arr1, arr2) {
    let all = [arr1 + arr2]
    const allContact = [].concat(arr1, arr2)               //Объединение
    const allSet = Array.from(new Set(allContact))         //Удаление дублей
    const allSort = allSet.sort(compareNumeric)            //Сортировка Sort() используя одну из функций
    console.log(allSort)
    return allSort

    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a === b) return 0;
        if (a < b) return -1;
    }

    function compareNumbers(a, b) {
        return a - b;
    }
    // return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));

}


mergeArrays([1,2,3,4], [5,6,7,8])
mergeArrays([1,3,5,7,9], [10,8,6,4,2])
mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12])
