var $ = function(id) {
	return document.getElementById(id);
};

window.onload = function() {

	var total = 0.0;
	//add onclick event handler for each image
	document.getElementById('espresso').onclick = function() {espressoOrder()};
	document.getElementById('cappuccino').onclick = function() {cappuccinoOrder()};

	// for click event add item to order and update total
	function espressoOrder(){
		document.getElementById('order').innerHTML += 
			"$1.95 - Espresso - Delicious espresso. Wanna try it?";
		total = total + 1.95;
		document.getElementById('total').innerHTML = "Total: $" + total.toFixed(2);
	}

	function cappuccinoOrder(){ 
		document.getElementById('order').innerHTML +=
			"$3.45 - Cappuccino - Delicious Cappuccino!";
		total = total + 3.45;
		document.getElementById('total').innerHTML = "Total: $" + total.toFixed(2);
	}
}; // end onload