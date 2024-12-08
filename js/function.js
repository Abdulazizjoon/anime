function createCards(data) {
  return `
    <div class="w-[230px]  rounded-lg cursor-pointer relative btn_card" data-id="${data.id}">
        <img class="card_img absolute rounded-lg h-96 -z-10 ml-3" src="${data.image}" alt="" />
        <div class="flex">
          <p class="cursor-pointer">
            <i
              class="fa-brands fa-square-web-awesome-stroke text-2xl ml-5 mt-3 text-[#f5a23e]"
            ></i>
          </p>
          <p class="cursor-pointer">
            <i
              class="fa-regular fa-heart text-[#f5a23e] text-2xl ml-40 mt-3"
            ></i>
          </p>
        </div>
        <div class="flex gap-3 mt-56 ml-5 pl-5 shadow-card">
          <p class="h-10 w-1 bg-[#f5a23e]"></p>
          <p class="card_name1 w-36">name: ${data.name}</p>
        </div>
      </div>
    `;
}







export{createCards}
