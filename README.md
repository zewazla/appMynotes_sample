# My notes

## Tasks

1. As a user, I want to add multiple notes, so that I can store different information in
each of them.
    - Here is a "Add note" button on the main page.
    - Add event listener to "Add note" button. After user click it, java script copy note template from HTML and user have possibility to enter new title and description. 
Use `addNote(title = "Title", text = "")` function from delivered code.

2. As a user, I want my notes to be available after the browser restart so that I can come back to my notes after restarting the browser.
    - Serialize notes to JSON, based on that we will be able to easly store all notes in one local storage variable.
    - Save string from above point to browser local storage. Use `saveDataToLocalStorage()` function from delivered code.
    - After closing and refreshing the browser, there should be possibility to read all notes 
from local storage - use `loadSavedNotes()` function for that.
    - Assign retrived data to JavaScript `notes` variable. Rember to deserialize it. 
For overwriting notes, use implemented `addNote()` function.

3. Delete public boards
    - There is a delete icon associated with each note.
    - After clicking a delete icon, the associated note should be deleted from local storage and DOM elements.

4. Based on user experience it's proved that creating new elements should be as easy as possible, so there is no need to implement save button.
    - Notes should be saved automatically after edit ends or, when user click anywhere on the screen. 

5. You should know how to implement drag&drop feature as it is commonly used on websites.
    - To make element draggable you must declare it in HTML element which you want to drag.
    - The 'allowDrop' function will prevent default actions of event.
    - While initializing drag event you must set the data that is being dragged during a drag and drop operation.
    - This function will place element on proper position.

6. [OPTIONAL] At the end it's nice to implement additional features. For a better organization let's code sorting for notes.
    - Add button for sorting all notes by title or description.



- <i class="far fa-exclamation"></i> [Mouse events, getting mouse coord](https://kursjs.pl/kurs/events/events-mouse.php)
- <i class="far fa-exclamation"></i> [Drag&Drop](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- <i class="far fa-exclamation"></i> [How to use template element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)
