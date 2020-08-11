//updates the view
function display () {
    if (orders.length > 0 && actions.length > 0) {
        document.getElementById('displayorders').value =
            orders.toString().replace(/,/g, "")
            + "Total: " + calc_price().reduce(sum) + " SEK";
        document.getElementById('displayactions').value = actions;
		document.getElementById('displaybartender').value = 
			"Table X, Order:\r\n" + confirmedOrders.toString().replace(/,/g, "") 
			+ "Stock:\r\n" + item_stock.toString().replace(/,/g, "");
		
    } else {
        document.getElementById('displayorders').value = orders;
        document.getElementById('displayactions').value = actions;
		document.getElementById('displaybartender').value = 
			"Table X, Order:\r\n" + confirmedOrders.toString().replace(/,/g, "") 
			+ orders + "\r\nStock:\r\n" + item_stock.toString().replace(/,/g, "");	

    }
}