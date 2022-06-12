  var category_display = document.getElementById("display_categories");
  axios({
    method: "get",
    url: "http://127.0.0.1:8000/api/v1/user/all-categories",
  }).then(function (response) {
    
    var categories = response.data.categories;
    console.log(categories)

    for (var i = 0; i < categories.length; i++) {
      console.log(categories[i]);
      const cat_list = document.createElement("li");
      // cat_list.classList.add('item-box');
      cat_list.innerHTML = `
      <a href="#">${categories[i]["category_name"]}</a>
    `;
      category_display.appendChild(cat_list);
    }
  });