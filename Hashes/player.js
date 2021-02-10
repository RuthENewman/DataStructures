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

player.ranking = 3; // 0(1)
player.australianOpenBestResult = 'Winner'; // 0(1)

const firstRoundResult = player.playMatch(); // 0(1)
console.log(firstRoundResult);