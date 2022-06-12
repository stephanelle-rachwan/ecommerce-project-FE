window.onload = function () {
  var display_categories = document.getElementById("display_categories");

  axios({
    method: "get",
    url: "http://127.0.0.1:8000/api/v1/admin/categories",
  }).then(function (response) {
    var categories = response.data.categories;
    for (var i = 0; i < categories.length; i++) {
      console.log(i);
      const card = document.createElement("tr");
      card.innerHTML =
        ` 
      <td>${categories[i]["id"]}</td>
      <td>${categories[i]["category_name"]}</td>
      `

      display_categories.appendChild(card);
    }
  });
};