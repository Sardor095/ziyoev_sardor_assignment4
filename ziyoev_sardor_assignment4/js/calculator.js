
window.addEventListener("load", init); 

function init() {
    let $ = function (id) {
        return window.document.getElementById(id);
    };

   $("container").addEventListener("click", enter);

   $("equal").addEventListener("click", calculate);

}

function enter(val) {
   result = window.document.getElementById("result");

    result.value += val.target.value;
}

function calculate() {
   result = window.document.getElementById("result");

    result.value = eval(result.value);
}

function c(val){
    result = window.document.getElementById("result").value = "";
}