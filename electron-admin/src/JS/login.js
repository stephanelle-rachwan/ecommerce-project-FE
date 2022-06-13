let submit = document.getElementById("submit");
 
  let user_email = document.getElementById("user-email");
  var user_password = document.getElementById("user-password");

  submit.addEventListener("click", function (e) {
    e.preventDefault();
    url="http://127.0.0.1:8000/api/v1/admin/login"
    url+="?email="+user_email.value
    axios({
      method: 'GET',
      url:url ,
  }).then(function (json) {
      // console.log(json) //to get the json
      // console.log(json.data) //to get the data 
      // console.log(json.data.access_token) //to get the token
      console.log(json.data[0]["password"])
      console.log(json)
      // gets the token and puts it in the local storage to save the token/session
      if( json.data[0]["role"]==1 && user_password.value==json.data[0]["password"]){
        console.log("HEYY")
        window.location.href="pages/users.html"
      localStorage.setItem("access_token",json.data["access_token"] )}
  
      // 
  }).catch(function(error){
    alert("wrong username or password")
  })
  })