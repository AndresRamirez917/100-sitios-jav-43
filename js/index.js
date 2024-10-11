async function getData(){
    const result = await fetch('https://fakestoreapi.com/products/');
    const products = await result.json();
    const productsArr = products.map(elemento => Object.entries(elemento));
    //id productos específicos a buscar
    const arr = [4,5,6]
    console.log(products);
    products.forEach(element => {    
        //este bucle no tengo idea como funciona  
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

const btn_validar = document.getElementById('btn-validar');
const validar = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');
    const arr = [];
    const messageArr = ["Nombre", "Email", "Mensaje"];
    arr.push(nombre, email, mensaje);
    for(i = 0; i < arr.length; i++){
        if(arr[i].value == ""){
            swal({
                title: `El campo ${messageArr[i]} no puede estar vacío`,
                icon: "error",
                 })
                 return false;
        }
    }
    if(!emailValido(email)){
        swal({
            title: `El campo ${messageArr[1]} no tiene el formato adecuado`,
            icon: "error",
             })
             return false;
    }
    swal({
        title: `Datos enviados satisfactoriamente`,
        icon: "success",
         })
         nombre.value = "";
         email.value = "";
         mensaje.value = "";
    return true;
}

const emailValido = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
}

btn_validar.addEventListener("click", validar)

getData()