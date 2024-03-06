
function createCartItem(cartItemData) {
  const { imgUrl, brand, salePrice, originalPrice, quantity } = cartItemData;

  const cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");

  const cartItemLeft = document.createElement("div");
  cartItemLeft.classList.add("cart-item-left");

  const img = document.createElement("img");
  img.src = imgUrl;
  img.alt = "";

  const cartItemLeftActions = document.createElement("div");
  cartItemLeftActions.classList.add("cart-item-left-actions");

  const itemNameLink = document.createElement("a");
  itemNameLink.href = "#";
  itemNameLink.textContent = brand + " - " + salePrice;

  const cartItemAmount = document.createElement("div");
  cartItemAmount.classList.add("cart-item-amount");

  const trashButton = document.createElement("button");
  trashButton.innerHTML =
    cartItemData.quantity > 1
      ? '<ion-icon name="remove"></ion-icon>'
      : '<ion-icon name="trash-outline"></ion-icon>';
  trashButton.addEventListener("click",()=>{decreaseQuantity(cartItemData)})

  const amountText = document.createElement("p");
  amountText.textContent = quantity;


  const addButton = document.createElement("button");
  addButton.innerHTML = '<ion-icon name="add-outline"></ion-icon>';
  addButton.addEventListener("click",()=>{increaseQuantity(cartItemData)})

  cartItemAmount.appendChild(trashButton);
  cartItemAmount.appendChild(amountText);
  cartItemAmount.appendChild(addButton);

  cartItemLeftActions.appendChild(itemNameLink);
  cartItemLeftActions.appendChild(cartItemAmount);

  cartItemLeft.appendChild(img);
  cartItemLeft.appendChild(cartItemLeftActions);

  const cartItemRight = document.createElement("div");
  cartItemRight.classList.add("cart-item-right");

  const closeButton = document.createElement("button");
  closeButton.innerHTML = '<ion-icon name="close-outline"></ion-icon>';
  closeButton.addEventListener("click",()=>{removeProduct(cartItemData)}) //корзинада бар заттарды удалить ету

  const priceText = document.createElement("p");
  priceText.textContent =  "$" + getPrice(originalPrice*quantity);

  cartItemRight.appendChild(closeButton);
  cartItemRight.appendChild(priceText);

  cartItem.appendChild(cartItemLeft);
  cartItem.appendChild(cartItemRight);

  return cartItem;
}

//
function getPrice(price) {
  let priceStr = String(price);
  if (priceStr.length > 4) {
    const priceSlices = [];
    for (let i = priceStr.length - 4; i >= 0; i -= 4) {
      priceSlices.unshift(priceStr.slice(i > 0 ? i : 0, i + 4));  // unshift() добавляет один или более элементов в начало массива и возвращает новую длину массива.
      priceStr = priceStr.slice(0, i); //slice() извлекает часть строки и возвращает новую строку без изменения оригинальной строки
    }
    priceSlices.unshift(priceStr);
    priceStr = priceSlices.join(" ");
  }
  return priceStr;
}


function removeProduct(secClothes) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((p) => p.id != secClothes.id);
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.reload(); //корзинадан бир обьектты удалить етемиз
}


function increaseQuantity(product) { //егер корзинада заттарды косу
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.map((p) =>
    p.id == product.id ? { ...p, quantity: p.quantity + 1 } : p
  );
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.reload();
}

function decreaseQuantity(product) { //корзинадан заттарды минус ету
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (product.quantity > 1) {
    cart = cart.map((p) =>
      p.id == product.id ? { ...p, quantity: p.quantity - 1 } : p
    );
  } else {
    cart = cart.filter((p) => p.id !== product.id);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.reload();
}

//массивке айналдырдым,item массивтагы букил элементке тен
const cart=localStorage.getItem("cart")
const cartItems=JSON.parse(cart)
console.log(cartItems)
for(const item of cartItems){
  const card=createCartItem(item)
  document.querySelector(".cart-items").appendChild(card)
}


// PRICE FIND AND SHOW
const productsPriceBox = document.querySelector("#products-price");
const deliveryPriceBox = document.querySelector("#delivery-price");
const totalPriceTextBox = document.querySelector("#total-price");
console.log(getPrices());
const { productsPrice, deliveryPrice, totalPrice } = getPrices();

productsPriceBox.textContent = getPrice(productsPrice) + "$";
deliveryPriceBox.textContent = getPrice(deliveryPrice) + "$";
totalPriceTextBox.textContent = getPrice(totalPrice) + "$";


//общий прайс
function getPrices() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length == 0) {
    return {
      productsPrice: 0,
      deliveryPrice: 0,
      totalPrice: 0
    };
  } else {
    const itemPrices = cart.map((p) => p.originalPrice * p.quantity);
    let productsPrice = 0;
    itemPrices.forEach((p) => (productsPrice += p));
    const deliveryPrice = productsPrice > 100 ? 0 : 150;
    return {
      productsPrice: productsPrice,
      deliveryPrice: deliveryPrice,
      totalPrice: productsPrice + deliveryPrice,
    };
  }
}


// hidden
// toggle  егер класс болса турад класс болмаса алып тастайды


// DELETE FROM CART
//биринши localstorage ден key аламыз,болмаса пустой массив кайтарады
function gerCartSize(){
  const cart=JSON.parse(localStorage.getItem("cart"))||[]
  return cart.length
}
const cartSize=document.querySelector("#cart-size")
cartSize.textContent=gerCartSize()
