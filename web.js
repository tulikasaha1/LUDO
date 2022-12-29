var randomno1=Math.floor(Math.random()*6)+1;
var dice_image1="images/"+"dice"+randomno1+".png";//images.dice1.png-dice6.png
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",dice_image1);

var randomno2=Math.floor(Math.random()*6)+1;
var dice_image2="images/"+"dice"+randomno2+".png";//images.dice1.png-dice6.png
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",dice_image2);

var user_name1=prompt("what is the name of user1?");
var constplayer1=document.querySelector(".player1");
constplayer1.innerText="👧"+user_name1;
var user_name2=prompt("what is the name of user2?");
var constplayer2=document.querySelector(".player2");
constplayer2.innerText="🤴🏽"+user_name2;

if(randomno1>randomno2){
document.querySelector("h1").innerHTML=user_name1+" "+"Wins👧";
}
else if(randomno2>randomno1){
  document.querySelector("h1").innerHTML=user_name2+" "+ "Wins🤴🏽";
}

else {
  document.querySelector("h1").innerHTML="Draw!!👧🤴🏽";

}
