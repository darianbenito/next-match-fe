const teamId = '75ced64b-1d3b-4d06-b927-16304eb1de10';
const url = `https://next-match-1-0-0-1.onrender.com/next-match?teamId=${teamId}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const opponent = data.OpponentTeamName;
    const dateTime = new Date(data.dateTime);
    const atHome = data.atHome;

    const localDate = dateTime.toLocaleString();
    const match = atHome
      ? `Independiente vs ${opponent}`
      : `${opponent} vs Independiente`;

    document.getElementById('match-info').innerText = `${match} — ${localDate}`;
  })
  .catch(error => {
    document.getElementById('match-info').innerText = 'Error loading match info';
    console.error('Fetch error:', error);
  });
