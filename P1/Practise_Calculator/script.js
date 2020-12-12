//Creating variables
var num1 = 0,
  num2 = 0,
  op = "",
  divNumbers = document.querySelectorAll(".container .box-num"),
  divOpers = document.querySelectorAll(".container .box-opr"),
  resultbox = document.getElementById("sc");
resetbox = document.getElementById("reset");
clearbox = document.getElementById("clear");
//isOprClick to check if an operator is clicked , isEqClick if = is clicked
(isOprClick = false), (isEqClick = false);

//add action to all divs

//clear result box letter by letter

clearbox.onclick = function() {
  resultbox.innerHTML = resultbox.innerHTML.substring(
    0,
    resultbox.innerHTML.length - 1
  );
};

//add action to show numbers

for (var i = 0; i < divNumbers.length; i++) {
  divNumbers[i].onclick = function() {
    if (sc.innerHTML.toString().indexof(".") === -1) {
      //if text = 0 & the div pressed is not '.'
      if (sc.innerHTML === "0" && this.innerHTML !== ".") {
        sc.innerHTML = this.innerHTML;
        isOprClick = false;
      } else {
        sc.innerHTML = sc.innerHTML + this.innerHTML;
        isOprClick = false;
      }
    }
    //check if the text dont contain '.'
    else if (this.innerHTML !== ".") {
      sc.innerHTML = sc.innerHTML + this.innerHTML;
      isOprClick = false;
    }
  };
}

//action to do operations

for (var i = 0; i < divOpers.length; i++) {
  divOpers[i].onclick = function() {
    sc.innerHTML = this.innerHTML;
  };
}

//creating calc function for doing the calculation
function calc(op, n1, n2) {
  var result = 0;
  switch (op) {
    case "+":
      result = n1 + n2;
      break;
    case "-":
      result = n1 - n2;
      break;
    case "x":
      result = n1 * n2;
      break;
    case "/":
      result = n1 / n2;
      break;
  }
  return result;
}

function showMe() {
  var day;
  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  var dis = (document.getElementById("demo").innerHTML = "Today is " + day);
  alert(dis);
}
