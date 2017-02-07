$("#number1").html("ПРОВЕРКА РАБОТЫ");
// $("#output").load("phonebook.json");
$("#number1").append(" и снова проверка");
$.getJSON( "phonebook.json", function(data) {
  data.forEach(function (item) {
    $("<div/>" , {id: item.id, html:item.id+"➤"+item.name}).appendTo("body");
    $("<input/>", {id:item.id+item.name, type:'text', val:item.phone}).appendTo('#'+item.id);
    //$("#"+item.id+item.name).val(item.phone);
    $("<button></button>", {id:"b"+item.id, text:'СОХРАНИТЬ'}).appendTo('#'+item.id);
    //$('#'+'b'+item.id).text('СОХРАНИТЬ');
    $('#'+'b'+item.id).click(function (){
      var phbook = {
        "id" : item.id,
        "phone" : $('#'+item.id+item.name).val(),
      };
      alert($('#'+item.id+item.name).val());
      $.ajax({
        url: 'update.json',
        type: 'POST',
        data: 'pbook=' + JSON.stringify(phbook),
      success: function(res){
        alert(res);
      }
    });
    });
  });
 });
