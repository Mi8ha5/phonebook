document.getElementById("number1").innerHTML = "HELLO";
var xmlhttp = new XMLHttpRequest();
xmlhttp.open('GET', '/static/phonebook.json', false);
xmlhttp.send(null);
if(xmlhttp.status == 200) {
  document.getElementById("output").innerHTML = xmlhttp.responseText;
};
