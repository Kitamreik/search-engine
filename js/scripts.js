async function search() {
    const searchTerm = document.getElementById('searchInput').value;
    const response = await fetch(`http://localhost:3000/search?q=${encodeURIComponent(searchTerm)}`);
    const data = await response.json();
    console.log(data)

    // const resultsContainer = document.getElementById('results');
    // resultsContainer.innerHTML = '';

    //data.forEach(page => {
      // const resultElement = document.createElement('div');
      //resultElement.innerHTML = `<h2>${page.title}</h2><p>${page.content}</p>`;
      //resultsContainer.appendChild(resultElement);
    //});
}