module.exports = function toReadable (number) {
    const strNumList = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    
    if (number < 20) {return strNumList[number]}

    const strTenNumList = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let num = Math.abs(number).toString().split('');
    const lenNum = num.length - 1;  
    let result = [];
    if (number > 99) { result.push(strNumList[num[lenNum - 2]]);
           result.push('hundred');
    };
    if ((number % 100 > 0) && (number % 100 < 20)) {result.push(strNumList[number % 100]);} else {
            if ((number % 100 !== 0)) {result.push(strTenNumList[num[lenNum - 1]])};
            if (num[lenNum] != 0) {result.push(strNumList[num[lenNum]])}};
    return result.join(' ');
}
