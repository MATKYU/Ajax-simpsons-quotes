function fetchSimpsonJSON() {
    
    const simpsonId = 1;
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes${simpsonId}`;
    axios.get(url)
      .then(function(response) {
        return response.data; 
      })
      .then(function(simpson) {
        console.log('data decoded from JSON:', simpson);
  
        const simpsonHtml = `
          <p><strong>${simpson.quote}</strong></p>
          <p><strong>${simpson.character}</strong></p>
          <img src="${simpson.image}" />
          <p><strong>${simpson.characterDirection}</strong></p>
        `;
        document.querySelector('#simpson').innerHTML = simpsonHtml;
      });
  }

let elementButton = document.getElementById('load');
elementButton.addEventListener('click', function () {
fetchSimpsonJSON();

});

  