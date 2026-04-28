function evenodd(num){
    try{
        if (typeof num !== 'number'|| isNaN(num)){
            throw new Error("Invalid input please provide a valid number");
        }
    
    if(num % 2 === 0){
        console.log("Even",num);
    }
    else{
        console.log("Odd",num);
    }
    } catch (error){
           console.error("Error:", error.message);

    }

}

 evenodd(7);
 evenodd(12);
 evenodd(0);
 evenodd("bbb");