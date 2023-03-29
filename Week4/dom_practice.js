function calculator(value) {
  if(value == "C"){
    document.getElementById('result').value = "";
  }
  else{
    document.getElementById('result').value += value;
  }
  
}
function calculate() {
  var result = document.getElementById('result').value;
  document.getElementById('result').value = eval(result);
}