const display = document.getElementById("display");
let value = "";
function add(x){
    value += x;
    if(display.innerText == "0"){
        display.innerText = value;
        return;
    }
    display.textContent = value;
    return;
}

function result(){
    const last = (value.length)-1;
    if(value[0] == "/" || value[0] == "*" || value[last] == "+" || value[last] == "-" || value[last] == "/" || value[last] == "*"){
        display.innerText = "Error";
        value = "";
        return;
    }
    const res = eval(value);
    value = res;
    display.innerText = res;
}
function deleteAll(){
    value = "";
    display.innerText = "0";
}
function delete1(){
    value = value.slice(0,-1);
    if(value.length == 0){
        display.innerText = "0";
        return;
    }
    display.textContent = value;
    
}