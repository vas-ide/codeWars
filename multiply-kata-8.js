function multiply(number){
    //your code here
    const string = String(Math.abs(number))
    const lengthDigits = string.length;
    const extent = 5 ** lengthDigits;
    console.log(Number(number) * Number(extent))
    return Number(number) * Number(extent);
}

multiply(-2)