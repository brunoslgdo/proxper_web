const PRODUCTS = [
    {
        name: 'Realiza',
        description: 'Protección más ahorro al alcance de tu bolsillo',
        url: 'realiza.html',
        thumbnail: 'card-product-realiza.jpg',
    },
    {
        name: 'Segubeca',
        description: 'Asegura la educación universitaria de tu hijo',
        url: 'segubeca.html',
        thumbnail: 'card-product-segubeca.jpg',
    },
    {
        name: 'Imagina Ser',
        description: 'Ahorra para el retiro que imaginas',
        url: 'imagina-ser.html',
        thumbnail: 'card-product-imagina-ser.jpg',
    },
    {
        name: 'Vida Mujer',
        description: 'Mujer previsora vale por dos',
        url: 'vida-mujer.html',
        thumbnail: 'card-product-vida-mujer.jpg',
    },
    {
        name: 'Gastos Médicos',
        description: 'Protege tu salud y la de tus seres queridos',
        url: 'sgmm.html',
        thumbnail: 'card-product-sgmm.jpg',
    },
    {
        name: 'Star Dotal',
        description: 'El ahorro que necesitas para alcanzar tus metas',
        url: 'star-dotal.html',
        thumbnail: 'card-product-star-dotal.jpg',
    },
    {
        name: 'Orvi 99',
        description: 'Tome decisiones hoy para maximizar sus ingresos en el futuro',
        url: 'orvi-99.html',
        thumbnail: 'card-product-orvi-99.jpg',
    },
]

/**
 *  ul.card-product
 *    li.card-product__item
 *      .card-product__poster
 *        img
 *      .card-product__description
 *        h3
 *        p
 *        a
 */

const cardProduct = document.getElementById('card-product')

PRODUCTS.forEach( item => {

    const cardProductItem = document.createElement('li')
    cardProductItem.setAttribute('class', 'card-product__item')

    const cardProductPoster = document.createElement('div')
    cardProductPoster.setAttribute('class', 'card-product__poster')

    const cardProductDescription = document.createElement('div')
    cardProductDescription.setAttribute('class', 'card-product__description')

    const cardProductImg = document.createElement('img')
    cardProductImg.setAttribute('src', `img/${item.thumbnail}`)
    cardProductImg.setAttribute('alt', `#`)

    const cardProductTitle = document.createElement('h3')
    cardProductTitle.textContent = item.name

    const cardProductText = document.createElement('p')
    cardProductText.textContent = item.description
    
    const cardProductCta = document.createElement('a')
    cardProductCta.setAttribute('href', `#`)
    cardProductCta.setAttribute('class', 'button button--ghost-alt')
    cardProductCta.textContent = 'Leer más'

    cardProduct.appendChild(cardProductItem)

    cardProductItem.appendChild(cardProductPoster)
    cardProductPoster.appendChild(cardProductImg)

    cardProductItem.appendChild(cardProductDescription)
    cardProductDescription.appendChild(cardProductTitle)
    cardProductDescription.appendChild(cardProductText)
    cardProductDescription.appendChild(cardProductCta)

})