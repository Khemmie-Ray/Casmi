const cardimages = document.querySelector(".cardImg");
const imageContainer = document.querySelector(".col-1");

const link = "https://api.pexels.com/v1/search?query=fashion";
// const link2 = "https://api.pexels.com/v1/search?query=advert"

fetch(link, {
  headers: {
    Authorization: "563492ad6f91700001000001e5d5954abf8346b5855754a95ff3cd2d",
  },
  cache: "force-cache",
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    console.log(data.next_page);

    // for (let i = 0; i < 15; i++) {
    //     let result = data.photos[i].src.tiny;
    //     let imgEl = `
    //     <img src=${result} alt="" class="cardImg" data-id=${data.photos[i].id}>`
    //     imageContainer.innerHTML += imgEl;
    //     }

    const products = data.photos.map((product) => {
      return `<div class="card" onclick='getProduct(${JSON.stringify(product)})'><img src=${
        product.src.tiny
      } alt="" class="cardImg" data-id=${product.id}/></div>`;
    });

    imageContainer.innerHTML = products;
  });

  const getProduct = (product) => {
    console.log(product)
    localStorage.setItem("product", JSON.stringify(product))
    const url = window.location.href.replace("shop.html", "product.html");
    window.location.href = url;
  }