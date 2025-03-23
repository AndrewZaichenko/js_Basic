function pow(digit, power){
    let result;
    if (digit === 0) {
        result = 0;
    } else if (power === 0 || digit === 1) {
        result = 1;
    } else if (power === 1) {
        result = digit;
    } else if (power < 0) {
        let denominator;
        for (denominator = 1; power < 0; power++) {
            denominator *= digit;
        }
        result = 1 / denominator;
    } else  {
        for (result = 1; power > 0; power--) {
            result *= digit;
        }
    }
    return result
}
    
digitInPower = pow(2,3)
console.log(digitInPower)
