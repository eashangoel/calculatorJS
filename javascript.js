displayTextDiv= document.querySelector('.displayText');
let displayText="", num1=0, num2=0, operandNumber=1, postOp1DisplayText="", operationType="";
numberButtons = document.querySelectorAll(".numberButton");
function populateDisplay(str){
    let newStr= displayTextDiv.textContent.concat(str);
    displayTextDiv.textContent="";
    displayTextDiv.textContent=newStr;
}
function operate(num1, num2){
    switch(operationType){
        case 'add': displayTextDiv.textContent=num1+num2;
        break;
        case 'subtract': displayTextDiv.textContent=num1-num2;
        break;
        case 'multiply': displayTextDiv.textContent=num1*num2;
        break;
        case 'divide': displayTextDiv.textContent=num1/num2;
        break;
        default: break;
    }
}
numberButtons.forEach(function(element){
        element.addEventListener('click', () =>{
        let displayValue= element.id;
        displayText= displayText+displayValue;
        if (operandNumber==1){
        populateDisplay(displayValue);}
        else if (operandNumber==2){
        populateDisplay(displayValue);
        }
})});
operationButtons = document.querySelectorAll(".operationButton");
operationButtons.forEach(function(element){
    element.addEventListener('click', () =>{
        if (operandNumber==1){
            num1= parseInt(displayText);
            populateDisplay(element.textContent);
            displayText="";
            operandNumber++;
            operationType=element.id;
        }
        else 
        if (element.id=="submit"){
            num2=parseInt(displayText);
            operate(num1, num2);
            displayText="";
        }
        
    })});



    let clearButton= document.querySelector(".clearButton");
    clearButton.addEventListener('click', function(){
        console.log("hi");
        displayTextDiv.textContent="           ";
        displayText="";
        operandNumber=1;
        postOp1DisplayText=0;
        num1=0;
        num2=0;
    });
