/* 
    This function saves an array of note objects and saves them on localstorage

*/

getNotes()

function saveNotes() { 
    
    let notes = {
        id: Math.floor(Math.random() * 1000000)
    };
    users.push(notes);
    console.log("Added user #" + notes.id);

    // Saving
    localStorage.setItem("notes", JSON.stringify(notes));
}

