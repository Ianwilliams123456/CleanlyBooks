const urlParams = new URLSearchParams(window.location.search);
const gameId = urlParams.get('game');

if (gameId) {
    fetch(`games/${gameId}.json`)
        .then(response => response.json())
        .then(game => {
            document.getElementById('game-title').textContent = game.name;
            const assistantContent = document.getElementById('assistant-content');
            const rulesLink = document.createElement('a');
            rulesLink.href = game.rules;
            rulesLink.textContent = 'Game Rules';
            assistantContent.appendChild(rulesLink);
        });
}
