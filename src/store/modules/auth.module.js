import ApiService from "@/common/api.service";
import AuthService from "@/common/auth.service";
import {  
  LOGIN, 
  REGISTER, 
  
} from "../actions.type";


import { SET_AUTH, SET_USERS } from "../mutations.type";

const state = {
  user: AuthService.getUser(),
  users: []
};

const getters = {
  user(state) {
    return state.user;
  },
  users(state) {
    return state.users;
  }

};

const actions = {
  [LOGIN](context, credentials) {
    return ApiService.post("auth/login", credentials).then(data => {
      context.commit(SET_AUTH, data.user);
      return Promise.resolve(data.user);
    });
  },

  [REGISTER](context, credentials) {
    return ApiService.post("auth/register", credentials).then(
      data => {
        context.commit(SET_AUTH, data);
        return Promise.resolve(data);
      }
    );
  },

  
};

const mutations = {
  [SET_AUTH](state, user) {
    state.user = user;

    ApiService.setHeader();
    AuthService.saveToken(state.user.token);
    AuthService.saveUser(state.user);
  },

  [SET_USERS](state, users) {
    state.users = users;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
