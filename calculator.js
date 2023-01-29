// fuction for inputext Id given in html page
let result = document.getElementById("inputext");

let calculator=(number)=>{
    result.value+=number;

}

// written a function to return result value
let Result=()=>{
    try{
        result.value=eval(result.value) 
    }
    catch(err){
        alert("Enter valid input");
    }
}

// Creted a JS treditional fuction for clear & delete 
function clr(){
    result.value= " ";
}

function del(){
    result.value=result.value.slice(0,-1);
}