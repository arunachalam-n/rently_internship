// 1 . Date => WeekDay

function $day(date) {
    const days = ['Sunday','Monday','Tuesday','Wednesday',
                    'Thursday','Friday','Saturday']
    return days[date.getDay()];
}

let date = new Date(2021,6,17)
console.log($day(date));

// 2. Splice 

const testArr = ['Hello', 'Are', 'Fine', '?']
// Add 
testArr.splice(2,0,'You')
console.log(testArr)

// Remove and Replace
const testArr_ = ['Hello', 'Are', 'You', 'Fine', '?']
testArr_.splice(3,2,'OK','!','!','!')
console.log(testArr_)

// 3. DataTypes

a = []
num = 1000
str = 'Meow'
obj = {College:'KCT',Dept:'EEE'}
date = new Date(2021,06,16)
a.push(num,str,obj,date)

console.log(a)

// 4. Replace 

str = 'Hello Hello Hello Excuse me , yeah you!!'
console.log(str.replace(/hello/gi,'Hi'))

// 5. 

