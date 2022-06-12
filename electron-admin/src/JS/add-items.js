  let item_name = document.getElementById('item-name');
  let price = document.getElementById('item-price');
  let description = document.getElementById('item-description');
  let category_id = document.getElementById('category-id');
  let image = document.getElementById('image-profile');

  document.getElementById('submitBtn').addEventListener("click", submitFct);

  function submitFct() {

      var base64String = "";
      const selectedFile = image.files[0];
      var reader = new FileReader();

      reader.onload = function () {
        base64String = reader.result.replace("data:", "")
          .replace(/^.+,/, "");

        console.log(base64String);

        let mydata = new FormData();
        mydata.append("item_name", item_name.value);
        mydata.append("price", price.value);
        mydata.append("description", description.value);
        mydata.append("category_id", category_id.value);
        mydata.append("image", base64String);

        axios({
          method: 'post',
          url:"http://127.0.0.1:8000/api/v1/admin/add-items" ,
          data: mydata,
        })
          .then(function (response) {
            modal.style.display="none";
            document. location. reload();
          })

      }
      reader.readAsDataURL(selectedFile);
      // document. location. reload();
    }