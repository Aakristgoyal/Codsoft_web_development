//calculator program
const dis = document.getElementById("display");

function appendtodisplay(input){
    display.value += input;
}

function ALLcleardisplay(){
    display.value = " " ;
}

function calculate(){
    try{
        display.value = eval(display.value) ;
    }
    catch(error){
        display.value = "MathError";
    }
    
}
