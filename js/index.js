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
        </div>
        <button onclick="loadDetails('${element.slug}')" type="button" class="btn btn-primary">Details</button>
        </div>`
        searchResult.appendChild(div);

    });
}

const loadDetails = phoneId => {
    console.log(phoneId)
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
        .then(response => response.json())
        .then(data => displayItemsDetails(data.data))
}
const displayItemsDetails = item => {
    const hello = Map.sensors;
    console.log(item);
    const detailsItem = document.getElementById('items-details');
    const div = document.createElement('div');
    div.classList.add('card');
    detailsItem.innerHTML = ' ';
    div.innerHTML = `
    <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${item.image}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${item.name}</h5>
                            <h6 class="">${item.releaseDate}</h6>
                            <p class="card-text">chipSet: ${item.mainFeatures.chipSet} displaySize: ${item.mainFeatures.displaySize} memory: ${item.mainFeatures.memory}</p>
                            <p class="card-text">sensors: ${item.mainFeatures.sensors[0]} ${item.mainFeatures.sensors[1]} ${item.mainFeatures.sensors[2]} ${item.mainFeatures.sensors[3]} ${item.mainFeatures.sensors[4]} ${item.mainFeatures.sensors[5]} storage: ${item.mainFeatures.storage}</p> 
                            <p class="card-text">Bluetooth: ${item.others.Bluetooth} GPS: ${item.others.GPS} NFC: ${item.others.NFC}Radio: ${item.others.Radio}USB: ${item.others.USB}WLAN: ${item.others.WLAN}</p>
                           
                        </div>
                    </div>
                </div>
    `

    detailsItem.appendChild(div);
}