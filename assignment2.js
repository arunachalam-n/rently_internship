// File_1 
// This file contains the class 
// File name classes

class Student{

    constructor(){
        this.data = [];
    }

    Create(stuName,stuMark){
        this.data.push({
            name:stuName,
            mark:stuMark
        })
    }

    fetchDetails(stuName){

        const _name = stuName
        const findStu = this.data.find(stu => {
            return stu.name === _name
        })

        if (findStu) {
            console.log(`Name : ${findStu.name}, Mark: ${findStu.mark}`);
        } else {
            console.log('Not Found')
        }
    }

    getMarks(){
        console.log(this.data)
    }

    setMarks(stuName,setMar){
        const _name = stuName
        const findStu = this.data.find(stu => {
            return stu.name === _name
        }) 

        findStu.mark = setMar;
    }
}


module.exports = Student;


// File_2
// This File require file named classes

const Student = require("./classes");

const $Student = new Student(); 

$Student.Create("Vibav",55) // Pushes the data into the array

$Student.Create("Vaishnav",20) // Pushes the data into the array

$Student.Create("Loku",100) // Pushes the data into the array

$Student.Create("Arun",70) // Pushes the data into the array

$Student.fetchDetails("Vibav")
// Output

// Name : Vibav, Mark: 55

$Student.fetchDetails("Vaishnav")
// Output

// Name : Vaishnav, Mark: 20

$Student.fetchDetails("Loku")
// Output

// Name : Loku, Mark: 100
$Student.fetchDetails("Arun")
// Output

// Name : Arun, Mark: 70

$Student.fetchDetails("Hello")
// Output

// Not Found


$Student.getMarks()
// Output
/* 

[
  { name: 'Vibav', mark: 55 },
  { name: 'Vaishnav', mark: 20 },
  { name: 'Loku', mark: 100 },
  { name: 'Arun', mark: 70 }
]

*/ 

$Student.setMarks("Vibav",95)

$Student.getMarks()
// Output

/*

[
    { name: 'Vibav', mark: 95 }, // Mark is changed to 95
    { name: 'Vaishnav', mark: 20 },
    { name: 'Loku', mark: 100 },
    { name: 'Arun', mark: 70 }
  ]

*/