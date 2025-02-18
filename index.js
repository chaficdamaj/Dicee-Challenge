var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var newImage = `images/dice${randomNumber1}.png`
var newImage2 = `images/dice${randomNumber2}.png`

document.querySelector("img.img1").setAttribute("src", newImage);
document.querySelector("img.img2").setAttribute("src", newImage2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}else if( randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = "Draw !";
}
