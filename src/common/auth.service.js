const ID_TOKEN_KEY = "id_token";

export const getToken = () => {
  return window.localStorage.getItem(ID_TOKEN_KEY);
};

export const getUser = () => {
  var user = window.localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const saveToken = token => {
  window.localStorage.setItem(ID_TOKEN_KEY, token);
};

export const saveUser = user => {
  window.localStorage.setItem("user", JSON.stringify(user));
};

export const destroyToken = () => {
  window.localStorage.removeItem(ID_TOKEN_KEY);
};

export default { getToken, saveToken, destroyToken, getUser, saveUser };
