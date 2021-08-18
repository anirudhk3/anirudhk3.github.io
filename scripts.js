const form = document.querySelector("form");
statusTxt= form.querySelector(".button-area span");

form.onsubmit = (e)=>{
  e.preventDefault(); //preventing form from submitting
  statusTxt.style.color = "#0D6EFD";
  statusTxt.style.display = "block";
  statusTxt.innerText = "Sending your message...";
  form.classList.add("disabled");

let xhr = new XMLHttpRequest(); //creating new xml object
xhr.open("POST", "message.php", true); //sending post request to message.php file
xhr.onload = ()=> { //once ajax loaded
  if (xhr.readyState == 4 && xhr.status == 200) {// this means if no error
    let response = xhr.response; //storing ajax response
    if(response.indexOf("required") != -1 || response.indexOf("valid") != -1 || response.indexOf("failed") != -1) { //if response is an error like enter valied email address change color to red
    statusTxt.style.color = "red";
}else { 
  form.reset();
  setTimeout(()=>{
    statusTxt.style.display = "none";
},3000);
}
  statusTxt.innerText = response;
  form.classList.remove("disabled");

}
}
let formData = new FormData(); //creating new FormData obj.
xhr.send(formData); //sending form data
}
