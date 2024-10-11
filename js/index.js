async function getData(){
    const result = await fetch('https://fakestoreapi.com/products/');
    const products = await result.json();
    const productsArr = products.map(elemento => Object.entries(elemento));
    const productsArrSliced = productsArr.slice(0,4);
    console.log(products);
    products.forEach(element => {      
        const randInt = randomData(1, productsArr.length);
        const randIndex = randInt;
        for(i = 0; i < productsArrSliced.length; i++){
            if(element.id == i){
                const box = document.createRange().createContextualFragment(`
                    
                    
                <div class="box box-1">
                    <h3>${productsArr[randIndex][1][1]}</h3>
                    <img src="${productsArr[randIndex][5][1]}" alt="">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque dolores, et officiis omnis officia laudantium eos?</p>
                </div>
                    
                    `)
                    const testimonials_row = document.querySelector('.testimonials-row');
                    testimonials_row.append(box)
            }
        }
        function randomData(min, max){
            return Math.floor(Math.random() * (min - max + 1) + max);
        }
    });
}

getData()