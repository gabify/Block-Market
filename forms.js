function openlogin(){
  if(document.getElementById("signup").style.display == "block"){
    document.getElementById("signup").style.display = "none";
  }
  document.getElementById("login").style.display = "block";
}

function opensignup(){
  if(document.getElementById("login").style.display == "block"){
    document.getElementById("login").style.display = "none";
  }
  document.getElementById("signup").style.display = "block";
}

function closeform(){
  document.getElementById("login").style.display = "none";
}

function closeSignUpform(){
  document.getElementById("signup").style.display = "none";
}