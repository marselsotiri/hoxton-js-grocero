const cartItemList = document.querySelector('.item-list.cart--item-list')
const storeItemList = document.querySelector('.item-list.store--item-list')

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

    ]
}


/* <li>
  <div class="store--item-icon">
    <img src="assets/icons/001-beetroot.svg" alt="beetroot" />
  </div>
  <button>Add to cart</button>
</li> */

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

storeItemList.append(liStore)
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

for (const grociere of state.groceries) {

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
      spanCart.textContent = 1

const buttonCartAdd = document.createElement('button')
      buttonCartAdd.setAttribute('class', 'quantity-btn remove-btn center')
      buttonCartAdd.textContent = '+'

liCart.append(imgCart, pCart, buttonCartremove, spanCart, buttonCartAdd)

cartItemList.append(liCart)

}

console.log('Hello');