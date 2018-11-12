var array = Array.from({length: getN()+1}, () => Math.floor(Math.random() * getN()));

console.log(findDuplicates(array));

function findDuplicates(array) {
    var numbers = {};
    var duplicates = [];

    array.forEach(number => {
      if(!numbers[number])
          numbers[number] = 0;
        numbers[number] += 1;
    })
    
    for (const number in numbers) {
       if(numbers[number] >= 2) {
           duplicates.push(number);
       }
    }

    return duplicates;
}

function getN() {
    if (process.argv.length <= 2) {
        n = 1000000
    } else {
        n = parseInt(process.argv.slice(2));
    }
    
    return n;
}