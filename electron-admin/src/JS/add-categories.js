let submit = document.getElementById("submitBtn");
 
  let category_name = document.getElementById("category-name");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  data=new FormData();
  data.append("category_name", category_name.value);

  axios({
    method: 'POST',
    url:"http://127.0.0.1:8000/api/v1/admin/add-categories" ,
    data:data,
}).then(function (response) {
  console.log(response);
  // e.parentElement.parentElement.style.display="none";
  modal.style.display="none";
  document. location. reload();
})

})
