window.addEventListener("DOMContentLoaded", (event) => {
  const cartButton = document.getElementById("add-to-cart");
  let shoppingCart = document.getElementById('shopping-cart');
  let cartList = document.createElement('ul')
  shoppingCart.appendChild(cartList)

  
  let itemsObj = {}
  for (let i = 0; i < localStorage.length; i++) {
    if (itemsObj[localStorage.key(i)] === undefined) {
      itemsObj[localStorage.key(i)] = Number(localStorage.getItem(`${localStorage.key(i)}`))
    }
  }
  cartButton.addEventListener("click", event => {
    event.preventDefault()
    cartList.innerHTML = "";
    let quantity = document.getElementById('quantity')
    let select = document.getElementById("items");
    if (itemsObj[select.value] === undefined) {
      itemsObj[select.value] = Number(quantity.value)
    } else {
      itemsObj[select.value] += Number(quantity.value)
    }
    let itemsArr = Object.entries(itemsObj)
    console.log(itemsArr)
    
    localStorage.setItem(select.value, quantity.value);
    itemsArr.forEach( ele => {
      let cartItem = document.createElement('li')
      cartItem.innerText = `${ele[0]}, ${ele[1]}`
      cartItem.setAttribute('id', `${ele[0]}`)
      let removeButton = document.createElement('button')
      removeButton.setAttribute('id', `${ele[0]}`)
      removeButton.innerText = "Remove"
      cartItem.appendChild(removeButton)
      cartList.appendChild(cartItem)
    });

  });


  //removal function
  cartList.addEventListener('click', event => {
    const item = document.getElementById(`${event.target.id}`)
    cartList.removeChild(item)
    localStorage.removeItem(`${event.target.id}`)
    delete itemsObj[event.target.id]
    console.log(itemsObj)
  })
  
  let popList = Object.entries(itemsObj)
  
  popList.forEach( ele => {
    let cartItem = document.createElement('li')
    cartItem.innerText = `${ele[0]}, ${ele[1]}`
    cartItem.setAttribute('id', `${ele[0]}`)
    let removeButton = document.createElement('button')
    removeButton.setAttribute('id', `${ele[0]}`)
    removeButton.innerText = "Remove"
    cartItem.appendChild(removeButton)
    cartList.appendChild(cartItem)
  });

});



// const showCart = () => {

// };

// const storeItem = () => {

// };

// const removeItem = () => {

// };
