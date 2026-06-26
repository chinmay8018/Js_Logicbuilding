const person = {
   name:"Chinmay",

   greet:function () {
    console.log(this.name);
   }
};

person.greet();


const person1 ={
     name: "chinu",

     great1:function(){
        setTimeout(function(){
            console.log(this.name);

        },1000);
     }
};

person1.great1();