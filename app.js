const firstRandomNum = Math.floor(Math.random() * 6) + 1;
const firstDiceImage = 'my_images/dice' + firstRandomNum + '.png';
document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);


const secondRandomNum = Math.floor(Math.random() * 6) + 1;
const secondDiceImage = 'my_images/dice' + secondRandomNum + '.png';
document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage);

if (firstRandomNum  > secondRandomNum){
    document.querySelector('h1').innerHTML = 'player1 wins!';
}else if(firstRandomNum  < secondRandomNum){
    document.querySelector('h1').innerHTML = 'player2 wins!';
}else{
    document.querySelector('h1').innerHTML = 'Its a Draw';
}