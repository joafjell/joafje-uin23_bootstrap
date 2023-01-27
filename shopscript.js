let cart = []
let cartPrice = []

/*function myFuncion() {
    var button = document.getElementById("#cartview");
    if (window.getComputedStyle(button).visibility === "hidden")
    {
        button.style.visibility = "visible"
    }
}*/

/*function checkIfHidden() {
    var carts = (section.contains(hidden));
    if (carts === true) {
        toggleCart()
    } 
}
*/

function addToCart(title, price) {
    cart.push({productTitle: title, productPrice: price, productQuantity: 1})
    
    console.log(cart)
    //etter å ha lagt til et produkt: oppdater handelistevisning. 
    renderCart()
    //Så må vi oppdatere label med antall produkter:
    document.querySelector("#cart .label").innerHTML = cart.length

    //if sjekk. kalle på en annen funksjon om ikke åpen. 
    //contains() sjekker om noe fins på et objekt. 

    /*if(document.getElementById("cartview").classList.contains("hidden")){
        toggleCart()
    }*/
    //den over og den under fungerer også
    //document.getElementById("cartview").classList.remove("hidden")

    if (document.querySelector("#cartview").classList.toggle("hidden")){
        toggleCart()
    }
}

/*function calculatePrice() {
    let totalPris = 0
    cart.map(prod => totalPris += prod.productPrice)
    document.getELementById("total").innterHTML = totalPris
}*/

function renderCart() {
    //Tom variabel for å bygge HTML til produkter 
    let listHTML = ""
    let totalPrice = 0
    //Gå gjennom cart arrayen, li <li> for hvert produkt
    cart.map((prod, index) => listHTML += `<li>
    <span class="title">${prod.productTitle}</span>
    <span class="price">${prod.productPrice}</span>
    <span class="quantity">${prod.productQuantity}</span>
    <button onClick="deleteProduct(${index})" class="delete">X</button>
</li>`)
    cart.map(totalCartPrice => totalPrice += totalCartPrice.productPrice)


    //Bruke en selector for å finn riktig <ul>, og skrive inn listHTML:
    document.querySelector("#cartview ul").innerHTML = listHTML

    document.querySelector("#total").innerHTML = totalPrice

    //denne funksjonen oppdaterer også total prisen
    //calculatePrice()

    
}

function toggleCart() {
    document.querySelector("#cartview").classList.toggle("hidden")
}

function deleteProduct(index) {
    cart.splice(index, 1)
    renderCart()
}

