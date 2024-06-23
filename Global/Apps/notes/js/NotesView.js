export default class NotesView {
    constructor(root, { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete } = {}) {
        this.root = root;
        this.onNoteSelect = onNoteSelect;
        this.onNoteAdd = onNoteAdd;
        this.onNoteEdit = onNoteEdit;
        this.onNoteDelete = onNoteDelete;
        this.root.innerHTML = `
            <div class="notes__sidebar" id="notesSidebar">
            <h3>All Notes</h3>
                <div class="notes__list"></div>
            </div>
            <div class="toolbar">
            <button class="navBtn"><span class="material-symbols-outlined">
            menu
            </span></button>
            <div class="hv"></div>
                <button type="button" class="mobBtn" id="notesAdd"><span class="material-symbols-outlined">
                add_circle
                </span> Add Note</button>
                <div class="hv"></div>
                <button type="button" class="mobBtn" id="note-b"><b>B</b></button>
                <button type="button" class="mobBtn" id="note-i"><i>i</i></button>
                <button type="button" class="mobBtn" id="note-u"><u>u</u></button>
            </div>
            <div class="notes__preview" id="notes__preview">
            <input class="notes__title" type="text" placeholder="Enter a title...">
            <textarea class="notes__body"  placeholder="Write your note here...">I am the notes body...</textarea>
            <div id="the-count">
            <p><span id="current">0</span> Characters </p>
            <p >Notes #1</p>  </div>
        </div>
        `;

        const inpTitle = this.root.querySelector(".notes__title");
        let btnAddNoteMob = document.getElementById("notesAdd");
        const inpBody = this.root.querySelector(".notes__body");
        const navBtn = this.root.querySelector(".navBtn");
        const noteitem = this.root.querySelector(".notes__list")
        let B = document.getElementById("note-b");
        let I = document.getElementById("note-i");
        let U = document.getElementById("note-u");

        btnAddNoteMob.addEventListener("click", () => {
            this.onNoteAdd();
        });

        inpBody.onkeyup = function () {
            document.getElementById('current').innerHTML = inpBody.value.length;
        };

        window.onload = function () {
            if (localStorage.getItem("NotesOpenedBefore") === null) {
                document.getElementById("notesAdd").click()
                localStorage.setItem("NotesOpenedBefore", true);
            }
        }

        B.addEventListener("click", () => {
            if(inpBody.style.fontWeight == "bold"){
                inpBody.style.fontWeight = "normal"
            }else{
                inpBody.style.fontWeight = "bold"
            }
        })

        I.addEventListener("click", () => {
            if(inpBody.style.fontStyle == "italic"){
                inpBody.style.fontStyle = "normal"
            }else{
                inpBody.style.fontStyle = "italic"
            }
        })

        U.addEventListener("click", () => {
            if(inpBody.style.textDecoration == "underline"){
                inpBody.style.textDecoration = "none"
            }else{
                inpBody.style.textDecoration = "underline"
            }
        })

        navBtn.addEventListener("click", () => {
            let nav = document.getElementById('notesSidebar')
            if(nav.style.left === '0%'){
                nav.style.pointerEvents = 'none'
                nav.style.left = '-100%'
            }else{
                nav.style.pointerEvents = 'all'
                nav.style.left = '0%'

                noteitem.addEventListener("click", () => {
                    nav.style.left = '-100%'
                    nav.style.pointerEvents = 'none'
                })

            }
        });

        [inpTitle, inpBody].forEach(inputField => {
            inputField.addEventListener("blur", () => {
                const updatedTitle = inpTitle.value.trim();
                const updatedBody = inpBody.value.trim();

                this.onNoteEdit(updatedTitle, updatedBody);
            });
        });

        this.updateNotePreviewVisibility(false);
    }

    _createListItemHTML(id, title, body, updated) {
        const MAX_BODY_LENGTH = 60;

        return `
            <div class="notes__list-item" data-note-id="${id}">
                <div class="notes__small-title">${title}</div>
                <div class="notes__small-body">
                    ${body.substring(0, MAX_BODY_LENGTH)}
                    ${body.length > MAX_BODY_LENGTH ? "..." : ""}
                </div>
                <div class="notes__small-updated">
                    ${updated.toLocaleString(undefined, { dateStyle: "full", timeStyle: "short" })}
                </div>
            </div>
        `;
    }

    updateNoteList(notes) {
        const notesListContainer = this.root.querySelector(".notes__list");

        // Empty list
        notesListContainer.innerHTML = ""     
                
        for (const note of notes) {
            const html = this._createListItemHTML(note.id, note.title, note.body, new Date(note.updated));

            notesListContainer.insertAdjacentHTML("beforeend", html);
        }

        // Add select/delete events for each list item
        notesListContainer.querySelectorAll(".notes__list-item").forEach(noteListItem => {
            noteListItem.addEventListener("click", () => {
                this.onNoteSelect(noteListItem.dataset.noteId);
            });

            noteListItem.addEventListener("contextmenu", () => {
                const doDelete = confirm("Are you sure you want to delete this note?");

                if (doDelete) {
                    this.onNoteDelete(noteListItem.dataset.noteId);
                }
            });
        });
    }

    updateActiveNote(note) {
        this.root.querySelector(".notes__title").value = note.title;
        this.root.querySelector(".notes__body").value = note.body;
        document.getElementById('current').innerHTML = note.body.length;

        this.root.querySelectorAll(".notes__list-item").forEach(noteListItem => {
            noteListItem.classList.remove("notes__list-item--selected");
        });

        this.root.querySelector(`.notes__list-item[data-note-id="${note.id}"]`).classList.add("notes__list-item--selected");
    }

    updateNotePreviewVisibility(visible) {
        this.root.querySelector(".notes__preview").style.visibility = visible ? "visible" : "hidden";
    }
}
