//var showjson = document.URL + ".json";


var ready = function() {
  $(function() {

    if(parseInt($(".tquantity").text())>0){

    var n = parseInt($(".tquantity").text());
    $("#bottlespace").empty();

    for(x=0;x<n;x++){
      var name = '<img id="img' + x.toString() + '">';
      var img = $(name);
      img.attr('src', "/bottle.png");
      img.appendTo('#bottlespace');
    }
  }

  });
};


$(document).ready(ready);
$(document).on('page:load', ready);
