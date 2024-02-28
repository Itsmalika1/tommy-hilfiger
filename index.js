const url = window.location.search;
console.log(url)

// const id = url.split("id=")[1];
// console.log(id)
// 1 инши карта
const clothes = [
  // {
  //   id: 1,
  //   imgUrl: "https://media.tommy.com/us/static/images/scheduled_marketing/2024/02/06_Spl_Cat01.jpg",
  //   category: "MEN'S POLOS",
  // },
  // {
  //   id: 2,
  //   imgUrl: "https://media.tommy.com/us/static/images/scheduled_marketing/2024/02/06_Spl_Cat02.jpg",
  //   category: "MEN'S BOTTOMS",
  // },
  // {
  //   id: 3,
  //   imgUrl:"https://media.tommy.com/us/static/images/scheduled_marketing/2024/02/06_Spl_Cat03.jpg",
  //   category: "WOMEN'S SWEATERS",
  // },
  // {
  //   id: 4,
  //   imgUrl:"https://media.tommy.com/us/static/images/scheduled_marketing/2024/02/06_Spl_Cat04.jpg",
  //   category: "WOMEN'S BOTTOMS",
  // },
];
// console.log(JSON.stringify(clothes))


function createCard(product) {
  const { id, imgUrl, price, brand, category } = product;

  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.classList.add("img-class")
  img.src = imgUrl;
  img.alt = "";

  const descriptionPara = document.createElement("p");
  descriptionPara.textContent = category;

  const button = document.createElement("button");
  button.textContent = "Learn More";
  button.addEventListener("click", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));
  });

  // if (isAddedToCart(product)) {
  //   button.textContent = "Added to cart"
  //   button.enabled = false;
  //
  // } else {
  //   button.textContent =   "Add to cart";
  //   button.addEventListener("click", () => {
  //       addToCart(product);
  //     });
  // }

  card.appendChild(img);
  card.appendChild(descriptionPara);
  card.appendChild(button);

  card.addEventListener('click',() => {
    window.location.href = `second_page.html?id=${product.id}`
  })

  return card;
}

let newcart = document.querySelector('.cards')
for(let rest of clothes){
    let card = createCard(rest)
    newcart.appendChild(card)
}

const urll="https://65dd4afce7edadead7eda117.mockapi.io/cart-malika"
fetch(urll)
  .then((response)=>response.json())
// .then((data)=>data.results)
  .then((data)=>{
    data.forEach((product) => {
      newcart.appendChild(createCard(product));
      });

      const image=document.querySelectorAll(". cvimg-classimg-class")

      for (const img of image){
        img.addEventListener("mouseenter",() => {
          img.style.transform= "scale(1.1)"
        })
        img.addEventListener("mouseleave",() => {
          img.style.transform="scale(1)"
        })
      }
})









// function createDropdownMenu() {
//   // Create the main dropdown container
//   const dropdown = document.createElement('div');
//   dropdown.className = 'dropdown';
//
//   // Create the link for 'New Arrivals'
//   const newArrivalsLink = document.createElement('a');
//   newArrivalsLink.href = '#';
//   newArrivalsLink.textContent = 'New Arrivals';
//   dropdown.appendChild(newArrivalsLink);
//
//   // Create the dropdown content container
//   const dropdownContent = document.createElement('div');
//   dropdownContent.className = 'dropdown-content';
//
//   // Create the overall div that holds everything inside the dropdown
//   const overAllDiv = document.createElement('div');
//   overAllDiv.className = 'overAll_div';
//
//   // Add image
//   const img = document.createElement('img');
//   img.src = "https://media.tommy.com/us/static/images/scheduled_marketing/2024/02/09_FlyoutNAV_NA_dt.jpg";
//   img.width = 300;
//   overAllDiv.appendChild(img);
//
//   // Create the divs for Men, Women, and Kids sections
//   const sections = [
//     { title: 'Men', links: ['As Seen On', 'New Arrivals', 'Tommy Essentials', 'Wear to Work', 'Logo Shop', 'Vocation Shop'] },
//     { title: 'Women', links: ['As Seen On', 'New Arrivals', 'Tommy Essentials', 'Wear to Work', 'Logo Shop', 'Vocation Shop'] },
//     { title: 'Kids', links: ['New Arrivals', 'Logo Shaop', 'Vocation Shop'] },
//   ];
//
//   sections.forEach((section, index) => {
//     const sectionDiv = document.createElement('div');
//     sectionDiv.className = index === 0 ? 'first_div' : index === 1 ? 'second_div' : 'third_text';
//
//     const title = document.createElement(index === 2 ? 'h1' : 'p');
//     title.innerHTML = `<b>${section.title}</b>`;
//     sectionDiv.appendChild(title);
//
//     section.links.forEach(link => {
//       const a = document.createElement('a');
//       a.href = '#';
//       a.textContent = link;
//       sectionDiv.appendChild(a);
//     });
//
//     overAllDiv.appendChild(sectionDiv);
//   });
//
//   dropdownContent.appendChild(overAllDiv);
//   dropdown.appendChild(dropdownContent);
//
//   // Append the dropdown to the body or a specific element on the page
//   document.body.appendChild(dropdown); // You can change 'document.body' to your specific container if needed
// }
//
// // Call the function to create and append the dropdown menu
// createDropdownMenu();



//2 инши карта
const categories = [
  {
    id: 1,
    imgUrl: "https://media.tommy.com/us/static/images/scheduled_marketing/2024/02/16_Spl_ExpMore01_dt.jpg",
    button: "LEARN MORE",
    texth4: "Enter for a chance to win a trip to New York City for you & a friend. Visit the  city where we started our iconic  heritage style and get an exclusive lookat the Tommy Hilfiger product archives. Now through March 13",
    category: "HILFIGER CLUB EXCLUSIVE"
  },
  {
    id: 2,
    imgUrl: "https://media.tommy.com/us/static/images/scheduled_marketing/2022/01/TILEUPADTE_2.jpg",
    button: "LEARN MORE",
    texth4: "Read all about our latest collaborations, capsules and collections, as well as programs and initiatives inspired by you. We're always up to something interesting, see what's new.",
    category: "TOMMY STORIES"
  },
  {
    id: 3,
    imgUrl:"https://media.tommy.com/us/static/images/scheduled_marketing/2024/02/06_Spl_ExpMore03_dt.jpg",
    button: "SHOP NOW",
    texth4: "Our favorites (and yours) — wardrobe staples for wearing now and layering up later.",
    category: "TOMMY ESSENTIALS"
  },
  {
    id: 4,
    imgUrl:"https://media.tommy.com/us/static/images/scheduled_marketing/2023/09/21_Spl_ExpMore04_dt.jpg",
    button: "LEARN MORE",
    texth4: "Fresh new Tommy styles with innovative design solutions that make getting dressed easier for everyone.",
    category: "TOMMY ADAPTIVE"
  },
];

function createExploreCategories(categories) {
  // Create the main container for the categories

const exploreCategories = document.querySelector(".explore-categories");
  // Create and append the 'EXPLORE MORE' section
  const exploreMore = document.createElement('div');
  exploreMore.className = 'explore-categories-more';
  exploreCategories.appendChild(exploreMore);

  // Iterate over each category to create its card
  categories.forEach(category => {
    const card = document.createElement('div');
    card.className = 'explore-cards';

    // Image element
    const img = document.createElement('img');
    img.src = category.imgUrl;
    img.alt = `${category.category} Image`; // Adding meaningful alt text
    card.appendChild(img);

    // Button element
    const button = document.createElement('button');
    button.className = 'btn-reset';
    button.textContent = category.button; // The text is now correctly set from the category.button property
    card.appendChild(button);

    // Category title
    const categoryTitle = document.createElement('p');
    categoryTitle.textContent = category.category;
    card.appendChild(categoryTitle);

    // Promotional message
    const promoMessage = document.createElement('h4');
    promoMessage.innerHTML = category.texth4;
    card.appendChild(promoMessage);

    // Append the card to the main container
    exploreCategories.appendChild(card);
  });

  // Finally, append the main container to the body or a specific element in the document

}

// Assuming the 'categories' array is defined elsewhere in your script,
// you would call the function like so:
createExploreCategories(categories);
