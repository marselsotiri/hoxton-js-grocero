const cartItemList = document.querySelector('.item-list.cart--item-list')
const storeItemList = document.querySelector('.item-list.store--item-list')
const totalAmountPrice = document.querySelector('.total-number')

const state = {
    groceries: [
        {
            id: 1,
            name: "beetroot",
            price: 0.35
        },
        {
            id: 2,
            name: "carrot",
            price: 0.25
        },
        {
            id: 3,
            name: "apple",
            price: 0.45
        },
        {
            id: 4,
            name: "apricot",
            price: 0.30
        },
        {
            id: 5,
            name: "avocado",
            price: 0.55
        },
        {
            id: 6,
            name: "bananas",
            price: 0.50
        },
        {
            id: 7,
            name: "bell-pepper",
            price: 0.25
        },
        {
            id: 8,
            name: "berry",
            price: 0.15
        },
        {
            id: 9,
            name: "blueberry",
            price: 0.35
        },
        {
            id: 10,
            name: "eggplant",
            price: 0.65
        }

    ],
    cart: []
}


function addGrociere(grociere) {
    const match = state.cart.find(function (item) {
        return item.name === grociere.name
    })

    if (match) {
        match.count++
    }else{
        const grocieres = {
            id: grociere.id,
            name: grociere.name,
            price: grociere.price,
            count: 1
        }
    
        state.cart.push(grocieres)
    }
    
}

function removeCartItem(cartItem) {
    
    cartItem.count--

    if (cartItem.count===0){
      const updatedCart = state.cart.filter(function (item){
            return item.id !== cartItem.id
        })
        state.cart=updatedCart
    }
}

function totalPrice() {
    let totalAmount = 0
    for (const cart of state.cart) {
        totalAmount += cart.count * cart.price
    }
    totalAmountPrice.textContent = `£${totalAmount.toFixed(2)}`
}

/* <li>
  <div class="store--item-icon">
    <img src="assets/icons/001-beetroot.svg" alt="beetroot" />
  </div>
  <button>Add to cart</button>
</li> */
function renderStoreItems() {
    storeItemList.innerHTML = ''

    for (const grociere of state.groceries) {
        const liStore = document.createElement('li')

        const divStore = document.createElement('div')
        divStore.setAttribute('class', 'store--item-icon')

        const imgStore = document.createElement('img')
        imgStore.setAttribute('src', `assets/icons/${grociere.id}-${grociere.name}.svg`)
        imgStore.setAttribute('alt', grociere.name)
        divStore.append(imgStore)

        const buttonStore = document.createElement('button')
        buttonStore.textContent = 'Add to Cart'


        liStore.append(divStore, buttonStore)

        const buttonAdd = liStore.querySelector('button')
        buttonAdd.addEventListener('click', function () {
            addGrociere(grociere)

            render()
        })

        storeItemList.append(liStore)
    }
}

/* <li>
  <img
    class="cart--item-icon"
    src="assets/icons/001-beetroot.svg"
    alt="beetroot"
  />
  <p>beetroot</p>
  <button class="quantity-btn remove-btn center">-</button>
  <span class="quantity-text center">1</span>
  <button class="quantity-btn add-btn center">+</button>
</li> */
function renderCartItems() {
    cartItemList.innerHTML = ''
    for (const grociere of state.cart) {

        const liCart = document.createElement('li')

        const imgCart = document.createElement('img')
        imgCart.setAttribute('class', 'cart--item-icon')
        imgCart.setAttribute('src', `assets/icons/${grociere.id}-${grociere.name}.svg`)
        imgCart.setAttribute('alt', grociere.name)

        const pCart = document.createElement('p')

        const buttonCartremove = document.createElement('button')
        buttonCartremove.setAttribute('class', 'quantity-btn remove-btn center')
        buttonCartremove.textContent = '-'

        const spanCart = document.createElement('span')
        spanCart.setAttribute('class', 'quantity-text center')
        spanCart.textContent = grociere.count

        const buttonCartAdd = document.createElement('button')
        buttonCartAdd.setAttribute('class', 'quantity-btn add-btn center')
        buttonCartAdd.textContent = '+'

        liCart.append(imgCart, pCart, buttonCartremove, spanCart, buttonCartAdd)

        const buttonAdd = liCart.querySelector('button.quantity-btn.add-btn.center')
        buttonAdd.addEventListener('click', function () {
            addGrociere(grociere)
            render()
        })

        const buttonRemove = liCart.querySelector('button.quantity-btn.remove-btn.center')
        buttonRemove.addEventListener('click', function () {
            removeCartItem(grociere)
            render()
        })

        cartItemList.append(liCart)

    }

}

function render() {
    renderCartItems()
    renderStoreItems()
    totalPrice()
}


render()


console.log(state);



