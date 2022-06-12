let submit = document.getElementById("submit");
  
let user_name = document.getElementById("user-name");
let user_email = document.getElementById("user-email");
let user_password = document.getElementById("user_password");
let confirm_password = document.getElementById("confirm_password");
submit.addEventListener("click", function (e) {
  // to prevent the default refreshing behavior
  e.preventDefault();
  data=new FormData();
  data.append("name", user_name.value);
  data.append("email", user_email.value);
  data.append("password", user_password.value);
  data.append("password_confirmation", confirm_password.value);
  data.append("role", 0);
  
  axios({
    method: 'POST',
    url:"http://127.0.0.1:8000/api/v1/user/register" ,
    data:data,
}).then(function (json) {
    window.location.href="login.html"
})
})