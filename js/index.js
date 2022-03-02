const searchItem = () => {
    const searchField = document.getElementById('searchField');
    const searchText = searchField.value;
    searchField.value = "";
    const detailsItem = document.getElementById('items-details');
    detailsItem.innerHTML = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(response => response.json())
        .then(data => displaySearchResult(data.data));

}

const error = () => {
    const searchResult = document.getElementById('search-result');
    const div = document.createElement('h1')
    div.innerHTML = `
   
    
         
        <h1 class="text-center bg-dark text-white">Did not match any Phones!</h1>
                            
    
    
    `
    searchResult.appendChild(div);

}
const displaySearchResult = items => {
    let itemss = items.slice(0, 20);
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if (itemss.length == 0) {
        return error();
    }
    itemss.forEach(element => {
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

    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
        .then(response => response.json())
        .then(data => displayItemsDetails(data.data))
}

const displayItemsDetails = item => {
    console.log(item);
    const releaseee = () => {

        if (item.releaseDate == '') {
            return div.innerHTML = `
            <h6 id="release">No release Date</h6>
            `
        } else {
            return div.innerHTML = `
            <h6 class="" id="release">${item.releaseDate}</h6>
            `
        }

    }
    const othersDetails = () => {
        if (item.others == undefined) {
            return `No others`
        } else {
            return `
            Others :<br>
            Bluetooth : ${item.others.Bluetooth}<br> 
            GPS : ${item.others.GPS}<br> 
            NFC : ${item.others.NFC}<br>
            Radio : ${item.others.Radio}<br>
            USB : ${item.others.USB}<br>
            WLAN : ${item.others.WLAN}</p>
            `
        }
    }
    const detailsItem = document.getElementById('items-details');
    const div = document.createElement('div');
    div.classList.add('card');
    detailsItem.innerHTML = ' ';
    div.innerHTML = `
    <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${item.image}" class="img-fluid rounded-start d-flex align-items-center justify-content-center" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${item.name}</h5>
                            <h6 class="" id="release">${releaseee()}</h6>
                            <p>
                            <b>
                            mainFeatures :<br>
                            chipSet : ${item.mainFeatures.chipSet}<br>
                            displaySize : ${item.mainFeatures.displaySize}<br> 
                            memory : ${item.mainFeatures.memory}<br>
                            sensors : ${item.mainFeatures.sensors}<br>
                            storage : ${item.mainFeatures.storage}</p>
                            ${othersDetails()}
                            
                           
                        </div>
                    </div>
                </div>
    `

    detailsItem.appendChild(div);

}