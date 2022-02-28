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
    });
}