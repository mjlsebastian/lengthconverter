var input = document.getElementById("input");
var result = document.getElementById("result");
var inputType = document.getElementById("inputType");
var resultType = document.getElementById("resultType");
var inputTypeValue, resultTypeValue;

input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

function myResult(){

    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    // measure of meter 
    
    if(inputTypeValue === "meter" && resultTypeValue==="centimeter"){
        result.value = Number(input.value) * 100;
    
    }else if(inputTypeValue === "meter" && resultTypeValue==="kilometer"){
        result.value = Number(input.value) * 0.001;

    }else if(inputTypeValue === "meter" && resultTypeValue==="millimeter"){
        result.value = Number(input.value) * 1000;

    }else if(inputTypeValue === "meter" && resultTypeValue==="inches"){
        result.value = Number(input.value) * 39.3700;

    }else if(inputTypeValue === "meter" && resultTypeValue==="yard"){
        result.value = Number(input.value) * 1.09361;

    }else if(inputTypeValue === "meter" && resultTypeValue==="feet"){
        result.value = Number(input.value) * 3.280839895;

    }else if(inputTypeValue === "meter" && resultTypeValue==="miles"){
        result.value = Number(input.value) * 0.0006213712;

    }else if(inputTypeValue === "meter" && resultTypeValue==="meter"){
        result.value = input.value

    }

    // measure of centimeter

    if(inputTypeValue === "centimeter" && resultTypeValue==="meter"){
        result.value = Number(input.value) * 0.01;
    
    }else if(inputTypeValue === "centimeter" && resultTypeValue==="kilometer"){
        result.value = Number(input.value) * 0.00001;
      
    }else if(inputTypeValue === "centimeter" && resultTypeValue==="millimeter"){
        result.value = Number(input.value) * 10;
        
    }else if(inputTypeValue === "centimeter" && resultTypeValue==="inches"){
        result.value = Number(input.value) * 0.3937007874;

    }else if(inputTypeValue === "centimeter" && resultTypeValue==="yard"){
        result.value = Number(input.value) * 0.010936133;

    }else if(inputTypeValue === "centimeter" && resultTypeValue==="feet"){
        result.value = Number(input.value) * 0.032808399;

    }else if(inputTypeValue === "centimeter" && resultTypeValue==="miles"){
        result.value = Number(input.value) * 0.000062137;

    }else if(inputTypeValue === "centimeter" && resultTypeValue==="centimeter"){
        result.value = input.value

    }

    // measure of kilometer

    if(inputTypeValue === "kilometer" && resultTypeValue==="meter"){
        result.value = Number(input.value) * 1000;
    
    }else if(inputTypeValue === "kilometer" && resultTypeValue==="centimeter"){
        result.value = Number(input.value) * 100000;

    }else if(inputTypeValue === "kilometer" && resultTypeValue==="millimeter"){
        result.value = Number(input.value) * 1000000;

    }else if(inputTypeValue === "kilometer" && resultTypeValue==="inches"){
        result.value = Number(input.value) * 39370.07874;

    }else if(inputTypeValue === "kilometer" && resultTypeValue==="yard"){
        result.value = Number(input.value) * 1093.6132983;

    }else if(inputTypeValue === "kilometer" && resultTypeValue==="feet"){
        result.value = Number(input.value) * 3280.839895;

    }else if(inputTypeValue === "kilometer" && resultTypeValue==="miles"){
        result.value = Number(input.value) * 0.6213711922;

    }else if(inputTypeValue === "kilometer" && resultTypeValue==="kilometer"){
        result.value = input.value
        
    }

    // measure of millimeter

    if(inputTypeValue === "millimeter" && resultTypeValue==="meter"){
        result.value = Number(input.value) * 0.001;
    
    }else if(inputTypeValue === "millimeter" && resultTypeValue==="centimeter"){
        result.value = Number(input.value) * 0.1;

    }else if(inputTypeValue === "millimeter" && resultTypeValue==="kilometer"){
        result.value = Number(input.value) * 0.000001;

    }else if(inputTypeValue === "millimeter" && resultTypeValue==="inches"){
        result.value = Number(input.value) * 0.0393700787;

    }else if(inputTypeValue === "millimeter" && resultTypeValue==="yard"){
        result.value = Number(input.value) * 0.0010936133;

    }else if(inputTypeValue === "millimeter" && resultTypeValue==="feet"){
        result.value = Number(input.value) * 0.0032808399;

    }else if(inputTypeValue === "millimeter" && resultTypeValue==="miles"){
        result.value = Number(input.value) * 6.21371e-7;

    }else if(inputTypeValue === "millimeter" && resultTypeValue==="millimeter"){
        result.value = input.value
        
    }

    // measure of inches

    if(inputTypeValue === "inches" && resultTypeValue==="meter"){
        result.value = Number(input.value) * 0.0254;
    
    }else if(inputTypeValue === "inches" && resultTypeValue==="centimeter"){
        result.value = Number(input.value) * 2.54;

    }else if(inputTypeValue === "inches" && resultTypeValue==="kilometer"){
        result.value = Number(input.value) * 0.0000254;

    }else if(inputTypeValue === "inches" && resultTypeValue==="millimeter"){
        result.value = Number(input.value) * 25.4;

    }else if(inputTypeValue === "inches" && resultTypeValue==="yard"){
        result.value = Number(input.value) * 0.0277777778;

    }else if(inputTypeValue === "inches" && resultTypeValue==="feet"){
        result.value = Number(input.value) * 0.0833333333;

    }else if(inputTypeValue === "inches" && resultTypeValue==="miles"){
        result.value = Number(input.value) * 0.0000157828;

    }else if(inputTypeValue === "inches" && resultTypeValue==="inches"){
        result.value = input.value
        
    }

    // measure of yard
    
    if(inputTypeValue === "yard" && resultTypeValue==="meter"){
        result.value = Number(input.value) * 0.9144;
    
    }else if(inputTypeValue === "yard" && resultTypeValue==="centimeter"){
        result.value = Number(input.value) * 91.44;

    }else if(inputTypeValue === "yard" && resultTypeValue==="kilometer"){
        result.value = Number(input.value) * 0.0009144;

    }else if(inputTypeValue === "yard" && resultTypeValue==="millimeter"){
        result.value = Number(input.value) * 914.4;

    }else if(inputTypeValue === "yard" && resultTypeValue==="inches"){
        result.value = Number(input.value) * 36;

    }else if(inputTypeValue === "yard" && resultTypeValue==="feet"){
        result.value = Number(input.value) * 3;

    }else if(inputTypeValue === "yard" && resultTypeValue==="miles"){
        result.value = Number(input.value) * 0.000568182;

    }else if(inputTypeValue === "yard" && resultTypeValue==="yard"){
        result.value = input.value
        
    }

    // measure of feet
    
    if(inputTypeValue === "feet" && resultTypeValue==="meter"){
        result.value = Number(input.value) * 0.304800097536;
    
    }else if(inputTypeValue === "feet" && resultTypeValue==="centimeter"){
        result.value = Number(input.value) * 30.480009753600;

    }else if(inputTypeValue === "feet" && resultTypeValue==="kilometer"){
        result.value = Number(input.value) * 0.0003048000975360;

    }else if(inputTypeValue === "feet" && resultTypeValue==="millimeter"){
        result.value = Number(input.value) * 304.8000975360;

    }else if(inputTypeValue === "feet" && resultTypeValue==="inches"){
        result.value = Number(input.value) * 12.0000038400;

    }else if(inputTypeValue === "feet" && resultTypeValue==="yard"){
        result.value = Number(input.value) * 0.3333334400;

    }else if(inputTypeValue === "feet" && resultTypeValue==="miles"){
        result.value = Number(input.value) * 0.0001893940;

    }else if(inputTypeValue === "feet" && resultTypeValue==="feet"){
        result.value = input.value
        
    }

    // measure of miles

    if(inputTypeValue === "miles" && resultTypeValue==="meter"){
        result.value = Number(input.value) * 1609.3445149900801425;
    
    }else if(inputTypeValue === "miles" && resultTypeValue==="centimeter"){
        result.value = Number(input.value) * 160934.45149900802062;

    }else if(inputTypeValue === "miles" && resultTypeValue==="kilometer"){
        result.value = Number(input.value) * 1.6093445149900802438;

    }else if(inputTypeValue === "miles" && resultTypeValue==="millimeter"){
        result.value = Number(input.value) * 1609344.514990080148;

    }else if(inputTypeValue === "miles" && resultTypeValue==="inches"){
        result.value = Number(input.value) * 63360.020275200011383;

    }else if(inputTypeValue === "miles" && resultTypeValue==="yard"){
        result.value = Number(input.value) * 1760.0005632000002151;

    }else if(inputTypeValue === "miles" && resultTypeValue==="feet"){
        result.value = Number(input.value) * 5280.0016896000006454;

    }else if(inputTypeValue === "miles" && resultTypeValue==="miles"){
        result.value = input.value
        
    }
}