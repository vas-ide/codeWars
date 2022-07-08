function add(num1, num2) {
    let numLen = String(num2).length
    if ( num1 > num2) {
        numLen = String(num1).length
    }
    let max = num1
    let min = num2
    if (min > max) {
        max = num2
        min = num1
    }

    let rezult = ''
    let num3 = 0
    let num4 = 0

    if (String(num1).length !== String(num1).length) {
        rezult += String(max).slice(0, -String(min).length)
        num3 = Number(String(max).slice(-String(min).length))
        num4 = min
        for (let i = 0; i <= numLen-1; i++) {
            rezult += (Number(String(num3)[i]) + Number(String(num4)[i]))
        }
    }else{
        for (let i = 0; i <= numLen-1; i++) {
            rezult += (Number(String(num3)[i]) + Number(String(num4)[i]))
            }
        }
    console.log(rezult)
    return rezult;
}

add(256, 689)