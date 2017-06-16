
function Pizza() {
  this.crustSize;
  this.meat;
  this.topping;
  this.cost;
}

Pizza.prototype.totalCost = function() {
  this.cost = this.crustSize += this.meat += this.topping;
  return this.cost;
}


$(document).ready(function() {

  $("form#pizza").submit(function(event) {
    event.preventDefault();

    var newPizza = new Pizza();

    var crustSize = $("#size").val();
    var meat = $("#meat").val();
    var topping = $("#topping").val();
    var cost = newPizza.totalCost();

    $("#price").text(cost);

  });
});
