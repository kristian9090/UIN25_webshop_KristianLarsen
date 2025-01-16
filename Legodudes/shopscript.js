console.log(products)

// gå gjennom alle produkter, generere HTML for hvert produkt, skrive dette til index.html

// En variabel som holder på HTML for produktene
let productHTML = ""

products.map((product, index) => productHTML += 
        `<article class="product-card"> 
            <img src="website_images/PROD_${product.imagefile}" alt="PRODUKTTITTEL"/>
            <a href="#KATEGORISIDE">Ninjago</a>
            <h3>${product.title}</h3>
            <p>Kr. ${product.price}</p>
            <button onClick="addProductToCart(${product.prodid})">Legg i handelkurv</button>
        </article>`)

// Finn #productList, og fyll den mec verdiene i variabelen productHTML
document.getElementById("productList").innerHTML = productHTML

// Lage toggle funksjonalitet for handlevogn
document.getElementById("shoppingcart").addEventListener("click", function() {
    document.getElementById("cart").classList.toggle("visible")
})

// Lage addProductToCart
    function addProductToCart( prodid) {
        console.log("du vil legge til prodid" + prodid)

        cart.push({ prodid: prodid, quantity: 1 })
        console.log(cart)
    }