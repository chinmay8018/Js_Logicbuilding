class Teacher {
     constructor(name,dept,subject,salary){
        this.name =name;
        this.dept =dept;
        this.subject=subject;
        this.salary=salary;
     }

     changeDept(newDept) {
        this.dept = newDept
     }
}

function main(){
    let t1 =  new Teacher("jhon","CSE","javascript",50000);
    console.log("before change:", t1);

    t1.changeDept("IT");
    console.log("After change:",t1);

}
main();