let submit = document.getElementById("submit");
 
  let user_email = document.getElementById("user-email");
  let user_password = document.getElementById("user-password");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  data=new FormData();
  data.append("email", user_email.value);
  data.append("password", user_password.value);

  axios({
    method: 'POST',
    url:"http://127.0.0.1:8000/api/v1/login" ,
    data:data,
}).then(function (json) {
    localStorage.setItem("access_token",json.data["access_token"] )
    window.location.href="./pages/users.html"
})
})