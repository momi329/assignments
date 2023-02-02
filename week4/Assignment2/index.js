function ajax(url) {
    // your code here
    return fetch(url,{method: 'get'})
    .then((response) => {
        return response.json()
    })
    .catch((error) => {
        console.log(`Error: ${error}`);
    })
}
function render(data) {
    // your code here
    const datas = document.querySelector('.words');
    const name = data.map(da => da.name);
    const price =data.map(da => da.price);
    const description = data.map(da => da.description);
    datas.innerHTML=`<span class="phone"><div class="name">${name[0]}</div>
                        <div class="price">$${price[0]}</div>
                        <div class="description">${description[0]}</div>
                     </span>
                     
                        <span class="phone"><div class="name">${name[1]}</div>
                        <div class="price">$${price[1]}</div>
                        <div class="description">${description[1]}</div>
                    </span>
                    
                    <span class="phone"><div class="name">${name[2]}</div>
                        <div class="price">$${price[2]}</div>
                        <div class="description">${description[2]}</div>
                    </span>`
}

const url = "https://appworks-school.github.io/Remote-Assignment-Data/products";

ajax(url).then((data) => {
    render(data);
});