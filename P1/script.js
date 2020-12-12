function calc() {
  var n1 = parseFloat(document.getElementById("n1").value);
  var n2 = parseFloat(document.getElementById("n2").value);
  var oper = document.getElementById("operators").value;

  if (oper === "+") {
    document.getElementById("result").value = n1 + n2;
  }
  if (oper === "-") {
    document.getElementById("result").value = n1 - n2;
  }
  if (oper === "*") {
    document.getElementById("result").value = n1 * n2;
  }
  if (oper === "/") {
    document.getElementById("result").value = n1 / n2;
  }
  if (document.getElementById("n1").value == "") {
    document.getElementById("result").disabled = true;
  } else {
    document.getElementById("result").disabled = false;
  }
}

function add(a,b,callback){
  return callback(a,b)
}

add(1,2,function(a,b){
   return a+b;
})
