/**
 * Created by LOe on 01/12/15.
 *
 * This is a primary example on how jQuery is used to set up the functionality of the menu part
 * of the interface. It is slightly difficult to read as it is, but the documentation should be
 * to at least some help. Make sure that you understand how the different parts work in this file.
 */

// This function defines the functionality of the menus on the right side of the bar.
//
$(function () {

    // First we hide all menus, but the one with all courses.
    //
    $("#beverage").show();
    $("#drink").hide();
    $("#dessert").hide();
    $("#main").hide();
    $("#starter").hide();

    // Here we define the action when switching between menus. We add the activity as a click-function,
    // which is connected to the respective "tabs". The actual switching is done by
    // showing and hiding the fields.
    //
    // The keyword "slow", in combination with the menu z-order gives a
    // nice effect of physically switching between the different menus.
    //

/*    $("#allorders").click(function () {
        $("#allorders").show("slow");
    });*/

    $("#allfood").click(function () {
        $("#beverage").show("slow");
        $("#drink").hide("slow");
        $("#dessert").hide("slow");
        $("#main").hide("slow");
        $("#starter").hide("slow");
    });

    // Here we show the drinks menu and hide all other menus.
    //
    $("#drinks").click(function () { /* Here we show and hide the field. */
        $("#beverage").hide("slow");
        $("#drink").show("slow");
        $("#dessert").hide("slow");
        $("#main").hide("slow");
        $("#starter").hide("slow");
    });

    // Here we show the desserts menu and hide all other menus.
    //
    $("#desserts").click(function () { /* Here we show and hide the field. */
        $("#beverage").hide("slow");
        $("#drink").hide("slow");
        $("#dessert").show("slow");
        $("#main").hide("slow");
        $("#starter").hide("slow");
    });

    // Here we show the main course menu and hide all other menus.
    //
    $("#mains").click(function () { /* Here we show and hide the field. */
        $("#beverage").hide("slow");
        $("#drink").hide("slow");
        $("#dessert").hide("slow");
        $("#main").show("slow");
        $("#starter").hide("slow");
    });

    // Here we show the starters menu and hide all other menus.
    //
    $("#starters").click(function () {
        $("#beverage").hide("slow");
        $("#drink").hide("slow");
        $("#dessert").hide("slow");
        $("#main").hide("slow");
        $("#starter").show("slow");
    });
    
    // Here we put the different kinds of food into the respective menus.
    $(getbeverage(getFoodData())).appendTo("#beverage");
    $(getFoods("starter", getFoodData())).appendTo("#starter");
    $(getFoods("main", getFoodData())).appendTo("#main");
    $(getFoods("dessert", getFoodData())).appendTo("#dessert");
    $(getFoods("drink", getFoodData())).appendTo("#drink");

});

// The menu listing all the available food at the restaurant is collected separately, by
// going through all the different kinds, and request the list for it. It also adds the separation
// between the lists, with its proper Headings.
//
function getbeverage(arr) {

    // Collection variable
    //
    var temp = "";

    // One array contains the type descriptors, one the proper names to be entered in the menu listing.
    //
    var types = ["WHISKY", "RUM", "VODKA", "WINE"];
    var names = ["Whisky","Rum", "Vodka", "Wine"];

    len = types.length;

    for (var i = 0; i < len; i++) {

        // For each type, the proper name and a horisontal ruler is added to the output.
        //
        temp += '<strong>' + names[i] + '</strong><br><hr>';

        // and then the resulting list for the type.
        //
        temp += getFoods(types[i], arr) +"<br>";

    }
    return temp;
}

// ===================================================================================================================
// The function returns all food strings (created as divs) of a certain type (given as argument).
//
function getFoods(type, arr) {

    // The collection variable
    //
    var out = "";

    // Go through the array and collect all the items of the desired type.
    //
    for (var i = 0; i < arr.length; i++) {

        // if the item is of the desired type, then we add the HTML string to the collection variable.
        // Otherwise we skip to the next item.
        //
        if (arr[i].type == type) {
            out += '<div id="' + "menuitem" + i + '" draggable="true" ondragstart="drag(event)">'
                + arr[i].name + ' <span class="price">'+ arr[i].price + '</span></div>';
        }
    }
    // Once we are finished we return the resulting HTML string containing all the menu items for the desired menu.
    //
    return out;
}

// ===================================================================================================================
// This function returns an array, which can be read as a JSON object. This means that it is easy to
// add new elements, and that the data is easy to access, and also update if needed.
//
//
function getFoodData() {
    return [
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
    ]
}
// ===================================================================================================================
// END OF FILE
// ===================================================================================================================
