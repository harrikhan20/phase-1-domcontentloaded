// Your code goes here

//document.addEventListener("DOMContentLoaded", function() {
   // console.log("This is really cool!");
  // const text = document.getElementById("text")
  // console.log("This is really cool!")
 // });
  
  //console.log('This is really cool!')
  //  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  //; 


  //const p2 = document.querySelector('p');
  //p2.innerHTML.replace("This is really cool!");

  

  document.addEventListener("DOMContentLoaded", function() {
  const ptag = document.querySelector('#text')
  const newtext = "This is really cool!";
  ptag.innerHTML = newtext;
  });
  
  