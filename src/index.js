module.exports = function toReadable (number) {
  let ones = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'one hundred']

  if (number < 20) {
    return ones[number];
      } else if ((number >= 20 && number < 100) && number.toString().endsWith('0')) {
          return tens[number / 10];
            } else if (number >= 100) {
                if (number % 100 === 0) {
                    return ones[number / 100] + ' hundred';
                } else if ((number % 100 >= 1) && (number % 100 < 20)) {
                    return ones[Math.floor(number/100)] + ' hundred ' + ones[number % 100];
                } else if (((number % 100 >= 20) && (number % 100 < 100)) && (number.toString().endsWith('0'))) {
                    return ones[Math.floor(number/100)] + ' hundred ' + tens[(number % 100)/10];
                } else {
                    return ones[Math.floor(number/100)] + ' hundred ' + tens[Math.floor((number % 100)/10)] + " " + ones[(number % 100)%10];
                }
                
            } else {
              return tens[Math.floor(number/10)] + ' ' + ones[number % 10];
                }
    }
