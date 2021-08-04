const form = document.querySelector("form"),
statusTxt= form.querySelector(".button-area span");

form.onsubmit = (e)=>{
  e.preventDefault(); //preventing form from submitting
  statusTxt.style.display = "block";
}
let xhr = new XMLHttpsRequest(); //creating new xml object
xhr.open("POST", "message2.php", true); //sending post request to message.php file
xhr.onload = ()=> { //once ajax loaded
  if (xhr.readyState == 4 && xhr.status == 200) {// this means if no error
    let response = xhr.response; //storing ajax response
    if(response.indexOf("Email and password field is required!") != -1 || response.IndexOf("Email and password field is required!"))
    statusTxt.style.color = "red";
}else { 
  form.reset();
  setTimeout(()=>{
    statusTxt.style.display = "none";
},3000);
}
  statusTxt.innerText = response;
}
}
let formData = new FormData(); //creating new FormData obj.
xhr.send(formData); //sending form data
}
