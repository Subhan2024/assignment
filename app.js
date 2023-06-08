(async function(){
    await fetch('recipies.js')
    .then((response) => response.json())
    .then((recipiesData)=>{
        console.log(recipiesData);
        let searchField = document.getElementById('searchField')
        let btn = document.getElementById('submit')
        let list = document.getElementById('mylist')

        function display(result){
            list.innerHTML = ("")
            result.forEach((value) => {
                // console.log(value)
                list.innerHTML +=`
                <div class="col-lg-3">
                <div class="card">
                <div class="card-body">
                  <h5 class="card-title">${value.author}</h5>
                  <p class="card-text">${value.description}</p>
                  
                </div>
              </div>
              </div>
                `;
            });
        }
        function search(){
            let query = searchField.value;
            // console.log(query)
            let result = recipiesData.filter(function(recipie){
                return(
                    recipie.title.toLowerCase().includes(query) ||
                    recipie.ingredients.join("").toLowerCase().includes(query)
                    );
                })
                console.log(result);
                display(result);
            }
            btn.addEventListener("click", search);
        })
    })()