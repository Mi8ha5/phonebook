document.getElementById("number1").innerHTML = "HELLO";
var xmlhttp = new XMLHttpRequest();
xmlhttp.open('GET', '/static/phonebook.json', false);
xmlhttp.send();
 {
  document.getElementById("output").innerHTML = xmlhttp.responseText;
};
