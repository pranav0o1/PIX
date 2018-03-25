function Validate()
{
 var mail = document.getElementById("email").value;
 var fname = document.getElementById("fname").value;
 var lname = document.getElementById("lname").value;
 var password = document.getElementById("password").value;
 var repass = document.getElementById("repass").value;

//NAME VALIDATION FOR EMPTY AND INVALIDITY
 if(fname == "" || lname == "")
 {
   document.getElementById("req_name").style.fontSize = "12px";
   document.getElementById("req_name").style.visibility = "visible";
 }else {
   if( /^([a-zA-Z ]){2,30}$/.test(fname) && /^([a-zA-Z ]){2,30}$/.test(lname) )
   {
     document.getElementById("req_name").style.visibility = "hidden";
   }else {
     document.getElementById("req_name").innerHTML = "&emsp;Invalid";
     document.getElementById("req_name").style.fontSize = "12px";
     document.getElementById("req_name").style.visibility = "visible";
   }
 }

//EMAIL VALIDATION FOR EMPTY AND INVALIDITY
 if(mail == "")
 {
   document.getElementById("req_email").style.fontSize = "12px";
   document.getElementById("req_email").style.visibility = "visible";
 }else {

   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
   {
     document.getElementById("req_email").style.visibility = "hidden";
   }else {
     document.getElementById("req_email").innerHTML = "&emsp;Invalid";
     document.getElementById("req_email").style.fontSize = "12px";
     document.getElementById("req_email").style.visibility = "visible";
   }
 }

//PASSWORD VALIDATION FOR EMPTY,MATCH,CONDITONS
 if(password == "")
 {
   document.getElementById("req_pass").style.fontSize = "12px";
   document.getElementById("req_pass").style.visibility = "visible";
 }else {
   if(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password))
   {
     document.getElementById("req_pass").style.visibility = "hidden";
   }else{
     document.getElementById("req_pass").innerHTML = "At Least One Number And Special Character";
     document.getElementById("req_pass").style.fontSize = "12px";
     document.getElementById("req_pass").style.visibility = "visible";
   }
 }

//REPASSWORD VALIDATION FOR EMPTY,MATCH,CONDITONS
 if(repass == "")
 {
   document.getElementById("req_repass").style.fontSize = "12px";
   document.getElementById("req_repass").style.visibility = "visible";
 }else {
   if(repass!=password){
     document.getElementById("req_repass").style.fontSize = "12px";
     document.getElementById("req_repass").innerHTML = "&emsp;DOES NOT MATCH";
     document.getElementById("req_repass").style.visibility = "visible";
   }else{
     document.getElementById("req_repass").style.visibility = "hidden";
   }
 }

}
