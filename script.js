const check= document.getElementById("check-btn");
const input = document.getElementById("user-input");
const clear=document.getElementById("clear-btn");
const result=document.getElementById("results-div");

const regex= /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)(\d{3})([\s-]?)\d{4}$/

check.addEventListener("click",()=>{
  const userInput=input.value.trim();
  if(userInput===""){
    alert("Please provide a phone number")
  }else{
   if(regex.test(userInput)){
     result.style.display="block";
      result.innerHTML=`Valid US number: ${userInput}`
   }else{
     result.style.display="block";
     result.innerHTML=`Invalid US number: ${userInput}`
   };
  }
})

clear.addEventListener("click",()=>{
 result.style.display="none";
 result.innerHTML=""
 input.value=""
})

