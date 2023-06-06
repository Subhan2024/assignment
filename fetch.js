(async function(){
    let rootElement = document.getElementById('rootFolder');
    fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then((data) => {
        console.log(data);
      data.products.forEach(value => {
        
        rootElement.innerHTML += `
        <div class="col-lg-4">
        <div class="card" style="width: 18rem;">
            <img src="${value.images[1]}" class="card-img-top" alt="..." height="200px">
            <div class="card-body">
              <h5 class="card-title">${value.title + value.brand}</h5>
              <h5 class="card-title"> ${value.category}</h5>
              <p class="card-text">${value.description}</p>
              <a href="#" class="btn btn-primary">${value.price}</a>
            </div>
          </div>
    </div>
        `
      });
    })
})()