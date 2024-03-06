const url = window.location.search;
console.log(url)

const id = url.split("id=")[1];
console.log(id)
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
console.log(JSON.stringify(clothes)) //JS ке айналдырып аламыз


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

const urll="https://65e7dca753d564627a8f5bd1.mockapi.io/clothe";
fetch(urll)
  .then((response)=>response.json())
// .then((data)=>data.results)
  .then((data)=>{
    data.forEach((product) => {
      newcart.appendChild(createCard(product));
      });

      const image=document.querySelectorAll(".cvimg-classimg-class")

      for (const img of image){
        img.addEventListener("mouseenter",() => {
          img.style.transform= "scale(1.1)"
        })
        img.addEventListener("mouseleave",() => {
          img.style.transform="scale(1)"
        })
      }
})


//2 инши карта
const categories = [
  // {
  //   id: 1,
  //   imgUrl: "https://media.tommy.com/us/static/images/scheduled_marketing/2024/02/16_Spl_ExpMore01_dt.jpg",
  //   button: "LEARN MORE",
  //   texth4: "Enter for a chance to win a trip to New York City for you & a friend. Visit the  city where we started our iconic  heritage style and get an exclusive lookat the Tommy Hilfiger product archives. Now through March 13",
  //   category: "HILFIGER CLUB EXCLUSIVE"
  // },
  // {
  //   id: 2,
  //   imgUrl: "https://media.tommy.com/us/static/images/scheduled_marketing/2022/01/TILEUPADTE_2.jpg",
  //   button: "LEARN MORE",
  //   texth4: "Read all about our latest collaborations, capsules and collections, as well as programs and initiatives inspired by you. We're always up to something interesting, see what's new.",
  //   category: "TOMMY STORIES"
  // },
  // {
  //   id: 3,
  //   imgUrl:"https://media.tommy.com/us/static/images/scheduled_marketing/2024/02/06_Spl_ExpMore03_dt.jpg",
  //   button: "SHOP NOW",
  //   texth4: "Our favorites (and yours) — wardrobe staples for wearing now and layering up later.",
  //   category: "TOMMY ESSENTIALS"
  // },
  // {
  //   id: 4,
  //   imgUrl:"https://media.tommy.com/us/static/images/scheduled_marketing/2023/09/21_Spl_ExpMore04_dt.jpg",
  //   button: "LEARN MORE",
  //   texth4: "Fresh new Tommy styles with innovative design solutions that make getting dressed easier for everyone.",
  //   category: "TOMMY ADAPTIVE"
  // },
];

console.log(JSON.stringify(categories))

function createExploreCategories(categories) {

const exploreCategories = document.querySelector(".explore-categories");

  const exploreMore = document.createElement('div');
  exploreMore.className = 'explore-categories-more';
  exploreCategories.appendChild(exploreMore);

  categories.forEach(category => {
    const card = document.createElement('div');
    card.className = 'explore-cards';

    const img = document.createElement('img');
    img.src = category.imgUrl;
    img.alt = `${category.category} Image`;
    card.appendChild(img);

    const button = document.createElement('button');
    button.className = 'btn-reset';
    button.textContent = category.button;
    card.appendChild(button);

    const categoryTitle = document.createElement('p');
    categoryTitle.textContent = category.category;
    card.appendChild(categoryTitle);

    const promoMessage = document.createElement('h4');
    promoMessage.innerHTML = category.texth4;
    card.appendChild(promoMessage);

    exploreCategories.appendChild(card);
  });


}
createExploreCategories(categories);

//
const urlll="https://65e7dca753d564627a8f5bd1.mockapi.io/categories";
fetch(url) //серверге запрос жибереди ,если истеcе then,истемесе catch
  .then((response)=>response.json())
// .then((data)=>data.results)
  .then((data)=>{
    data.forEach((product) => {
      newcart.appendChild(createCard(product));
      });

      const image=document.querySelectorAll(".cvimg-classimg-class")

      for (const img of image){
        img.addEventListener("mouseenter",() => {
          img.style.transform= "scale(1.1)"
        })
        img.addEventListener("mouseleave",() => {
          img.style.transform="scale(1)"
        })
      }
})
