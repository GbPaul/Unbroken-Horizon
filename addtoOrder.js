//Undo Redo, copy items between two arrays
//Add to orderslist:
function addtoorders(item) {
    orders.push(item + "\r\n");
	//this is for first undo and then add item, 
	//the rest of the actions in actions array 
	//after index position needs to be reset
	actions.splice(index+1,99);
    //Save current state to undo list, toString() is used
	//because orders[] is a global array.
    actions.push(orders.toString());  
    makebuttonfromitem();
    display();
	index = actions.length-1;
	console.log("addtoorders index: " + index + "\r\nactionslength: " + actions.length);
}

//Make buttons from orders array
//buttons are used for easy layout and uniform styling
//buttons are updated everytime orders array is changed
function makebuttonfromitem() {
    document.getElementById("allorders").innerHTML = "";
    for (i = 0; i < orders.length; i++) {
        //Creates buttons from dragged item
        var btn = document.createElement("button");
		//Gives button class for styling
		btn.setAttribute("class", "ibutton");
        btn.innerHTML = orders[i];
        document.getElementById("allorders").appendChild(btn);
        //Creates x button which is added Id so they can be removed
		//from the orders array individually
        btn = document.createElement("button");
        btn.innerHTML = "x";
		btn.setAttribute("class", "xbutton");
		//gives every close button a unique id "i"
        btn.setAttribute("Id", i);
		//calls xclick for handling the removed item from order
        btn.addEventListener('click', function(){
            xclick(this.id);}, false);
        document.getElementById("allorders").appendChild(btn);
        //Creates a new line
        btn = document.createElement("br");
        document.getElementById("allorders").appendChild(btn);
    }
    //Display total price as a button
    btn = document.createElement("button");
    btn.innerHTML = "\r\nTotal: " + calc_price().reduce(sum) + " SEK";
    btn.setAttribute("class", "button");
	document.getElementById("allorders").appendChild(btn);
}

//Removes item from orders array when x button is clicked
function xclick(xbuttonID) {
    orders.splice(xbuttonID,1);
    makebuttonfromitem();
	//display() updates the view
    display();
	//New state is saved to actions array.
	actions.push(orders.toString());
	//index is used for the undo redo actions array
	if (index < actions.length-1){
		index = actions.length-2;
	}
	index = index+1;
	console.log("undo index: " + index + "\r\nactionslength: " + actions.length);
}

//Orders list, goes trough food array and orders array to find a match
//and get the price from food array and sum it:
//Returns array with prices of ordered items.
function calc_price() {
    var topay = [];
    for (i = 0; i < orders.length; i++) {
        for (j = 0; j < foodDatabase.length; j++) {
            if (orders[i].match(foodDatabase[j].name + " " + foodDatabase[j].price) ) {
                topay.push(parseInt(foodDatabase[j].price));
                break;
            }
        }
    }
    return topay;
}
//For adding all prices using the the reduce() method.
function sum(n1,n2) {
    return n1+n2;
}