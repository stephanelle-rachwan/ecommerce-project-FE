window.onload = function () {
  var display_items = document.getElementById("display_items");

  axios({
    method: "get",
    url: "http://127.0.0.1:8000/api/v1/admin/items",
  }).then(function (response) {
    var items = response.data.items;
    for (var i = 0; i < items.length; i++) {
      console.log(i);
      const card = document.createElement("tr");
      card.innerHTML =
        ` 
      <td>${items[i]["id"]}</td>
      <td>${items[i]["item_name"]}</td>
      <td>${items[i]["price"]}</td>
      <td>${items[i]["description"]}</td>
      <td><img class="img-sizing" src="data:image/png;base64,${items[i]["image"]}"></td>
      <td>${items[i]["category_id"]}</td>`;

      display_items.appendChild(card);
    }
  });
};
