console.log(products)

// gå gjennom alle produkter, generere HTML for hvert produkt, skrive dette til index.html

// En variabel som holder på HTML for produktene
let productHTML = ""

products.map((product, index) => productHTML += 
        `<article class="product-card"> 
            <img src="website_images/PROD_${product.imagefile}" alt="PRODUKTTITTEL"/>
            <a href="#KATEGORISIDE">Ninjago</a>
            <h3>${product.title}</h3>
            <p>${product.price}</p>
            <button>Legg i handelkurv</button>
        </article>`)

// Finn #productList, og fyll den mec verdiene i variabelen productHTML
document.getElementById("productList").innerHTML = productHTML