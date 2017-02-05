$("#number1").html("ПРОВЕРКА РАБОТЫ");
$("#output").load("phonebook.json");
$("#number1").append(" и снова проверка");
$.getJSON( "phonebook.json", function( data ) {
    $.each( data, function( index, value ) {
      var items = [];
    items.push(value["id"]+"➤"+value["name"]);
    $("<div/>" , {html:items.join('')}).appendTo("body");
 });
 });
