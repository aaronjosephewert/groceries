$(document).ready(function() {
  $("#groceries-form").submit(function(event) {
  
    const items = [
      $("#item1").val(),
      $("#item2").val(),
      $("#item3").val(),
      $("#item4").val()
    ];
    
    items.sort();
    
    let groceries = [];
    
    items.forEach(function(item){
      groceries.push(item.toUpperCase());
    });
    
    groceries.forEach(function(grocery) {
      $("#list").append("<li>" + grocery + "</li>");
    });
    $("#groceries-form").toggle();
    $("#grocery-list").toggle();
    event.preventDefault();
  });
});
