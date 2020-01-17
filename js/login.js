var loginDetails = JSON.parse(localStorage.getItem("adminDetails"));
var userLogin = JSON.parse(localStorage.getItem("userDetails"));
var loginSessions = [];
var loginEmail,loginPassword;

checkLoginSession();

document.getElementById("btnLogin").addEventListener("click",function(){
    loginEmail = document.getElementById("loginEmail").value;
    loginPassword = document.getElementById("loginPassword").value;

    if(loginEmail == ""){
        alert("Please enter email");
        return false;
    }
    if(loginPassword == ""){
        alert("Please enter password");
        return false;
    }

    checkLogin();
})


function checkAdmin(){
    for(var i=0;i<loginDetails.length;i++){
        if(loginDetails[i].email == loginEmail){
            if(loginDetails[i].password == loginPassword){
                sessionStorage.setItem("loginUsername",loginEmail);
                location.href = "dashboard.html";
                break;
            }
        }else{
            alert("Incorrect login");
        }
    }
}

function checkLogin(){
    for(var i=0;i<loginDetails.length;i++){
        if(loginDetails[i].email == loginEmail){
            if(loginDetails[i].password == loginPassword){
                sessionStorage.setItem("loginUsername",loginEmail);
                location.href = "dashboard.html";
                break;
            }
        }else{

            if(userLogin[i].email == loginEmail){
                if(userLogin[i].password == loginPassword){
                    sessionStorage.setItem("loginUsername",loginEmail);

                location.href = "subuser.html";
               
                break;
                }
            }else{
                alert("Incorrect Login details");
            }
        }
    }
}


function checkUserLogin(){
    for(var i=0;i<userLogin.length;i++){
        if(userLogin[i].email == loginEmail){
            if(userLogin[i].password == loginPassword){
                
                sessionStorage.setItem("loginUsername",loginEmail);
                sessionStorage.setItem("loginTime",new Date().getTime());
                location.href = "subuser.html";
                return true;
            }else{
                alert("Incorrect Password");
                return false;
            }
        }else{
            alert("Incorrect login details");
            break;
        }
    }
}

document.getElementById("btnRegister").addEventListener("click",function(){
    location.href = "registration.html";
});

function checkLoginSession(){
    if(localStorage.getItem("loginSessions") == null){
        localStorage.setItem("loginSession",JSON.stringify(loginSessions));
        console.log("login sessions created");
    }
}