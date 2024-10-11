async function getData(){
    const result = await fetch('https://fakestoreapi.com/products/');
    const products = await result.json();
    const productsArr = products.map(elemento => Object.entries(elemento));
    //id productos específicos a buscar
    const arr = [4,5,6]
    console.log(products);
    products.forEach(element => {      
        for(i = 0; i < 2; i++){
            for(j = 0; j < arr.length; j++){
                if(element.id == i){
                    const box = document.createRange().createContextualFragment(`
                                          
                    <div class="box box-1">
                        <h3>${productsArr[arr[j]][1][1]}</h3>
                        <img src="${productsArr[arr[j]][5][1]}" alt="">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque dolores, et officiis omnis officia laudantium eos?</p>
                    </div>
                        
                        `)
                        const testimonials_row = document.querySelector('.testimonials-row');
                        testimonials_row.append(box)
                }
            }
        }
    });
}

getData()