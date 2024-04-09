let result = document.getElementById("result")

function getResult(value){
    if (value==="=") {
        result.value =eval(result.value)
    }else{
        result.value=result.value+value
    }
}

function clearResult(){
    result.value = ""
}