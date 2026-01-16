function largestAmong(a,b,c){
    try{
        if(typeof a !=='NaN' && typeof b !=='NaN' && typeof c !=='NaN'){
            throw new Error("Invalid input please")
        }

        if(a>=b && a>=c){
            console.log("Largest is",a);
        }
        else if(b>=a && b>=c){
            console.log("largest is ",b);
        }
        else{
            console.log("Largest is ",c);
        }
    }
    catch(erorr){
        console.error("Error:", erorr.message);
    }
}
largestAmong(3,4,6);
largestAmong(11,1,112);