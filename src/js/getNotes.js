/* 
    This function gets the saved note object and returns an array of objects

*/

function getNotes () {
    
    let getNotes = JSON.parse(localStorage.getItem("notes") || "[]");
        console.log("# of notes: " + getNotes.length);
         users.forEach(function(user, index) {
            console.log("[" + index + "]: " + user.id);
    })
} 