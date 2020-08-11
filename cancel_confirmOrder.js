//clear all arrays and fields and reset index
function cancel() {
    orders.splice(0,99);
	actions.splice(0,99);
	index = 0;
    document.getElementById('displayorders').value = "";
    document.getElementById('displayactions').value = "";
    //document.getElementById('displaybartender').value = "";
	document.getElementById("allorders").innerHTML = "";
}

//find the right item in foodDatabase by matching name and price
//and edit the stock when clicking on Order button
function confirmOrder() {
	confirmedOrders = orders;
	//removes matching items from stock
    for (i = 0; i < orders.length; i++) {
        for (j = 0; j < foodDatabase.length; j++) {
            if (orders[i].match(foodDatabase[j].name + " " + foodDatabase[j].price) ) {
                foodDatabase[j].stock = foodDatabase[j].stock - 1;
				break;
            }
        }
    }
/* 	for (k = 0; k < foodDatabase.length; k++) {
		item_stock[k] = foodDatabase[k].name + "| " + foodDatabase[k].price 
		+ " | In stock: " + foodDatabase[k].stock +"\r\n";
	} */
	alert("Your order is being prepared:\r\n\r\n" + orders.toString().replace(/,/g, "") + "\r\nTotal: " + calc_price().reduce(sum) + " SEK");
	cancel();
	display();
}
//displays the stock
//Stock will reset after each page refresh
function seeStock() {
/* 	confirmedOrders = orders;
    for (i = 0; i < orders.length; i++) {
        for (j = 0; j < foodDatabase.length; j++) {
            if (orders[i].match(foodDatabase[j].name + " " + foodDatabase[j].price) ) {
                foodDatabase[j].stock = foodDatabase[j].stock - 1;
				break;
            }
        }
    } */
	//Displays the stock as alert msg
	for (k = 0; k < foodDatabase.length; k++) {
		item_stock[k] = foodDatabase[k].name + "| " + foodDatabase[k].price 
		+ " SEK \r\nIn stock: " + foodDatabase[k].stock + "\r\n";
	}
	alert("Unbroken Horizon Warehouse:\r\n" + item_stock.toString().replace(/,/g, ""));
	display();
}