//Filters all organic beverages
function allOrganicBeverages() {

    // Using a local variable to collect the items.
    //
    var collector = [];

    // The DB is stored in the variable DB2, with "spirits" as key element. If you need to select only certain
    // items, you may introduce filter functions in the loop... see the template within comments.
    //
    for (i = 0; i < DB2.spirits.length; i++) {

        // We check if the percentage alcohol strength stored in the data base is lower than the
        // given limit strength. If the limit is set to 14, also liqueuers are listed.
        //
        if (DB2.spirits[i].ekologisk > 0) {

            // The key for the beverage name is "namn", and beverage type is "varugrupp".
            //
            collector.push([DB2.spirits[i].namn, DB2.spirits[i].varugrupp]);
        };
    };

    // Don't forget to return the result.
    //
    return collector;
}

//This is for passing the input info to userLogin() and displaying an alertmessage as feedback.
function validateinput() {
    var nameinput = document.getElementById('inputname').value;
    var passinput = document.getElementById('inputpass').value;
    var alertmessage = userLogin(nameinput, passinput);
    alert(alertmessage);
}
//This is for checking if the username and password match the database.
function userLogin(userName, passWord) {
    var userIndex;
    var userIndex2;
    var alertmsg;

    // First we find the user ID of the selected user. We also save the index number for the record in the JSON
    // structure.
    //
    for (i = 0; i < DB.users.length; i++) {
        if (DB.users[i].username == userName) {
            userIndex = i;
            break;
        }
        userIndex2 = i;
    }
    //if the for loop searches the whole array and found none matching usernames:
    if ( (DB.users.length - 1)  == userIndex2) {
        alert( "Username not found!" );
    }
    if (DB.users[userIndex].password != passWord) {
        alertmsg = "Password Incorrect!";
    }
    if (DB.users[userIndex].username == userName && DB.users[userIndex].password == passWord) {
        //alertmsg = "Welcome VIP!";
        window.location.href="Home.html";
    }
    return alertmsg;
}