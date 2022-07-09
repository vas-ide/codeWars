function add(num1, num2) {
    if (num1 === 0) {
        console.log(num2)
        return num2
    } else if (num2 === 0) {
        console.log(num1)
        return num1
    }
    let max = num1
    let min = num2
    if (min > max) {
        max = num2
        min = num1
    }
    let maxStr = String(max)
    let minStr = String(min)
    let minStrUpd = ''
    let rez = ''
    const lenMin = minStr.length
    const lenMax = maxStr.length
    const lenDif = lenMax - lenMin

    if (String(num1).length < String(num2).length) {
        for (let i =1; i <= lenDif; i++) {
            minStrUpd += 0
        }

    }

    console.log(Number(rez))
    console.log(minStrUpd)
    return Number(rez);
}
add(1, 12)
add(122,81)
add(49999, 49999) //818181818