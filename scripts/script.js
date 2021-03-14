const TITLE_INDEX = 3;
const TEXT_INDEX = 5;

(() => {
    loadSavedNotes();
})();

function addNote(title = "", text = "") {
    const noteTemplate = document.querySelector(".note-template");
    const clone = noteTemplate.cloneNode(true);
    clone.classList.add("new-note");
    clone.classList.remove("note-template");
    document.body.appendChild(clone);

    clone.childNodes[TITLE_INDEX].value = title;
    clone.childNodes[TEXT_INDEX].value = text;
}

function saveDataToLocalStorage() {
    const divNotes = document.querySelectorAll(".new-note");
    const textNotes = [];

    function convertToJsonAndAddToArray(e) {
        let jsonWithOneNote = getTitleAndMessageFromNote(e);
        textNotes.push(jsonWithOneNote)
    }

    divNotes.forEach(convertToJsonAndAddToArray);

    localStorage.setItem("saveToLocalStorage", JSON.stringify(textNotes));

}

function getTitleAndMessageFromNote(divNote) {
    let title = divNote.childNodes[TITLE_INDEX].value;
    let message = divNote.childNodes[TEXT_INDEX].value;
    return {
        "title": title,
        "message": message
    }
}


function loadSavedNotes() {
    const divNotes = document.querySelectorAll(".new-note");

    divNotes.forEach(div => div.remove())

    const notesLS = localStorage.getItem("saveToLocalStorage");
    const textNotes = notesLS ? JSON.parse(notesLS) : [];

    function addNotesWithAttribute(e) {
        addNote(e.title, e.message);
    }

    textNotes.forEach(addNotesWithAttribute);
}