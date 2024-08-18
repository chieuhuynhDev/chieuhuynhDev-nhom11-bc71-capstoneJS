// Lấy Data
let callApi = "https://66be191d74dfc195586e92dd.mockapi.io/Products/";
function getList() {
  return axios({
    url: callApi,
    method: "GET",
  });
}
