document.getElementById("welcomeMessage").innerHTML = "Hello" + " " + sessionStorage.getItem("loginUsername");

var loginSessions = [];
var Session = function(name,loginTime,logoutTime){
    this.name = name;
    this.loginTime = loginTime;
    this.logoutTime = logoutTime;
};
document.getElementById("btnLogout").addEventListener("click",function(){
    sessionStorage.removeItem("loginUsername");
    location.href = "login.html";
});