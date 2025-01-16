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
document.getElementById("productlist").innerHTML = productHTML

// Lage toggle funksjonalitet for handlevogn
document.getElementById("shoppingcart").addEventListener("click", function() {
    document.getElementById("cart").classList.toggle("visible")
})

// Lage addProductToCart
    function addProductToCart( prodid) {
        console.log("du vil legge til prodid" + prodid)
        // Bruker .some for å sjekke om prodid allerede finnes i cart;
        const idExist = cart.some(cartprod => cartprod.cartprodid === prodid)

        if (idExist) {
            // Oppdatere dette produktets quantity
            const index = cart.findIndex(p => p.cartprodid === prodid)
            //Så oppdatere rikitg quantity
            cart(index.quantity++)
        } else {
        cart.push({ prodid: prodid, quantity: 1 })
        }

        printCart()
        console.log(cart)
    }

    //lagre en funksjon som skriver ut en oppdatert versjon av handlevogna
    function printCart() {
        //start med en tom varibael med tom HTML
        let cartHTML = ""
        let cartTotal = 0
        // Lag varibale for antall produkter
        let cartNumber = 0
        
        // Gå gjennom cart-arrayen og generere HTML for hvert produkt
        cart.map((cartprod, index) => {
            const currentProduct = products.findIndex(p => p.prodid === cartprod.cartprodid)
            const currentProductInfo = products[currentProduct]
            cartHTML += `<article class="cart-product">
                            <span class="title">${currentProductInfo.title}</span>
                            <span class="price">${currentProductInfo.price},-</span>
                            <span class="quantity">x<span class="quantity-number">${cartprod.quantity}</span></span>
                            <button class="delete">x</button>
                        </article>`

            // regn ut total
            cartTotal += currentProductInfo.price = cartprod.quantity
            //Regn ut antall produkter
            cartNumber += cartprod.quantity
        })

        //skriv ut ferdig generert HTML til index fila
        document.getElementById("cart-products").innerHTML = cartHTML
        // Skriver ut totalpris
        document.getElementById("cart-total").innerHTML = cartTotal
        // Skrive ut antall produkter
        document.getElementById("cartcount").innerHTML = cartNumber
    }

    printCart()