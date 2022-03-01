const searchItem = () => {
    const searchField = document.getElementById('searchField');
    const searchText = searchField.value;
    searchField.value = "";
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(response => response.json())
        .then(data => displaySearchResult(data.data));

}

const displaySearchResult = items => {
    const searchResult = document.getElementById('search-result');
    items.forEach(element => {
        console.log(element);
        const div = document.createElement('div')
        div.classList.add('col');
        div.innerHTML =
            ` <div class="card h-100 border-0">
        <img src="${element.image}" class="card-img-top p-3" alt="...">
        <div class="card-body ">
            <h5 class="card-title">${element.phone_name}</h5>
            <h6 class="card-text">Brand: ${element.brand}</h6>
            <p class="card-text">${element.slug}</p>
        </div>
        <button type="button" class="btn btn-primary">Details</button>
        </div>`
        searchResult.appendChild(div);
    });
}