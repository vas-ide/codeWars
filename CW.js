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

    if (String(num1).length < String(num2).length) {
        for (let i = 0; i < String(num2).length - String(num1).length; i++) {
            minStrUpd += 0
        }
        minStrUpd += String(num1)
        for (let i = 0; i <= String(max).length - 1; i++) {
            rez += (Number(maxStr[i]) + Number(minStrUpd[i]))
        }

    } else if (String(num1).length > String(num2).length) {
        minStrUpd = minStr
        for (let i = 0; i < String(num1).length - String(num2).length; i++) {
            minStrUpd += 0
        }
        for (let i = 0; i <= String(max).length - 1; i++) {
            rez += (Number(maxStr[i]) + Number(minStrUpd[i]))
        }
    }else {
        for (let i = 0; i <= String(max).length - 1; i++) {
            rez += (Number(maxStr[i]) + Number(minStr[i]))
        }
    }
    console.log(Number(rez))
    return Number(rez);
}
add(1, 12)
add(122,81)
add(49999, 49999) //818181818