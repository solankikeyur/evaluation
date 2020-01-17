document.getElementById("welcomeMessage").innerHTML = "Hello" + " " + sessionStorage.getItem("loginUsername");

var userDetails = [];
var txtUserName, txtUserEmail, txtUserPassword, txtUserDob;


var User = function (txtUserName, txtUserEmail, txtUserPassword, txtUserDob,age) {
    this.name = txtUserName;
    this.email = txtUserEmail;
    this.password = txtUserPassword;
    this.dob = txtUserDob;
    this.age = age;
}


checkLocal();
displayUser();


document.getElementById("btnAddUser").addEventListener("click", function () {
    //var txtUserDob = document.getElementById("txtUserDob").value;
    //var i = txtUserDob.slice(0,4);
    // console.log(i);
    pushLocal();

});

function checkLocal() {
    if (localStorage.getItem("userDetails") == null) {
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
        console.log("local for user created");
    } else {
        console.log("local already present");
    }
}
function pushLocal() {
    txtUserName = document.getElementById("txtUserName").value;
txtUserEmail = document.getElementById("txtUserEmail").value;
txtUserPassword = document.getElementById("txtUserPassword").value;
txtUserDob = document.getElementById("txtUserDob").value;
var date = new Date();
var d = txtUserDob.slice(0,4);
var age = parseInt(date.getFullYear()) - parseInt(d);
    userDetails = JSON.parse(localStorage.getItem("userDetails"));
    userDetails.push(new User(txtUserName, txtUserEmail, txtUserPassword, txtUserDob,age));
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    alert("User added successfully");
    location.reload();
}
function displayUser() {
    userDetails = JSON.parse(localStorage.getItem("userDetails"));
    for (var i = 0; i < userDetails.length; i++) {
        var table, row, nameCol, emailCol, passwordCol, birthdateCol,ageCol,actionCol;
        table = document.getElementById("userTable");
        row = table.insertRow(i + 1);
        nameCol = row.insertCell(0);
        emailCol = row.insertCell(1);
        passwordCol = row.insertCell(2);
        birthdateCol = row.insertCell(3);
        ageCol = row.insertCell(4);
        actionCol = row.insertCell(5);

        var btnEdit = document.createElement("button");
        btnEdit.innerHTML = "Edit";
        btnEdit.id = userDetails[i].email;

        var btnDel = document.createElement("button");
        btnDel.innerHTML = "Delete";
        btnDel.id = userDetails[i].email;
        btnDel.addEventListener("click",deleteUser);
        nameCol.innerHTML = userDetails[i].name;
        emailCol.innerHTML = userDetails[i].email;
        passwordCol.innerHTML = userDetails[i].password;
        birthdateCol.innerHTML = userDetails[i].dob;
        ageCol.innerHTML = userDetails[i].age;
        actionCol.appendChild(btnEdit);
        actionCol.appendChild(btnDel);

    }
}

function deleteUser(){
    alert(this.id);
}

document.getElementById("btnLogout").addEventListener("click",function(){
    sessionStorage.removeItem("loginUsername");
    location.href = "login.html";
});
