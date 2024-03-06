const url = window.location.href;
console.log(url)

const id = url.split("id=")[1];
console.log(id)

//first cart
const clothes = [
    {
      id: 1,
      imgUrl: "https://media.tommy.com/us/static/images/scheduled_marketing/2024/01/PLP_FH_MTops_all.jpg",
      category: "Shop All",
    },
    {
      id: 2,
      imgUrl: "https://media.tommy.com/us/static/images/scheduled_marketing/2024/01/PLP_FH_MTops_polos.jpg",
      category: "Polos",
    },
    {
      id: 3,
      imgUrl:"https://media.tommy.com/us/static/images/scheduled_marketing/2024/01/PLP_FH_MTops_tees.jpg",
      category: "T-Shitrs",
    },
    {
      id: 4,
      imgUrl:"https://media.tommy.com/us/static/images/scheduled_marketing/2024/01/PLP_FH_MTops_hoodies.jpg",
      category: "Hoodies & Sweaters",
    },
    {
      id: 5,
      imgUrl:"https://media.tommy.com/us/static/images/scheduled_marketing/2024/01/PLP_FH_MTops_shirts.jpg",
      category: "Shirts",
    },
    {
      id: 6,
      imgUrl:"https://media.tommy.com/us/static/images/scheduled_marketing/2024/01/PLP_FH_MTops_sweaters.jpg",
      category: "Sweaters",
    },
  ];

  let tommy = document.querySelectorAll('.clothe-img')
  for(let i = 0; i < tommy.length; i++) {
    tommy[i].src = clothes[i].imgUrl;
  }



// second cart
const productDetails = [
  {
   id: 1,
   imgUrl: "https://shoptommy.scene7.com/is/image/ShopTommy/78J8322_FAP_BCK?wid=352&hei=464&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
   imUrl:"https://shoptommy.scene7.com/is/image/ShopTommy/78J8322_FAP_DE1?wid=352&hei=464&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
   brand: "Flag Logo Crewneck Sweater",
   originalPrice: 79.50,
   salePrice: "30% off $150+ 120% off $100+ with code: SAVE",
   discountPercent: "56.30 ",
   colors: "+12 Colors",
 },
 {
   id: 2,
   imgUrl: "https://shoptommy.scene7.com/is/image/ShopTommy/78J8323_FAP_FNT?wid=352&hei=464&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
   imUrl:"https://shoptommy.scene7.com/is/image/ShopTommy/78J8323_FAP_DE1?wid=352&hei=464&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
   brand: "Flag Logo V-Neck Sweater",
   originalPrice: 79.50,
   salePrice: "30% off $150+ 120% off $100+ with code: SAVE",
   discountPercent: "56 ",
   colors: "+4 Colors",
 },
 {
   id: 3,
   imgUrl: "https://shoptommy.scene7.com/is/image/ShopTommy/78J9338_FAP_FNT?wid=352&hei=464&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
   imUrl: "https://shoptommy.scene7.com/is/image/ShopTommy/78J9338_FAP_DE1?wid=352&hei=464&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
   brand: "Flag Logo Cable Knit Sweater",
   originalPrice: 89.50,
   salePrice: "30% off $150+ 120% off $100+ with code: SAVE",
   discountPercent: "53.40",
   colors: "+12 Colors",
 },
 {
   id: 4,
   imgUrl: "https://shoptommy.scene7.com/is/image/ShopTommy/MW34683_TQY_FNT?wid=352&hei=464&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
   imUrl: "https://shoptommy.scene7.com/is/image/ShopTommy/MW34683_TQY_DE1?wid=352&hei=464&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
   brand: "Relaxed Fit Linen-Blend Rugby Polo",
   originalPrice: 169.00,
   salePrice: "30% off $150+ 120% off $100+ with code: SAVE",
   discountPercent: "53",
   colors: "+12 Colors",
 },
 {
   id: 5,
   imgUrl: "https://shoptommy.scene7.com/is/image/ShopTommy/78J9329_BDS_FNT?wid=352&hei=464&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
   imUrl:"https://shoptommy.scene7.com/is/image/ShopTommy/78J9329_BDS_DE1?wid=352&hei=464&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
   brand: "Flag logo Quarter-Zip Sweater",
   originalPrice: 89.50,
   salePrice: "30% off $150+ 120% off $100+ with code: SAVE",
   discountPercent: "44",
   colors: "+12 Colors",
 },
 {
   id: 6,
   imgUrl: "https://shoptommy.scene7.com/is/image/ShopTommy/78J8322_BDS_FNT?wid=352&hei=464&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
   imUrl:"https://shoptommy.scene7.com/is/image/ShopTommy/78J8322_BDS_DE1?wid=352&hei=464&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
   brand: "Flag Logo Crewneck Sweater",
   originalPrice: 79.50,
   salePrice: "30% off $150+ 120% off $100+ with code: SAVE",
   discountPercent: "34.90",
   colors: "+12 Colors",
 },
 {
   id: 7,
   imgUrl: "https://shoptommy.scene7.com/is/image/ShopTommy/78J9320_AWD_FNT?wid=352&hei=464&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
   imUrl:"https://shoptommy.scene7.com/is/image/ShopTommy/78J9320_AWD_DE1?wid=352&hei=464&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
   brand: "Flag Logo Cardigan",
   originalPrice: 62.65,
   salePrice: "30% off $150+ 120% off $100+ with code: SAVE",
   discountPercent: "30",
   colors: "+2 Colors",
 },
 {
   id: 8,
   imgUrl: "https://shoptommy.scene7.com/is/image/ShopTommy/MW34686_DW5_FNT?wid=352&hei=464&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
   imUrl:"https://shoptommy.scene7.com/is/image/ShopTommy/MW34686_DW5_DE1?wid=352&hei=464&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
   brand: "Sustainable Style",
   originalPrice: 99.50,
   salePrice: "30% off $150+ 120% off $100+ with code: SAVE",
   discountPercent: "49.90",
   colors: "+1 Colors",
 },
 {
   id: 9,
   imgUrl: "https://shoptommy.scene7.com/is/image/ShopTommy/78J9338_ZZ3_FNT?wid=352&hei=464&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
   imUrl:"https://shoptommy.scene7.com/is/image/ShopTommy/78J9338_ZZ3_DE1?wid=352&hei=464&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
   brand: "Flag Logo Cable Knit Sweater",
   originalPrice: 62.65,
   salePrice: "30% off $150+ 120% off $100+ with code: SAVE",
   discountPercent: "30",
   colors: "+6 Colors",
 },
 {
   id: 10,
   imgUrl: "https://shoptommy.scene7.com/is/image/ShopTommy/78J9338_P7D_FNT?wid=576&hei=759&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
   imUrl:"https://shoptommy.scene7.com/is/image/ShopTommy/78J9338_P7D_BCK?wid=576&hei=759&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
   brand: "Flag Logo Cable Knit Sweater",
   originalPrice: 62.65,
   salePrice: "30% off $150+ 120% off $100+ with code: SAVE",
   discountPercent: "30",
   colors: "+5 Colors",
 },
 {
  id: 11,
  imgUrl: "https://shoptommy.scene7.com/is/image/ShopTommy/MW33508_DW5_FNT?wid=576&hei=759&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
  imUrl:"https://shoptommy.scene7.com/is/image/ShopTommy/MW33508_DW5_BCK?wid=576&hei=759&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
  brand: "Monotype Logo Stripe Quarter-Zip Sweater",
  originalPrice: 118.30,
  salePrice: "30% off $150+ 120% off $100+ with code: SAVE",
  discountPercent: "100.90",
  colors: "+2 Colors",
},
{
  id: 12,
  imgUrl: "https://shoptommy.scene7.com/is/image/ShopTommy/78J9322_P7D_FNT?wid=576&hei=759&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
  imUrl:"https://shoptommy.scene7.com/is/image/ShopTommy/78J9322_P7D_BCK?wid=576&hei=759&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
  brand: "Flag Logo Zip Sweater",
  originalPrice: 62.65,
  salePrice: "30% off $150+ 120% off $100+ with code: SAVE",
  discountPercent: "50,30",
  colors: "+6 Colors",
},
]

function createProductCard(secClothes) {
  const { imgUrl, brand, originalPrice, salePrice , discountPercent , colors } = secClothes
  // Create the main card container
  const card = document.createElement('div');
  card.classList.add('card');

  // Create and append the image
  const img = document.createElement('img');
  img.src = imgUrl;
  img.alt = brand; // It's good practice to provide alt text for images
  card.appendChild(img);

  // Create and append the brand paragraph
  const brandPara = document.createElement('p');
  brandPara.textContent = brand;
  card.appendChild(brandPara);

  // Create and append the price and discount information
  const priceHeading = document.createElement('h3');
  priceHeading.textContent = `$${originalPrice} $${salePrice} ${discountPercent}% off`;
  card.appendChild(priceHeading);

  // Create and append the colors information
  const colorsPara = document.createElement('p');
  colorsPara.textContent = colors;
  card.appendChild(colorsPara);


  card.addEventListener('mouseenter', () => {
          img.src = secClothes.imUrl
      })
      card.addEventListener('mouseleave', () => {
          img.src = secClothes.imgUrl
      })

  // Create and append the 'Add to cart' button

    const button = document.createElement("button");
    // button.textContent = "Add to cart";
    // button.addEventListener("click",()=>addToCart(product)) //егер функцияда аргумент жок болса просто функциянын атын жазуга болады   button.addEventListener("click",addToCart)
    if (isAddedToCart(secClothes)) {
      button.textContent = "Added to cart";
      button.enabled = false; //егер заттарды корзинага косу керек болса  осыны басканда added to cart деп шыгады
    } else {
      button.textContent = "Add to cart";
      button.addEventListener("click", () => {
        addToCart(secClothes);
      });
    }

    card.appendChild(button);
  return card;
}


const cardsContainer = document.querySelector('.cards'); // Assuming you have a container with class 'cards'
// const productCard = createProductCard(productDetails);
// cardsContainer.appendChild(productCard);

// Iterate over the productDetails array
productDetails.forEach(product => {
  // For each product, call createProductCard and pass the product as the argument
  const productCard = createProductCard(product);

  // Append the resulting card to the cards container
  cardsContainer.appendChild(productCard);
});


function addToCart(product) {
  const cart = localStorage.getItem("cart");
  const cartItems = JSON.parse(cart) || [];
  if (cartItems.find(item  => item.id == product.id)) {
    return;
  }
  cartItems.push({...product, quantity: 1,size: "M"}); //обьект курады
  localStorage.setItem("cart", JSON.stringify(cartItems)); //object-JSON
  window.location.reload() //страница автоматический обновляется
}

function isAddedToCart(product) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  return cart.find((p) => p.id == product.id) != null;
}



const cards = document.querySelector(".cards");
clothes.forEach((product) => {
  cards.appendChild(createCard(product));
});
