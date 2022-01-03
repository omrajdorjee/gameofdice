
function myFunction(){

  var randomNumDone = Math.random();
  var randomNum = (Math.floor(randomNumDone * 6)) + 1;
  var randomCom = Math.floor((Math.random() * 4) + 1)
  var randomNumDtwo = Math.random();
  var randomNumD2 = (Math.floor(randomNumDone * 3)) + randomCom;
   
  if( randomNum > randomNumD2 ){
        document.getElementById("results").textContent="Player BLUE Wins";
//         document.getElementById("results").style.color="#064635";
  } 
  else if ( randomNum < randomNumD2 ){
         document.getElementById("results").textContent="Player RED Wins";
//          document.getElementById("results").style.color="#EC255A";
  }
  else {
         document.getElementById("results").textContent="DRAW";
//          document.getElementById("results").style.color="#000B49";
  }

if (randomNum === 1) {
       document.getElementById("comOne").classList.add("toggle");
       document.getElementById("comTwo").classList.add("toggle");
       document.getElementById("comThree").classList.add("toggle");
       document.getElementById("comFour").classList.add("toggle");
       document.getElementById("comFive").classList.add("toggle");
       document.getElementById("comSix").classList.add("toggle");
       document.getElementById("comMid").classList.add("toggleMid");
}
if (randomNum === 2) {
       document.getElementById("comOne").classList.add("toggle");
       document.getElementById("comTwo").classList.add("toggle");
       document.getElementById("comThree").classList.remove("toggle");
       document.getElementById("comFour").classList.remove("toggle");
       document.getElementById("comFive").classList.add("toggle");
       document.getElementById("comSix").classList.add("toggle");
       document.getElementById("comMid").classList.remove("toggleMid");
}
if (randomNum === 3) {
         document.getElementById("comOne").classList.add("toggle");
         document.getElementById("comTwo").classList.add("toggle");
         document.getElementById("comThree").classList.remove("toggle");
         document.getElementById("comFour").classList.remove("toggle");
         document.getElementById("comFive").classList.add("toggle");
         document.getElementById("comSix").classList.add("toggle");
         document.getElementById("comMid").classList.add("toggleMid");
}

if (randomNum === 4) {
        document.getElementById("comOne").classList.remove("toggle");
        document.getElementById("comTwo").classList.add("toggle");
        document.getElementById("comThree").classList.remove("toggle");
        document.getElementById("comFour").classList.remove("toggle");
        document.getElementById("comFive").classList.add("toggle");
        document.getElementById("comSix").classList.remove("toggle");
        document.getElementById("comMid").classList.remove("toggleMid");
}

if (randomNum === 5) {
       document.getElementById("comOne").classList.remove("toggle");
       document.getElementById("comTwo").classList.add("toggle");
       document.getElementById("comThree").classList.remove("toggle");
       document.getElementById("comFour").classList.remove("toggle");
       document.getElementById("comFive").classList.add("toggle");
       document.getElementById("comSix").classList.remove("toggle");
       document.getElementById("comMid").classList.add("toggleMid");

}
       
if (randomNum === 6) {
      document.getElementById("comOne").classList.remove("toggle");
      document.getElementById("comTwo").classList.remove("toggle");
      document.getElementById("comThree").classList.remove("toggle");
      document.getElementById("comFour").classList.remove("toggle");
      document.getElementById("comFive").classList.remove("toggle");
      document.getElementById("comSix").classList.remove("toggle");
      document.getElementById("comMid").classList.remove("toggleMid");
}

/* ========================================== */
/* ==========// DICE 2 // ================== */

if (randomNumD2 === 1) {
      document.getElementById("dc1").classList.add("toggle");
      document.getElementById("dc2").classList.add("toggle");
      document.getElementById("dc3").classList.add("toggle");
      document.getElementById("dc4").classList.add("toggle")
      document.getElementById("dc5").classList.add("toggle");
      document.getElementById("dc6").classList.add("toggle");
      document.getElementById("dcMid").classList.add("toggleMid");
}
if (randomNumD2 === 2) {
      document.getElementById("dc1").classList.add("toggle");
      document.getElementById("dc2").classList.add("toggle");
      document.getElementById("dc3").classList.remove("toggle");
      document.getElementById("dc4").classList.remove("toggle")
      document.getElementById("dc5").classList.add("toggle");
      document.getElementById("dc6").classList.add("toggle");
      document.getElementById("dcMid").classList.remove("toggleMid");
}
if (randomNumD2 === 3) {
      document.getElementById("dc1").classList.add("toggle");
      document.getElementById("dc2").classList.add("toggle");
      document.getElementById("dc3").classList.remove("toggle");
      document.getElementById("dc4").classList.remove("toggle")
      document.getElementById("dc5").classList.add("toggle");
      document.getElementById("dc6").classList.add("toggle");
      document.getElementById("dcMid").classList.add("toggleMid");
}
if (randomNumD2 === 4) {
      document.getElementById("dc1").classList.remove("toggle");
      document.getElementById("dc2").classList.add("toggle");
      document.getElementById("dc3").classList.remove("toggle");
      document.getElementById("dc4").classList.remove("toggle")
      document.getElementById("dc5").classList.add("toggle");
      document.getElementById("dc6").classList.remove("toggle");
      document.getElementById("dcMid").classList.remove("toggleMid");;
}
if (randomNumD2 === 5) {
       document.getElementById("dc1").classList.remove("toggle");
       document.getElementById("dc2").classList.add("toggle");
       document.getElementById("dc3").classList.remove("toggle");
       document.getElementById("dc4").classList.remove("toggle")
       document.getElementById("dc5").classList.add("toggle");
       document.getElementById("dc6").classList.remove("toggle");
       document.getElementById("dcMid").classList.add("toggleMid"); 
}
if (randomNumD2 === 6) {
        document.getElementById("dc1").classList.remove("toggle");
        document.getElementById("dc2").classList.remove("toggle");
        document.getElementById("dc3").classList.remove("toggle");
        document.getElementById("dc4").classList.remove("toggle")
        document.getElementById("dc5").classList.remove("toggle");
        document.getElementById("dc6").classList.remove("toggle");
        document.getElementById("dcMid").classList.remove("toggleMid");
}

console.log(randomNum);
console.log(randomNumD2);
}
