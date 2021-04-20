$(function () {
  $("#myForm").submit(handleFormSubmit);
});


function handleFormSubmit(e) {
  alert("Form is being submitted");

  e.preventDefault();
}

function Name(){
console.log("Name");
  var Name = document.getElementById('name');
  if (Name == ""){
    alert("Please enter your name")
  return(false)}
  else{
  return(true)}
}

function Email(){
  console.log("Email");
  var em = document.getElementById('email');
  var form = document.getElementById('myForm');
  var mail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (mail.test(form.em))
  {
    return (true)
  }
  else{
    alert("You have entered an invalid email address!")
    return (false)
}
}

function passValidation(){
  console.log("Password");
  var pass = document.getElementById('pswd1');
  if(pass.length >= 7){
  return(true)
  }
  else if(pass.length < 7){
  alert("password too short, minimum 8 characters required")
  return(false)
  }
}

function CpassValidation(){

  console.log("Confirm Password");
  
  var pass = document.getElementById('pswd1');
  var Cpass = document.getElementById('pswd2');
  if(pass == Cpass){
    alert("Password created successfuly")
  return (true)
  }
  else if(pass != pass){
  alert("Password does not match")
  return(false)
  }
}


window.onload = Name;
window.onload = Email;
//window.onload = passValidation;
//window.onload = CpassValidation;