// hàm kiểm tra rỗng

let kiemTraRongName = (value, idErr) => {
  if (value.name == "") {
    document.getElementById(idErr).innerHTML = "Tên không hợp lệ!";
    return false;
  }
  document.getElementById(idErr).innerHTML = "";
  return true;
};
let kiemTraRongPrice = (value, idErr) => {
  if (value.price == "") {
    document.getElementById(idErr).innerHTML = "Giá không hợp lệ!";
    return false;
  }
  document.getElementById(idErr).innerHTML = "";
  return true;
};

let kiemTraRongScreen = (value, idErr) => {
  if (value.screen == "") {
    document.getElementById(idErr).innerHTML = "Screen không hợp lệ!";
    return false;
  }
  document.getElementById(idErr).innerHTML = "";
  return true;
};
let kiemTraRongBackCamera = (value, idErr) => {
  if (value.backCamera == "") {
    document.getElementById(idErr).innerHTML = "Back Camera không hợp lệ!";
    return false;
  }
  document.getElementById(idErr).innerHTML = "";
  return true;
};
let kiemTraRongFrontCamera = (value, idErr) => {
  if (value.frontCamera == "") {
    document.getElementById(idErr).innerHTML = "Front Camera Giá không hợp lệ!";
    return false;
  }
  document.getElementById(idErr).innerHTML = "";
  return true;
};
let kiemTraRongImage = (value, idErr) => {
  if (value.img == "") {
    document.getElementById(idErr).innerHTML = "Image không hợp lệ!";
    return false;
  }
  document.getElementById(idErr).innerHTML = "";
  return true;
};
let kiemTraRongDesc = (value, idErr) => {
  if (value.desc == "") {
    document.getElementById(idErr).innerHTML = "Mô tả không hợp lệ!";
    return false;
  }
  document.getElementById(idErr).innerHTML = "";
  return true;
};
let kiemTraRongType = (value, idErr) => {
  if (value.type == "") {
    document.getElementById(idErr).innerHTML = "Loại không hợp lệ!";
    return false;
  }
  document.getElementById(idErr).innerHTML = "";
  return true;
};

export {
  kiemTraRongName,
  kiemTraRongPrice,
  kiemTraRongScreen,
  kiemTraRongBackCamera,
  kiemTraRongFrontCamera,
  kiemTraRongImage,
  kiemTraRongDesc,
  kiemTraRongType,
};
