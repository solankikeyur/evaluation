var adminDetails = [];
var regName,regEmail,regPass,regConPass,regCity,regState;


var Admin = function(name,email,password,city,state){
    this.name = name;
    this.email = email;
    this.password = password;
    this.city = city;
    this.state = state;
};


checkLocal();


document.getElementById("btnRegister").addEventListener("click",function(){

regName = document.getElementById("registerName").value;
regEmail = document.getElementById("registerEmail").value;
regPass = document.getElementById("registerPassword").value;
regConPass = document.getElementById("registerConPassword").value;
regCity = document.getElementById("registerCity").value;
regState = document.getElementById("registerState").value;
if(regName == ""){
    alert("Please Enter name");
    return false;
}
if(regEmail == ""){
    alert("Please Enter Email");
    return false;
}
if(regPass == ""){
    alert("Please Enter Pass");
    return false;
}

if(regCity == "not"){
    alert("please select state");
    return false;
}
if(regState == "not"){
    alert("please select state");
    return false;
}
if(regConPass == ""){
    alert("Please Enter Password again");
    return false;
}else if(regPass == regConPass){
    
}else{
    alert("password didnot matched");
    return false;
}

adminDetails = JSON.parse(localStorage.getItem("adminDetails"));
for(var i =0;i<adminDetails.length;i++){
    if(adminDetails[i].email == regEmail){
        alert("Already Registered");
        location.href = "login.html";
        return false;
    }
    
}

pushDetails();

});


function checkLocal(){
    if(localStorage.getItem("adminDetails") == null){
        localStorage.setItem("adminDetails",JSON.stringify(adminDetails));
        console.log("admin local storage created");
    }else{
        console.log("admin local storage already present");
    }
}

function pushDetails(){
    adminDetails = JSON.parse(localStorage.getItem("adminDetails"));
    adminDetails.push(new Admin(regName,regEmail,regPass,regCity,regState));
    localStorage.setItem("adminDetails",JSON.stringify(adminDetails));
    alert("Registered Successfully");
    window.location.href = "login.html";
}

function checkRegister(){
    adminDetails = JSON.parse(localStorage.getItem("adminDetails"));

    for(var i =0;i<adminDetails.length;i++){
        if(adminDetails[i].email == regEmail){
            alert("Already Registered");
            location.href = "login.html";
            break;
        }else{
           return true;
        }
        
    }
}

