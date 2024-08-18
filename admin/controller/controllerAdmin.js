// hàm render show lên UI

let renderPhoneList = (phoneArr) => {
  var contentHTML = "";
  phoneArr.forEach(
    ({ id, name, screen, price, backCamera, frontCamera, img, desc, type }) => {
      let trString = `<tr>
      <td>${id}</td>
      <td>${name}</td>
      <td>${price}</td>
      <td>${screen}</td>
      <td>${backCamera}</td>
      <td>${frontCamera}</td>
      <td><img style=" width: 200px;height: 200px" src="${img}"/></td>
      <td>${desc}</td>
      <td>${type}</td>
      <td> <button class="btn btn-danger" onclick="deletePhoneList('${id}')" >Xóa</button>
      <button class="btn btn-warning" onclick="editPhone('${id}')">Sửa</button> </td>
      </tr>`;
      contentHTML += trString;
    }
  );
  document.getElementById("tbodyPhone").innerHTML = contentHTML;
};

// lấy data từ form

let getDataForm = () => {
  let name = document.getElementById("namePhone").value;
  let price = document.getElementById("pricePhone").value;
  let screen = document.getElementById("screen").value;
  let backCamera = document.getElementById("backCamera").value;
  let frontCamera = document.getElementById("frontCamera").value;
  let img = document.getElementById("imagePhone").value;
  let desc = document.getElementById("description").value;
  let type = document.getElementById("brandPhone").value;

  let phone = {
    name,
    price,
    screen,
    backCamera,
    frontCamera,
    img,
    desc,
    type,
  };

  return phone;
};

// show data Phone on modal
let showDataPhone = (phone) => {
  let { id, name, price, screen, backCamera, frontCamera, img, desc, type } =
    phone;
  document.getElementById("namePhone").value = name;
  document.getElementById("pricePhone").value = price;
  document.getElementById("screen").value = screen;
  document.getElementById("backCamera").value = backCamera;
  document.getElementById("frontCamera").value = frontCamera;
  document.getElementById("imagePhone").value = img;
  document.getElementById("description").value = desc;
  document.getElementById("brandPhone").value = type;
  console.log("🚀 ~ showDataPhone ~ type:", type);
  // gắn id vào modal

  document.getElementById("idPhone").innerHTML = id;
};

// mess khi thành công
let onSucess = (mess) => {
  Swal.fire({
    title: mess,
    icon: "success",
  });
};

// tìm phone
let findPhoneName = (listPhone, searchText) => {
  let arrPhone = listPhone.filter(
    (phone) => phone.name.toLowerCase() == searchText
  );
  return arrPhone;
};

// sort theo gia tăng
let sortIncre = (listPhone) => {
  let arrSortIncre = listPhone.sort((phoneTiepTheo, phone) => {
    return phoneTiepTheo.price - phone.price;
  });
  return arrSortIncre;
};

// sort theo gia tăng
let sortDecre = (listPhone) => {
  let arrSortDecre = listPhone.sort((phoneTiepTheo, phone) => {
    return phone.price - phoneTiepTheo.price;
  });
  return arrSortDecre;
};

export {
  renderPhoneList,
  onSucess,
  getDataForm,
  showDataPhone,
  findPhoneName,
  sortIncre,
  sortDecre,
};
