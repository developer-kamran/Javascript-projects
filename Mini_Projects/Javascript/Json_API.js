const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

//Search states.json and filter it
const searchStates = async (searchText) => {
  const response = await fetch('../data/state.json');
  const data = await response.json();

  ///Get matches to current text input
  let matches = data.filter((state) => {
    const regex = new RegExp(`^${searchText}`, 'gi');
    return state.name.match(regex) || state.abbr.match(regex);
  });

  if (searchText.length === 0) {
    matches = [];
    matchList.innerHTML = '';
  }
  outputHtml(matches);
};

// show result in html
const outputHtml = (matches) => {
  if (matches.length > 0) {
    const html = matches
      .map(
        (match) =>
          `<div class="card card-body mb-4">
            <h4>   <span class="text-danger">${match.name}${match.abbr}</span>
              ${match.capital}</h4>
                <small><span class="text-warning">Lat:</span>${match.lat}/<span class="text-warning">long:</span>${match.long}</small>
                
                </div> `
      )
      .join('');

    matchList.innerHTML = html;
  }
};

search.addEventListener('input', () => {
  searchStates(search.value);
});
