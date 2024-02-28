const url = window.location.href;
console.log(url)

const id = url.split("id=")[1];
console.log(id)

//first cart
const clothes = [
  {
    id: 1,
    imgUrl: [
       "https://media.tommy.com/us/static/images/scheduled_marketing/2024/01/PLP_FH_MTops_all.jpg",
       "https://media.tommy.com/us/static/images/scheduled_marketing/2024/01/PLP_FH_MTops_polos.jpg",
       "https://media.tommy.com/us/static/images/scheduled_marketing/2024/01/PLP_FH_MTops_tees.jpg",
       "https://media.tommy.com/us/static/images/scheduled_marketing/2024/01/PLP_FH_MTops_hoodies.jpg",
       "https://media.tommy.com/us/static/images/scheduled_marketing/2024/01/PLP_FH_MTops_shirts.jpg",
       "https://media.tommy.com/us/static/images/scheduled_marketing/2024/01/PLP_FH_MTops_sweaters.jpg",
  ],
    category: "Shop All",
    text: ""
    // href:"https://usa.tommy.com/en/men/clothing/tops/polos?icid=men_polos_plp-filter2-men_polos_plp-20240215"
  },
  {
    id: 2,
    imgUrl: "https://media.tommy.com/us/static/images/scheduled_marketing/2024/01/PLP_FH_MTops_polos.jpg",
    category: "Polos",
    // href:"https://usa.tommy.com/en/men/clothing/tops/polos?icid=men_polos_plp-filter2-men_polos_plp-20240215"
  },
  {
    id: 3,
    imgUrl:"https://media.tommy.com/us/static/images/scheduled_marketing/2024/01/PLP_FH_MTops_tees.jpg",
    category: "T-Shitrs",
    // href:"https://usa.tommy.com/en/men/clothing/tops/polos?icid=men_polos_plp-filter2-men_polos_plp-20240215"
  },
  {
    id: 4,
    imgUrl:"https://media.tommy.com/us/static/images/scheduled_marketing/2024/01/PLP_FH_MTops_hoodies.jpg",
    category: "Hoodies & Sweaters",
    // href:"https://usa.tommy.com/en/men/clothing/tops/polos?icid=men_polos_plp-filter2-men_polos_plp-20240215"
  },
  {
    id: 5,
    imgUrl:"https://media.tommy.com/us/static/images/scheduled_marketing/2024/01/PLP_FH_MTops_shirts.jpg",
    category: "Shirts",
    // href:"https://usa.tommy.com/en/men/clothing/tops/polos?icid=men_polos_plp-filter2-men_polos_plp-20240215"
  },
  {
    id: 6,
    imgUrl:"https://media.tommy.com/us/static/images/scheduled_marketing/2024/01/PLP_FH_MTops_sweaters.jpg",
    category: "Sweaters",
    // href:"https://usa.tommy.com/en/men/clothing/tops/polos?icid=men_polos_plp-filter2-men_polos_plp-20240215"

  },
];

const tommy = clothes.find(item => item.id == Number(id));

console.log(tommy);

function createSportsSuitSection(cart) {
    // Create the main container for the sports suit section
    const sportsSuitDiv = document.createElement('div');
    sportsSuitDiv.classList.add('sports_suit') ;

    // Create the container for the shop all section
    const shopAllDiv = document.createElement('div');
    // shopAllDiv.classList.add('shop_all');


    const descriptionPara = document.createElement("p");
    descriptionPara.textContent = tommy.category;

    // Create the anchor (link) element
    // const linkk = document.createElement('a');
    // linkk.href= cart.href

    // Create the image element
    const image = document.createElement('img');
    image.src = tommy.imgUrl
    image.style.height = 200;
    image.alt = '';

    // Append the image to the link


    // Create the header element
    const header = document.createElement('h4');

    // Append the link and header to the shop all div
    shopAllDiv.appendChild(image);

    // Append the shop all div to the main sports suit div
    sportsSuitDiv.appendChild(shopAllDiv);
    sportsSuitDiv.appendChild(header)
    sportsSuitDiv.appendChild(descriptionPara);

    return sportsSuitDiv

    // Finally, append the sports suit div to a specified parent element in the document.
    // For example, appending to the body. Modify this to append to a different parent element if needed.
}

// Call the function to execute



let container = document.querySelector(".clothes_page")
container.appendChild(createSportsSuitSection())


// Select


//second cart
// const secClothes = [
//   {
//     id: 1,
//     brand: "Flag Logo Crewneck Sweater",
//     imgUrl: "https://shoptommy.scene7.com/is/image/ShopTommy/78J8322_FAP_BCK?wid=352&hei=464&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
//     price: 16100,
//     category: "+12 Colors",
//   },
//   {
//     id: 2,
//     brand: "Flag Logo V-Neck Sweater",
//     imgUrl: "https://shoptommy.scene7.com/is/image/ShopTommy/78J8323_FAP_FNT?wid=352&hei=464&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
//     price: 19990,
//     category: "+4 Colors",
//   },
//   {
//     id: 3,
//     brand: "Flag Logo Cable Knit Sweater",
//     imgUrl:"https://shoptommy.scene7.com/is/image/ShopTommy/78J9338_FAP_FNT?wid=352&hei=464&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
//     price: 18660,
//     category: "+5 Colors",
//   },
//   {
//     id: 4,
//     brand: "Relaxed Fit Linen-Blend Rugby Polo",
//     imgUrl: "https://shoptommy.scene7.com/is/image/ShopTommy/MW34683_TQY_FNT?wid=352&hei=464&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
//     price: 34100,
//     category: "+1 Colors",
//   },
//   {
//     id: 5,
//     brand: "Flag logo Quarter-Zip Sweater",
//     imgUrl:"https://shoptommy.scene7.com/is/image/ShopTommy/78J9329_BDS_FNT?wid=352&hei=464&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
//     price: 18660,
//     category: "+9 Colors",
//   },
//   {
//     id: 6,
//     brand: "Flag Logo Crewneck Sweater",
//     imgUrl: "https://shoptommy.scene7.com/is/image/ShopTommy/78J8322_BDS_FNT?wid=352&hei=464&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
//     price: 34100,
//     category: "+12 Colors",
//   },
// ];
//
//
// function createCard(product) {
//   const { id, imgUrl, price, brand, category } = product;
//
//   const card = document.createElement("div");
//   card.classList.add("card");
//
//   const img = document.createElement("img");
//   img.src = imgUrl;
//   img.alt = "";
//
//   const priceHeading = document.createElement("h3");
//   priceHeading.textContent = getPrice(price) + " ₸";
//
//   const brandPara = document.createElement("p");
//   brandPara.textContent = brand;
//
//   const descriptionPara = document.createElement("p");
//   descriptionPara.textContent = category;
//
//   const button = document.createElement("button");
//   // button.textContent = "Add to cart";
//   // button.addEventListener("click",()=>addToCart(product)) //егер функцияда аргумент жок болса просто функциянын атын жазуга болады   button.addEventListener("click",addToCart)
//   if (isAddedToCart(product)) {
//       button.textContent = "Added to cart";
//       button.disabled = true;
//   } else {
//       button.textContent = "Add to cart";
//       button.addEventListener("click", () => {
//         addToCart(product);
//       });
//   }
//
//
//   card.appendChild(img);
//   card.appendChild(priceHeading);
//   card.appendChild(brandPara);
//   card.appendChild(descriptionPara);
//   card.appendChild(button);
//
//   return card;
// }
//
//
// function getPrice(price) {
//   let priceStr = String(price);
//   if (priceStr.length > 4) {
//       const priceSlices = [];
//       for (let i = priceStr.length - 3; i >= 0; i-=3) {
//           priceSlices.unshift(priceStr.slice(i > 0 ? i : 0, i + 3));
//           priceStr = priceStr.slice(0, i);
//       }
//       priceSlices.unshift(priceStr);
//       priceStr = priceSlices.join(" ")
//   }
//   return priceStr;
// }
// console.log()
//
//
// function addToCart(product) {
//   const cart = localStorage.getItem("cart");
//   const cartItems = JSON.parse(cart) || [];
//   if (cartItems.find(item  => item.id == product.id)) {
//     return;
//   }
//   cartItems.push({...product, quantity: 1,size: "M"}); //обьект курады
//   localStorage.setItem("cart", JSON.stringify(cartItems)); //object-JSON
//   window.location.reload() //страница автоматический обновляется
// }
//
// function isAddedToCart(product) {
//   const cart = JSON.parse(localStorage.getItem("cart")) || [];
//   return cart.find((p) => p.id == product.id) != null;
// }
//
//
//
// const cards = document.querySelector(".cards");
// secClothes.forEach((product) => {
//   cards.appendChild(createCard(product));
// });
