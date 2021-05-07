




document.querySelector('#submit').addEventListener('click', Submit_form);
const namee = document.getElementById('name');
const email = document.getElementById('email');
const pswd1 = document.getElementById('pswd1');
const pswd2 = document.getElementById('pswd2');

namee.addEventListener('blur', nameValidation);
email.addEventListener('blur', Email);
pswd1.addEventListener('blur', passValidation);
pswd2.addEventListener('blur', CpassValidation);



function nameValidation(){
  if (namee.value.length != 0){
    
  return(true);
}
  else{
    alert('Invalid name');
  return(false);
}
}

function Email(){

  if (email.value.length != 0)
  {
    return (true);
  }
  else{
    alert('invalid email');
    return (false);
}
}

function passValidation(){
  
  if(pswd1.value.length >= 7){
  return(true);
  }
  else if(pswd1.value.length < 7){
  alert('password too short');
  return(false);
  }
}

function CpassValidation(){

  if(pswd1.value === pswd2.value){
    
  return (true);
  }
  else{
  alert('password does not match');
  return(false);
  }
}

function Submit_form(e){
  if(nameValidation() && Email && passValidation() && CpassValidation() == true){
    alert('Form submission successful');
    location.reload();
  }
  e.preventDefault();
}
