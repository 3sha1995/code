
function showAddMemberForm() {
    var form = document.getElementById("addMemberForm");
    if (form.style.display === "none" || form.style.display === "") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}

function addMember() {
    
    var newName = document.getElementById("newName").value;
    var newEmail = document.getElementById("newEmail").value;
    var newRole = document.getElementById("newRole").value;
    
    
    var tableBody = document.getElementById("teamTableBody");

    
    var newRow = tableBody.insertRow();

    
    var cells = newRow.insertCell();
    cells.textContent = newName;
    cells = newRow.insertCell();
    cells.textContent = newEmail;
    cells = newRow.insertCell();
    cells.textContent = newRole;
    cells = newRow.insertCell();
    cells.innerHTML = '<button class="btn" onclick="editMember(this)">Edit</button>' +
                      '<button class="btn btn-danger" onclick="deleteMember(this)">Delete</button>';

    
    document.getElementById("newName").value = "";
    document.getElementById("newEmail").value = "";
    document.getElementById("newRole").value = "";

    
    showAddMemberForm();
}

function editMember(button) {
    var row = button.parentNode.parentNode;
    var cells = row.getElementsByTagName("td");
    var newName = prompt("Enter new name:", cells[0].innerHTML);
    var newEmail = prompt("Enter new email:", cells[1].innerHTML);
    var newRole = prompt("Enter new role:", cells[2].innerHTML);
    if (newName && newEmail && newRole) {
        cells[0].innerHTML = newName;
        cells[1].innerHTML = newEmail;
        cells[2].innerHTML = newRole;
    }
}

function deleteMember(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("addMemberButton").addEventListener("click", showAddMemberForm);
    document.getElementById("saveMemberButton").addEventListener("click", addMember);
});
