import Vue from "vue";
import Router from "vue-router";
import Game from "./views/Game.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Groups from "./views/Groups.vue";
//import Group from "./views/Group.vue";
import Dashboard from "./views/Dashboard.vue";
import Workshop from "./views/Workshop.vue";
import Question from "./views/Question.vue";
import Upload from "./views/Upload.vue";
import Podium from "./views/Podium.vue";
import Profile from "./views/Profile.vue";
import Ask from "./views/Ask.vue";
import Create from "./views/Create.vue";

Vue.use(Router);

var r = {
  routes: [{
  	name: "game",
  	path: '/game',
  	component: Game
  },
  {
  	name: "login",
  	path: '/login',
  	component: Login
  },
  {
    name: "register",
    path: '/register',
    component: Register

  },
  {
    name: "groups",
    path: '/groups',
    component: Groups
  },
  /*{
    name: "group",
    path: '/group',
    component: Group
  },*/
  {
    name: "dashboard",
    path: '/dashboard',
    component: Dashboard
  },
  {
    name: "workshop",
    path: '/workshop',
    component: Workshop
  },
  {
    name: "question",
    path: '/question',
    component: Question
  },
  {
    name: "upload",
    path: '/upload',
    component: Upload
  },
  {
    name: "podium",
    path: '/podium',
    component: Podium
  },
  {
    name: "profile",
    path: '/profile',
    component: Profile
  },
  {
    name: "ask",
    path: '/ask',
    component: Ask
  },
  {
    name: "create",
    path: '/create',
    component: Create
  }]
};

export default new Router(r);
