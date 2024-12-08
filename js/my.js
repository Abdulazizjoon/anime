import { createCards } from "./function.js";
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let carousel = document.querySelector(".carousel");
let items = carousel.querySelectorAll(".list .item");
let indicator = carousel.querySelector(".indicators");
let dots = indicator.querySelectorAll(".indicators ul li");

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;
let autoPlay;

const startAutoPlay = () => {
  clearInterval(autoPlay);
  autoPlay = setInterval(() => {
    nextBtn.click();
  }, 5000);
};
startAutoPlay();

const setSlider = () => {
  let itemActiveOld = carousel.querySelector(".list .item.active");
  if (itemActiveOld) itemActiveOld.classList.remove("active");
  items[active].classList.add("active");

  let dotActiveOld = indicator.querySelector(".indicators ul li.active");
  if (dotActiveOld) dotActiveOld.classList.remove("active");
  dots[active].classList.add("active");

  indicator.querySelector(".number").innerText = "0" + (active + 1);
  startAutoPlay();
};
setSlider();

nextBtn.onclick = () => {
  active = active + 1 > lastPosition ? 0 : active + 1;
  carousel.style.setProperty("--calculation", 1);
  setSlider();
};
prev.onclick = () => {
  active = active - 1 < firstPosition ? lastPosition : active - 1;
  carousel.style.setProperty("--calculation", -1);
  setSlider();
  clearInterval(autoPlay);
  autoPlay = setInterval(() => {
    nextBtn.click();
  }, 5000);
};
dots.forEach((item, position) => {
  item.onclick = () => {
    active = position;
    setSlider();
  };
});

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
let wrapper = document.getElementById("wrapper");
let serach=document.querySelector(".search")
let search = "https://api.jikan.moe/v4/anime?q=${nomi}";
let testts = "https://api.jikan.moe/v4/top/anime?type=movie";
let sum = `https://api.jikan.moe/v4/top/anime?type=movie`;
let input = document.querySelector("input");
serach.addEventListener("click", (e) => {
  e.preventDefault();
  sum = input.value;
  fetch(`https://api.jikan.moe/v4/anime?q=${sum}`, {
    mathod: "GET",
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error("Failed to fetch data");
    })
    .then((data) => {
      console.log(data);
      img1.setAttribute("src", data.data[0].images.webp.image_url);
      img2.setAttribute("src", data.data[1].images.webp.image_url);
      img3.setAttribute("src", data.data[2].images.webp.image_url);
      document.querySelector(".categor").innerHTML += data.data[0].title;
      document.querySelector(".populations").innerHTML += data.data[0].mal_id;
      document.querySelector(".score").innerHTML += data.data[0].score;
      document.querySelector(".episodes").innerHTML += data.data[0].episodes;
      document.querySelector(".duration").innerHTML += data.data[0].duration;

      //card2
      document.querySelector(".categor1").innerHTML += data.data[1].title;
      document.querySelector(".populations1").innerHTML += data.data[1].mal_id;
      document.querySelector(".score1").innerHTML += data.data[1].score;
      document.querySelector(".episodes1").innerHTML += data.data[1].episodes;
      document.querySelector(".duration1").innerHTML += data.data[1].duration;

      //card3
      document.querySelector(".categor2").innerHTML += data.data[2].title;
      document.querySelector(".populations2").innerHTML += data.data[2].mal_id;
      document.querySelector(".score2").innerHTML += data.data[2].score;
      document.querySelector(".episodes2").innerHTML += data.data[2].episodes;
      document.querySelector(".duration2").innerHTML += data.data[2].duration;
        wrapper.innerHTML = "";

      data.data.forEach((item) => {
        if (item.title.length > 6) {
          item.title = item.title.slice(0, 15) + " . . .";
        }

        const card = createCards({
          image: item.images.webp.image_url,
          name: item.title,
          id: item.mal_id,
        });
        wrapper.innerHTML += card;
      });
    })
    .catch((err) => {
      console.log(err);
      let a404 = '404 page 🤷‍♂️'
      a404.style.textAlign='center'
      wrapper.innerHTML=a404
    });
});

document.addEventListener("DOMContentLoaded", function () {
  fetch(`https://api.jikan.moe/v4/top/anime?type=movie`, {
    method: "GET",
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error("Failed to fetch data");
    })
    .then((data) => {
      console.log(data);
      img1.setAttribute("src", data.data[0].images.webp.image_url);
      img2.setAttribute("src", data.data[1].images.webp.image_url);
      img3.setAttribute("src", data.data[2].images.webp.image_url);
      document.querySelector(".categor").innerHTML += data.data[0].title;
      document.querySelector(".populations").innerHTML += data.data[0].mal_id;
      document.querySelector(".score").innerHTML += data.data[0].score;
      document.querySelector(".episodes").innerHTML += data.data[0].episodes;
      document.querySelector(".duration").innerHTML += data.data[0].duration;

      //card2
      document.querySelector(".categor1").innerHTML += data.data[1].title;
      document.querySelector(".populations1").innerHTML += data.data[1].mal_id;
      document.querySelector(".score1").innerHTML += data.data[1].score;
      document.querySelector(".episodes1").innerHTML += data.data[1].episodes;
      document.querySelector(".duration1").innerHTML += data.data[1].duration;

      //card3
      document.querySelector(".categor2").innerHTML += data.data[2].title;
      document.querySelector(".populations2").innerHTML += data.data[2].mal_id;
      document.querySelector(".score2").innerHTML += data.data[2].score;
      document.querySelector(".episodes2").innerHTML += data.data[2].episodes;
      document.querySelector(".duration2").innerHTML += data.data[2].duration;

      //cards
      // document.querySelector('.card_img').setAttribute("src", data.data[3].images.webp.image_url);

      // document.querySelector(".card_name1").innerHTML += data.data[3].title;

      // let card_img = document.querySelectorAll('.card_img')
      // let sum = 4;

      // for (let i = 0; i < card_img.length; i++) {
      //   card_img[i].setAttribute("src", data.data[sum].images.webp.image_url);
      //   sum++
      //   console.log(card_img[i]);
      // }

      //createCard
      data.data.forEach((item) => {
        if (item.title.length > 6) {
          item.title = item.title.slice(0, 15) + " . . .";
        }

        const card = createCards({
          image: item.images.webp.image_url,
          name: item.title,
          id: item.mal_id,
        });
        wrapper.innerHTML += card;
      });

      //card clicked
    })
    .catch((err) => {
      console.log(err);
    });
});
wrapper.addEventListener("click", (e) => {
  const btnCard = e.target.closest(".btncard");
  if (btnCard) {
    const id = btnCard.dataset.id;
    console.log(`Clicked card ID: ${id}`);
    window.open("http://127.0.0.1:5500/pages/api.html");
  }
});
