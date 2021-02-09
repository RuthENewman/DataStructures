let player = {
    age: 23,
    name: 'Naomi',
    country: 'Japan',
    active: true,
    playMatch: function() {
    if (Math.random() < 0.5) {
        return 'Win!';
    }
        return 'Lose!';
    }
}

player.ranking = 3;
player.australianOpenBestResult = 'Winner';

const firstRoundResult = player.playMatch();
console.log(firstRoundResult);