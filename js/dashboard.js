document.getElementById("welcomeMessage").innerHTML = "Hello"+" "+sessionStorage.getItem("loginUsername");
var lessThanEighteen = 0;
var btwnEf=0;
var grtF=0;
loginUsers = JSON.parse(localStorage.getItem("userDetails"));

for(var i=0;i<loginUsers.length;i++){
    if(loginUsers[i].age < 18){
        lessThanEighteen =parseInt(lessThanEighteen)+ 1;
    }else if(loginUsers[i].age>=18 && loginUsers[i].age<=50){
        btwnEf = btwnEf + 1;
    }else if(loginUsers[i].age > 50){
        grtF = grtF + 1;
    }
}
console.log(lessThanEighteen);
document.getElementById("lessThanEighteen").textContent = lessThanEighteen;
document.getElementById("btwnEf").innerHTML = btwnEf;
document.getElementById("grtF").innerHTML = grtF;


document.getElementById("btnLogout").addEventListener("click",function(){
    sessionStorage.removeItem("loginUsername");
    location.href = "login.html";
});





