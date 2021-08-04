window.addEventListener('scroll',function() {
  const logoImage = document.querySelector('.logo img');
  const mainNav = document.getElementById("mainNav");
  
  if(window.pageYOffset > 100){
   logoImage.style.height = "64px";
   mainNav.classList.add('bg-black');
   mainNav.classList.add('txt-white');
 
}
  else {
   logoImage.style.height = "84px";
   mainNav.classList.remove('bg-black');
   mainNav.classList.remove('txt-white');
}
});

const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navUL = document.querySelector(".nav-ul");
//When someone clicks on hamburger we want to display the menu
hamburger.addEventListener("click",() => {
 navUL.classList.toggle("show");
 hamburger.classList.toggle("hide");
 
});

close.addEventListener("click",() => {
  navUL.classList.toggle("show");
  hamburger.classList.toggle("hide");
});
const modal = document.querySelector(".modal");
const btn = document.querySelector(".search");
const closeModal = document.querySelector(".close-modal");

btn.addEventListener("click", openPopup);
btn.addEventListener("clock", closePopup);

function openPopup() {
 modal.style.display = "block";
}

function closePopup() {
  modal.style.display = "none";
}

//getting all required elements for search bar
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");

//if user press any key and release
inputBox.onkeyup = (e) => {
   let userData = e.target.value; //user entered data
   let emptyArray = [];
   if(userData) { 
     emptyArray = suggestsions.filter((data)=>{
        //filter array value and use char to lowercase and return only the word or sentence which starts
        return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
     });
        emptyArray = emptyArray.map(()=> {
         return data = '<li> + + '</li>';
       });
      console.log(emptyArray);
      searchWrapper.classList.add("active");
      showSuggestions(emptyArray);
      let allList = suggBoxquerySelectorAll("li");
      for (let i = 0; i < allList.length; i++) {
          //add onclick attribute in all li tag
          allList[i].setAttribute("onclick","select(this)");
   }
}else{
  searchWrapper.classList.remove("active");
}
}

function select(element) { 
   let selectUserData = element.textContent;
   inputBox.value = selectUserData; //passing user selected list item data in textfield
   searchWrapper.classList.remove("active"); //hide autocomplete box
}

function showSuggestions(list){
   let listData;
     if(!list.length) {
       userValue = inputBox.value;
       listData = '<li>' + userValue + '</li>';
} else {
   listData = list.join('');
}
  suggBox.innerHTML = listData;
}