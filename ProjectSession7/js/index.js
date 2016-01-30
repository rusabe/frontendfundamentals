$(document).ready(function(){
    var operators = [];
    var operatorsIndex = 0;
    var result = 0;
    $(".calculatorButtonNumber").click(function(){
        if($("#result").text() == '0' || (operatorsIndex > 0 && (operators[operatorsIndex-1] == '+') || 
                                                                (operators[operatorsIndex-1] == '-') || 
                                                                (operators[operatorsIndex-1] == '/') || 
                                                                (operators[operatorsIndex-1] == '*')|| 
                                                                (operators[operatorsIndex-1] == '=')))
        {
           $("#result").text($(this).text());
        } else {
            $("#result").append($(this).text());
        }
    });

    $(".calculatorButtonOperator").click(function(){
        operators[operatorsIndex] = Number($("#result").text());
        operatorsIndex++;
        operators[operatorsIndex] = $(this).text();
        operatorsIndex++;
    });

    $("#equals").click(function(){
        operators[operatorsIndex] = Number($("#result").text());
        operatorsIndex++;
        for(var i=0; i<operatorsIndex; i++){
            switch(operators[i]){
                case "+":
                    result = result + operators[i+1];
                    i++;
                    break;       
                case "-":
                    result = result - operators[i+1];
                    i++;
                    break;       
                case "/":
                    result = result / operators[i+1];
                    i++;
                    break;       
                case "*":
                    result = result * operators[i+1];
                    i++;
                    break;       
                default:
                    result = operators[i];
                    break;       
            }
        }
        $("#result").text(result);
    });
        
});