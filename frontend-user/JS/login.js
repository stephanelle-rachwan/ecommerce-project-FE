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
    // console.log(json) //to get the json
    // console.log(json.data) //to get the data 
    // console.log(json.data.access_token) //to get the token

    // gets the token and puts it in the local storage to save the token/session
    localStorage.setItem("access_token",json.data["access_token"] )
    window.location.href="../index.html"
})
})