console.log("Welcome to Add Notes App");

const noteTxt = document.getElementById("addTxt");
const addButton = document.getElementById("addBtn");
const parentList = document.getElementById("notes");
let i = 1;

addButton.addEventListener("click", showNotes);

//Appent New Notes Card
function showNotes() {
    if (parentList.children[0].className == "emptyMsg") {
        parentList.children[0].remove();
    }

    let inputData = noteTxt.value;

    let newDiv = document.createElement("div");
    newDiv.className = "card mx-2 my-2";
    newDiv.style.width = "18rem";
    newDiv.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">Note ${i}</h5>
                <p class="card-text">${inputData}</p>
                <button class="btn btn-primary" id="deleteBtn" onclick="removeNote(this)">Remove Note</button>
            </div>`;

    parentList.appendChild(newDiv);
    i++;
}

//Remover Card Function
function removeNote(currElement) {
    let noteparent = currElement.parentElement;
    noteparent.parentElement.remove();

    if (parentList.children.length <= 0) {
        let newEmptyMsg = document.createElement("div");
        newEmptyMsg.className = "emptyMsg";
        
        newEmptyMsg.innerHTML = '<h3> Nothingto show! Use "Add note" section above to add Notes</h3>';

        parentList.appendChild(newEmptyMsg);
    }
}

// Search Button Function
const search = document.getElementById('searchTxt');
searchBtn.addEventListener('click', personlisedNote);

function personlisedNote() {
    let searchTxt = search.value.toLowerCase();

    const cardNote = document.getElementsByClassName('card mx-2 my-2');
    Array.from(cardNote).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;

        if (cardTxt.includes(searchTxt)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
}