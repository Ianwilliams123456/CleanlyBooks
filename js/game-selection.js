fetch('games/games.json')
    .then(response => response.json())
    .then(games => {
        const gameList = document.getElementById('game-list');
        games.forEach(game => {
            const gameElement = document.createElement('div');
            gameElement.classList.add('game');
            gameElement.textContent = game.name;
            gameElement.addEventListener('click', () => {
                window.location.href = `assistant.html?game=${game.id}`;
            });
            gameList.appendChild(gameElement);
        });
    });
