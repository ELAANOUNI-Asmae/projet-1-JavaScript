
const changeColor = document.querySelector(".title");
const userList1 = document.querySelector(".name-list");
const userList2 = document.querySelectorAll(".name-list li");
const addBtn = document.querySelector(".addBtn");
const removeBtn = document.querySelector(".removeBtn");
const listInput = document.querySelector(".list-Input");
var test=0;

changeColor.classList.add("change");

addBtn.addEventListener(`click`,function(){
   for ( user of userList2){
     if( listInput.value.toLowerCase() === user.textContent.toLowerCase())
        test++;
   }
   if(test === 0){
     const newLi = document.createElement("LI");
     const liContent = document.createTextNode(listInput.value);

     newLi.appendChild(liContent);
     userList1.appendChild(newLi);
   }
   else
   listInput.value = "This value is already existed !";
});

removeBtn.addEventListener(`click`,function(){
       
     for(user of userList2){
          if(listInput.value === user.textContent)
               user.remove();
     }
});



