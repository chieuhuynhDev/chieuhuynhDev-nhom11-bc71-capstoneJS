const urlApi = "https://66be191d74dfc195586e92dd.mockapi.io/Products/";

// get list Phone
let getListPhoneServ = async () => {
  let result = await axios({
    url: urlApi,
    method: "GET",
  });
  return result.data;
};

// delete phone
let deletePhoneServ = (id) => {
  let result = axios({
    url: `${urlApi}/${id}`,
    method: "DELETE",
  });
  return result;
};

// create
let creatPhoneServ = (phone) => {
  return axios({
    url: urlApi,
    method: "POST",
    data: phone,
  });
};
// get api id
let getDetailServ = (id) => {
  return axios({
    url: `${urlApi}/${id}`,
    method: "GET",
  });
};

// update phone
let updatePhoneServ = (id, phone) => {
  return axios({
    url: `${urlApi}/${id}`,
    method: "PUT",
    data: phone,
  });
};

export {
  getListPhoneServ,
  deletePhoneServ,
  creatPhoneServ,
  getDetailServ,
  updatePhoneServ,
};
