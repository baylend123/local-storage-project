window.addEventListener("DOMContentLoaded", (event) => {
  const cartButton = document.getElementById("add-to-cart");
  let itemCount = 0;
  cartButton.addEventListener("click", event => {
    event.preventDefault()
    itemCount++
    let select = document.getElementById("items");
    localStorage.setItem(`item${itemCount}`, select.value);

  })
  // const showCart = () => {

  // };

  // const storeItem = () => {

  // };

  // const removeItem = () => {

  // };

});
