const reverseInt = (number) => {
    const string = String(Math.abs(number))
    let numRev = ''
    for (let i = string.length -1; i >= 0; i--){
        numRev += string[i]
    }
    return numRev
}
