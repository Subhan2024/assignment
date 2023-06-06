
        // function prom(states) {
        //     console.log("please wait")
        //     return new Promise(function (resolve, reject) {
        //         setTimeout(function () {
        //             if (states) {
        //                 resolve("promise is fullfilled");
        //             }
        //             else {
        //                 reject("jhoot bolta hai sala");
        //             }
        //         }, 2000)
        //     });
        // }
        // let a = prom(false)
        // console.log(a)

        // function fullfilled(result){
        //     console.log(result)
        // }
        // function rejected(error){
        //     console.log(error);
        // }

        // prom(true).then(result => console.log(result)).catch(false).catch(error => coo(rejected))









        // async function Getation() {
        //     console.log("addition two numbers")

        //     let a = 3;
        //     let b = 4;

        //     let result = a + b;
        //     // console.log(a + b)

        //     await console.log("please wait")
        //     return result
        // }
        // Getation().then(result => console.log(result)).catch(error => console.log(error));
        // console.log("hellow world")





            // (async function(){
            //    await fetch("https://dummyjson.com/products").then(response => response.json()).then((result) => {
            //         console.log(result)
            //         for(let i = 0; i < result.length; i++){
            //             // console.log(result[i])
            //             document.write("<h2>" + i + ") " + result[i].title + "</h2><br>")
            //         }

            //     });
            // })();

                (async function(){
                    let rootElement = document.getElementById("rootFolder");
                    await fetch("https://dummyjson.com/products")
                    .then(response => response.json())
                    .then((data) => {
                        console.log(data);
                        for(let i = 0; i < data.length; i++){
                            rootElement.innerHTML += `

                            <div class="card" style="width: 18rem;">
                            <div class="card-body">
                            <h3 class="card-title">${data[i].id}</h3>
                            <h3 class="card-title">${data[i].title}</h3>
                              <p class="card-text">${data[i].body}</p>
                              </div>
                              </div>
                            `
                        }
                    })
                })()





  