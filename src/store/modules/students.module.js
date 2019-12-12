import ApiService from "@/common/api.service";
import { 
ALL_STUDENTS
} from "../actions.type";


import {
SET_STUDENTS
 } from "../mutations.type";

const state = {
 students: []
};

const getters = {
 students(state) {
 	return students.state
 }
};

const actions = {
  [ALL_STUDENTS](context, data){
  	return ApiService.get("groups/list", data).then( result => {
  		context.commit(SET_STUDENTS, result );
  		return Promise.resolve(result)
  	})
  }
  
};

const mutations = {
 [SET_STUDENTS](context, data){
 	context.students = data
 }
};

export default {
  state,
  actions,
  mutations,
  getters
};
