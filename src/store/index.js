import Vue from "vue";
import Vuex from "vuex";

import auth from "./modules/auth.module";
import report from "./modules/report.module";
import question from "./modules/question.module";
import groups from "./modules/groups.module";
import students from "./modules/students.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    report,
    question,
    groups,
    students
  }
});
