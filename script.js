function changeImage() {
    if (lives===5) {
    document.getElementById('hangman').src = "images/0.png";
    } if (lives===4) {
        document.getElementById('hangman').src = "images/1.png";
    }   if (lives===3) {
    document.getElementById('hangman').src = "images/2.png";
    } if (lives===2) {
        document.getElementById('hangman').src = "images/3.png";
    } if (lives===1) {
        document.getElementById('hangman').src = "images/4.png";
    } if (lives===0) {
        document.getElementById('hangman').src = "images/5.png";
    }
}

var alphabet=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
alphabet.forEach(function(alphabet){
    var btn = document.createElement('button');
    btn.onclick=function(){
        btn.disabled = true;
        btn.style.backgroundColor = "grey";
                if (splitselectedTeam.includes(this.innerHTML)=== true){
                    const indexes = [];
                    guesses.push(this.innerHTML);
                    for (let index = 0; index < splitselectedTeam.length; index++){
                        if (splitselectedTeam[index]===this.innerHTML){
                            indexes.push(index);
                        }
                    }
                    for (let i in indexes){
                        guessTeam[indexes[i]] = this.innerHTML;
                        document.getElementById("target").innerHTML = guessTeam.join(' ');
                    }

                } else {
                    guesses.push(this.innerHTML);
                    lives--;
                    changeImage();
                    if (lives===0){
                        menu.animate(menuAnimation, menuTiming)
                        menu.style.display = 'block';
                        menuHeader.innerText = "You Lost!";
                        menuText.innerText = "Unlucky! You guessed the wrong team. The correct answer was";
                        menuAnswer.innerText = teams[selectedTeam];
                        menuButton.onclick = function(){
                            location.reload();
                        }
                        menuButton.innerText = "RESTART";
                    }
                }
            if (guessTeam.join('') === splitselectedTeam.join('')){
                menu.animate(menuAnimation, menuTiming)
                menu.style.display = 'block';
                menuHeader.innerText = "You Won!";
                menuText.innerText = "Congratulations! You guessed correct team! The team was";
                menuAnswer.innerText = teams[selectedTeam];
                menuButton.onclick = function(){
                    location.reload();
                }
                menuButton.innerText = "PLAY AGAIN";
            }
            }
        
btn.innerHTML=alphabet;
document.getElementById('button-container').appendChild(btn);
})
var teams = ['Qatar', 'Ecuador', 'Senegal', 'Netherlands', 'England', 'Iran', 'USA', 'Wales', 'Argentina', 'Saudi Arabia', 'Mexico', 'Poland', 'France', 'Australia', 'Denmark', 'Tunisia' , 'Spain', 'Costa Rica', 'Germany', 'Japan', 'Belgium', 'Canada', 'Morocco', 'Croatia', 'Brazil', 'Serbia', 'Switzerland', 'Cameroon', 'Portugal', 'Ghana', 'Uruguay', 'South Korea'];
var selectedTeam = Math.floor(Math.random() * teams.length);
var splitselectedTeam = [];
var guessTeam = [];
var guesses = [];
var lives = 6;
var menu = document.getElementById("menu");
var menuHeader = document.getElementById("menu-header");
var menuText = document.getElementById("menu-para");
var menuAnswer = document.getElementById("answer");
var menuButton = document.getElementById("menu-button");
const menuAnimation = [
    { transform: 'scale(0)'},
    { transform: 'scale(1)'}
  ];
const menuTiming = {
duration: 150,
iterations: 1,
};
for (let i in teams[selectedTeam]){
    if (teams[selectedTeam][i] == ' '){
        splitselectedTeam.push("&nbsp");
        guessTeam.push("&nbsp");
    } else {
        splitselectedTeam.push(teams[selectedTeam][i].toUpperCase());
        guessTeam.push("_");
    }
}
document.getElementById("target").innerHTML = guessTeam.join(' ');
