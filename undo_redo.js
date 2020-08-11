//orders array for saving the drag and dropped items
var orders = [];
//confirmedOrders for saving orderslist after pressing "order" button
var confirmedOrders = [];
//actions array for saving states for undo redo
var actions = [];
//index for moving between elements in actions array
var index = 0;
//item_stock for handling stock
var item_stock = [];
//database of food and drinks
var foodDatabase = [
        {"id": "item0", "stock": 9, "name": "Apple Pie---------------------------", "price": "30", "type":"dessert", "contains": ["gluten", "nuts"]},
        {"id": "item1", "stock": 9, "name": "Pasta Carbonara---------------------", "price": "45", "type": "starter", "contains": ["milk", "egg"]},
        {"id": "item2", "stock": 9, "name": "Cheeseburger------------------------", "price": "75", "type": "starter", "contains": ["vegan"]},
        {"id": "item3", "stock": 9, "name": "Fish & Chips------------------------", "price": "115", "type": "main", "contains": ["wheat", "egg"]},
        {"id": "item4", "stock": 9, "name": "Pork Chops--------------------------", "price": "65", "type": "main", "contains": ["pork"]},
        {"id": "item5", "stock": 9, "name": "Fried Salmon------------------------", "price": "115", "type": "main", "contains": ["fish", "soy"]},
        {"id": "item6", "stock": 9, "name": "Banana Split------------------------", "price": "30", "type": "dessert", "contains": ["milk", "nuts"]},
        {"id": "item7", "stock": 9, "name": "Heineken Green----------------------", "price": "50", "type": "drink", "alcohol content": "5%"},
        {"id": "item8", "stock": 9, "name": "Guinness III------------------------", "price":"60", "type": "drink", "alcohol content": "8%"},
        {"id": "item9", "stock": 9, "name": "Stallhagen Honungsöl----------------", "price": "75", "type": "drink", "alcohol content": "7%"},
        {"id": "item10", "stock": 9, "name": "Guinness II-------------------------", "price":"40", "type": "drink", "alcohol content": "6%"},
        {"id": "item11", "stock": 9, "name": "French Wine-------------------------", "price":"130", "type": "drink", "alcohol content": "13%", "tannins":"3%"},
        {"id": "item12", "stock": 9, "name": "Australian Wine---------------------", "price":"90", "type": "drink", "alcohol content": "12%", "tannins":"5%"},
        {"id": "item13", "stock": 9, "name": "Balcones Texas----------------------", "price":"899", "type": "WHISKY", "alcohol content": "52.2%"},
        {"id": "item14", "stock": 9, "name": "Rhum J. M---------------------------", "price":"729", "type": "RUM", "alcohol content": "42.6%"},
        {"id": "item15", "stock": 9, "name": "Balcones Brimstone------------------", "price":"899", "type": "WHISKY", "alcohol content": "53.2%"},
        {"id": "item16", "stock": 9, "name": "Linkwood----------------------------", "price":"1159", "type": "WHISKY", "alcohol content": "51.7%"},
        {"id": "item17", "stock": 9, "name": "single cask-------------------------", "price":"529", "type": "RUM", "alcohol content": "47.6%"},
        {"id": "item18", "stock": 9, "name": "Sailor Jerry Spiced Rum-------------", "price":"270", "type": "RUM", "alcohol content": "46%"},
        {"id": "item19", "stock": 9, "name": "Bulleit Bourbon---------------------", "price":"308", "type": "WHISKY", "alcohol content": "45.6%"},
        {"id": "item20", "stock": 9, "name": "Belvedere Vodka---------------------", "price":"320", "type": "VODKA", "alcohol content": "32%"},
        {"id": "item21", "stock": 9, "name": "Grey Goose--------------------------", "price":"240", "type": "VODKA", "alcohol content": "32%"},
        {"id": "item22", "stock": 9, "name": "Chopin Potato-----------------------", "price":"278", "type": "VODKA", "alcohol content": "40%"},
        {"id": "item23", "stock": 9, "name": "La Marca Prosecco-------------------", "price":"159", "type": "WINE", "alcohol content": "32%"},
        {"id": "item24", "stock": 9, "name": "Josh Cellars Cabernet Sauvignon-----", "price":"149", "type": "WINE", "alcohol content": "32%"},
        {"id": "item25", "stock": 9, "name": "Alamos Malbec-----------------------", "price":"109", "type": "WINE", "alcohol content": "32%"},
    ];

//when Undo button is clicked, Add to undo list and remove from orders list
function undo() {
	if (index == 0){
		orders.splice(0,99);
		document.getElementById("allorders").innerHTML = "";
		display();
	}
	else {
		//index moves to the last action in actions array
		orders = actions[index-1].split(',');
		index = index-1;
		makebuttonfromitem();
		display();
	}
	console.log("undo index: " + index + "\r\nactionslength: " + actions.length);
}

function redo(){
	//Error handling
	if (index == actions.length){
		index = index-1;
		alert("no more steps to redo!");
		return;
	}
	//this is for when undoing until an empty list and 
	//redo so the first item appears
	if (index == 0){
		orders = actions[0].split(',');	
		index = index+1;
		makebuttonfromitem();
		display();
		console.log("redo index1: " + index + "\r\nactionslength: " + actions.length);
		return;
	}
	else {
		//adds the last action from actions array to orders array
		orders = actions[index].split(',');	
		if (index < actions.length-1){
			index = index+1;
			console.log("redo index2: " + index + "\r\nactionslength: " + actions.length);
		}
		makebuttonfromitem();
		display();
	}
	console.log("redo index3: " + index + "\r\nactionslength: " + actions.length);
}
