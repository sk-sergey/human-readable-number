module.exports = function toReadable (number) {

    if (number == 0) {return readableNumbers[0];}
    return reHundred(number) + reDecade(number) + reNumber(number);
}

function reHundred(number) {

    if (number <= 99){return "";}
    return `${readableNumbers[Math.floor(number/100)]} ${readableNumbers[100]}`

}

function reDecade(number) {
    
    function isSpaceNeed(number) {
        
        if (number > 100){
            return ' ';
        } else { 
           return ''; }
    } 
    
    factor = number.toString().split('').reverse()
    
    if (!factor[1]){return "";}
    
    if (readableNumbers[factor[1] + factor[0]]){
        return `${isSpaceNeed(number)}${readableNumbers[factor[1] + factor[0]]}`
        
    } else if (factor[1] == 0) {
        return "";

    } else {
        return `${isSpaceNeed(number)}${readableNumbers[factor[1] + '0']}`
    }
}

function reNumber(number) {
    
    function isSpaceNeed(number) {        
        if (number > 9){            
            return ' ';
        } else {             
            return ''; }
    }
    
    factor = number.toString().split('').reverse()
    
    if(factor[0] == 0){return ""}
    if((readableNumbers[factor[1] + factor[0]])){
        
        return ""
    } else {
        return `${isSpaceNeed(number)}${readableNumbers[factor[0]]}`
    }
}

const readableNumbers = {
    0  : "zero",
    1  : "one",
    2  : "two",
    3  : "three",
    4  : "four",
    5  : "five",
    6  : "six",
    7  : "seven",
    8  : "eight",
    9  : "nine",
    10 : "ten",
    11 : "eleven",
    12 : "twelve",
    13 : "thirteen",
    14 : "fourteen",
    15 : "fifteen",
    16 : "sixteen",
    17 : "seventeen",
    18 : "eighteen",
    19 : "nineteen",
    20 : "twenty",
    30 : "thirty",
    40 : "forty",
    50 : "fifty",
    60 : "sixty",
    70 : "seventy",
    80 : "eighty",
    90 : "ninety",
    100: "hundred",
}
