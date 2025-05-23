const teamId = '75ced64b-1d3b-4d06-b927-16304eb1de10';
const url = `https://next-match-1-0-1.onrender.com/next-match?teamId=${teamId}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const opponent = data.OpponentTeamName;
    const dateTime = new Date(data.dateTime);
    const atHome = data.atHome;

    const localDate = dateTime.toLocaleDateString();
    const hours = String(dateTime.getHours()).padStart(2, '0');
    const minutes = String(dateTime.getMinutes()).padStart(2, '0');
    const formattedTime = `${hours}:${minutes} hs.`;
    
    const location = atHome ? 'Local' : 'Visitante';
    const matchInfo = `${opponent} — ${localDate} ${formattedTime} (${location})`;

    document.getElementById('match-info').innerText = matchInfo;
  })
  .catch(error => {
    document.getElementById('match-info').innerText = 'Error cargando la información';
    console.error('Fetch error:', error);
  });
