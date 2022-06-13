  window.onload = function () {
    var item_display = document.getElementById("display_items");
    axios({
      method: "get",
      url: "http://127.0.0.1:8000/api/v1/user/all-items",
    }).then(function (response) {
      var items = response.data.items;
      console.log(items)
      for (var i = 0; i < items.length; i++) {
        console.log(items[i]);
        const card = document.createElement("div");
        card.classList.add('item-box');
        card.innerHTML = `
        <div class="item-image">
          <img src="data:image/png;base64,${items[i]["image"]}" alt="">
        </div>
        <div class="item-info">
          <div class="item-text">
            <h3>${items[i]["item_name"]}</h3>
            <p>${items[i]["description"]}</p>
            <p>${items[i]["price"]}</p>
          </div>
          <div class="item-like">
            <div class="fa-solid fa-heart" onclick=addLike(this)></div>
          </div>
        </div>
      `;
        item_display.appendChild(card);
      }
    });
  };
  