function add(num1, num2) {
    if (num1 === 0) {
        return num2
    }else if (num2 === 0) {
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
    let lenMax = String(num2).length
    let lenMin = String(num1).length
    if (num1 > num2) {
        lenMax = String(num1).length
        lenMin = String(num2).length
    }
    let rez = ''

    if (String(num1).length !== String(num1).length) {
        const difLen = lenMax - lenMin
        for (let i = 0; i < difLen; i++) {
            minStrUpd += 0
        }
        minStrUpd += minStr
        for (let i = 0; i <= lenMax - 1; i++) {
            rez += (Number(maxStr[i]) + Number(minStr[i]))
        }
    }else {
        for (let i = 0; i <= lenMax - 1; i++) {
            rez += (Number(maxStr[i]) + Number(minStr[i]))
        }
    }
    console.log(rez)
    return Number(rez);
}
add(256, 689)
add(49999, 49999) //818181818
add(0,123)