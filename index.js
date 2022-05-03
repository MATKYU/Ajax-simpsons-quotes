function fetchSimpsonJSON() {
  const simpson = 1;
  const url = `https://simpsons-quotes-api.herokuapp.com/quotes ${simpsonId}`;
  axios.get(url)
    .then(function(simpson) {
      return simpson.data; 
    })
    .then(function(simpson) {
      console.log('data decoded from JSON:', simpson);
      const simpsonHtml = `
        <p><strong>${simpson[0].character}</strong></p>
        <img src="${simpson[0].image }" />
        <p><strong>${simpson[0].quote}</strong></p>`;
      document.querySelector('#simpson').innerHTML = simpsonHtml;
    });
}

fetchsimpsonJSON();
  