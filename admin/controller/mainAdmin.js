import {
  creatPhoneServ,
  deletePhoneServ,
  getDetailServ,
  getListPhoneServ,
  updatePhoneServ,
} from "../services/serviceAdmin.js";
import {
  kiemTraRongBackCamera,
  kiemTraRongDesc,
  kiemTraRongFrontCamera,
  kiemTraRongImage,
  kiemTraRongName,
  kiemTraRongPrice,
  kiemTraRongScreen,
  kiemTraRongType,
} from "../services/validation.js";
import {
  findPhoneName,
  getDataForm,
  onSucess,
  renderPhoneList,
  showDataPhone,
  sortDecre,
  sortIncre,
} from "./controllerAdmin.js";

// get api
let fetchPhoneList = async () => {
  let listPhone = await getListPhoneServ();
  renderPhoneList(listPhone);
};

fetchPhoneList();

// delete food
window.deletePhoneList = (id) => {
  console.log(id);
  deletePhoneServ(id)
    .then((result) => {
      fetchPhoneList();
      onSucess("Delete success!");
    })
    .catch((err) => {});
};

// create phone
window.createPhone = () => {
  var data = getDataForm();
  console.log("🚀 ~ data:", data);
  var isValid =
    kiemTraRongName(data, "tbName") &&
    kiemTraRongPrice(data, "tbPrice") &&
    kiemTraRongScreen(data, "tbScreen") &&
    kiemTraRongBackCamera(data, "tbBackCamera") &&
    kiemTraRongFrontCamera(data, "tbFrontCamera") &&
    kiemTraRongImage(data, "tbImage") &&
    kiemTraRongDesc(data, "tbDesc") &&
    kiemTraRongType(data, "tbType");

  if (isValid) {
    creatPhoneServ(data)
      .then((result) => {
        fetchPhoneList();
        $("#exampleModal").modal("hide");
        onSucess("Creat success!");
      })
      .catch((err) => {});
  }
};

// edit phone
window.editPhone = (id) => {
  getDetailServ(id)
    .then((result) => {
      console.log("🚀 ~ .then ~ result:", result);
      showDataPhone(result.data);
      $("#phoneModal").modal("show");
    })
    .catch((err) => {});
};

// update phone

window.updatePhone = () => {
  var id = document.getElementById("idPhone").innerText;
  console.log("🚀 ~ id:", id);
  var phone = getDataForm();
  updatePhoneServ(id, phone)
    .then((result) => {
      // đóng modal sau khi update thành công
      $("#myModal").modal("hide");
      onSucess("Update success!");
      // thành công
      fetchPhoneList();
    })
    .catch((err) => {});
};

// tìm phone
window.searchPhoneName = async () => {
  let listPhone = await getListPhoneServ();
  let searchText = document.getElementById("searchInput").value.toLowerCase();
  console.log("🚀 ~ searchPhoneName ~ arrDataPhone:", listPhone);
  let arrPhoneSearch = findPhoneName(listPhone, searchText);
  console.log("🚀 ~ window.searchPhoneName= ~ arrPhoneSearch:", arrPhoneSearch);

  if (arrPhoneSearch.length != 0) {
    document.getElementById("tbSearch").innerHTML = "";
    renderPhoneList(arrPhoneSearch);
  } else {
    document.getElementById("tbSearch").innerHTML =
      "Không tìm thấy điện thoại này";
  }
};

// sắp xêp sp theo giá
window.handleSortOrderChange = async () => {
  let listPhone = await getListPhoneServ();
  console.log("🚀 ~ window.giaTang= ~ listPhone:", listPhone);
  // lây value select sort
  let selectedPhoneValue = document.getElementById("sortPhone").value;
  console.log(
    "🚀 ~ window.handleSortOrderChange= ~ selectedPhoneValue:",
    selectedPhoneValue
  );

  if (selectedPhoneValue === "incre") {
    // khi select tăng "
    let arrPhoneIncre = sortIncre(listPhone);
    console.log("🚀 ~ window.giaTang= ~ arrPhoneIncre:", arrPhoneIncre);

    renderPhoneList(arrPhoneIncre);
  } else if (selectedPhoneValue === "decre") {
    // khi select giam "
    let arrPhoneDecre = sortDecre(listPhone);
    console.log(
      "🚀 ~ window.handleSortOrderChange ~ arrPhoneDecre:",
      arrPhoneDecre
    );

    renderPhoneList(arrPhoneDecre);
  }
};
