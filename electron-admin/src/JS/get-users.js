window.onload = function () {
  var display_users = document.getElementById("display_users");

  axios({
    method: "get",
    url: "http://127.0.0.1:8000/api/v1/admin/users",
  }).then(function (response) {
    var users = response.data.users;
    for (var i = 0; i < users.length; i++) {
      console.log(i);
      const card = document.createElement("tr");
      card.innerHTML =
        ` 
      <td>${users[i]["id"]}</td>
      <td>${users[i]["name"]}</td>
      <td>${users[i]["email"]}</td>
      `

      display_users.appendChild(card);
    }
  });
};