import ApiService from "@/common/api.service";
import { 
GROUPS_INDEX,
GROUP_VIEW,
GROUP_EDIT,
GROUP_DELETE,
GROUP_DELETESTUDENT,
GROUP_ADDSTUDENT,
GROUP_CREATE

} from "../actions.type";


import {
SET_GROUPS
 } from "../mutations.type";

const state = {
 groups: []
};

const getters = {
  groups(state) {
 	return groups.state
 }
};

const actions = {
  [GROUPS_INDEX](context, data){
  	return ApiService.post("group/list", data).then( result => {
  		context.commit(SET_GROUPS, result );
  		return Promise.resolve(result)
  	})
  },
  [GROUP_VIEW](context, data) {
    return ApiService.post("group/view", data);
  },
  [GROUP_EDIT](context, data) {
    return ApiService.post("group/edit", data);
  },
  [GROUP_DELETE](context, data) {
    return ApiService.post("group/delete", data);
  },
  [GROUP_DELETESTUDENT](context, data) {
    return ApiService.post("group/deleteStudent", data);
  },
  [GROUP_ADDSTUDENT](context, data){
    return ApiService.post("group/add", data);
  },
  [GROUP_CREATE](context, data) {
    return ApiService.post("group/create", data);
  }
  
};

const mutations = {
 [SET_GROUPS](context, data){
 	context.groups = data
 }
};

export default {
  state,
  actions,
  mutations,
  getters
};
