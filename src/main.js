import Vue from "vue";
import Vuelidate from "vuelidate";
import money from "v-money";

import App from "./App.vue";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import Snotify from "vue-snotify"; // 1. Import Snotify
import VueI18n from "vue-i18n";
import translations from "./langs";
import store from "./store";
import ApiService from "@/common/api.service";
// import "./registerServiceWorker";

Vue.use(Snotify);
Vue.use(money, { precision: 0 });

Vue.use(BootstrapVue);
Vue.use(Vuelidate);

Vue.config.productionTip = false;
ApiService.init(store);

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "es",
  messages: translations
});

var Store = store;
Vue.directive("can", {
  bind(el, binding) {
    var user = Store.state.auth.user;
    if (user.Rol.permissions.indexOf(binding.value) == -1) {
      el.style.display = "none";
    }
  }
});

Vue.mixin({
  methods: {
    replaceAll: function(target, search, replacement) {
      return ("" + target).split(search).join(replacement);
    },
    money: n => {
      var c = 0,
        d = ",",
        t = ".",
        s = n < 0 ? "-" : "",
        i = String(parseInt((n = Math.abs(Number(n) || 0).toFixed(c)))),
        j = (j = i.length) > 3 ? j % 3 : 0;
      return (
        s +
        (j ? i.substr(0, j) + t : "") +
        i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) +
        (c
          ? d +
            Math.abs(n - parseInt(i))
              .toFixed(c)
              .slice(2)
          : "")
      );
    },

    formatDate: date => {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    },

    overflowText: (text, char_counter = 50) => {
      if (text.length > char_counter) {
        return text.substr(0, 5) + "..." + text.substr(-5);
      }

      return text;
    },
    paginate: (page, paginate) => {
      if (!paginate.to) {
        return [];
      }
      var offset = 5;
      var from = paginate.current_page - offset;
      if (from < 1) {
        from = 1;
      }

      var to = from + offset * 2;
      if (to >= paginate.last_page) {
        to = paginate.last_page;
      }

      var pagesArray = [];
      while (from <= to) {
        pagesArray.push(from);
        from++;
      }
      return pagesArray;
    },

    showData: function(miner, key) {
      var data = miner[key];

      var type = miner.type_miner;
      var unitName = type ? type.unitName : "TH/S";
      var perType = type ? type.units : 1;
      if (!data) return 0;

      try {
        (data * perType) / 1000;
      } catch (e) {
        return;
      }

      var number = Math.floor(((data * perType) / 1000) * 100) / 100;
      //number = this.money(number, 2, '.', ',');

      return number + " " + unitName;
    },

    round: function(number, key) {
      return Math.floor(number * 10 ** key) / 10 ** key;
    }
  }
});

var vue = new Vue({
  i18n,
  store,
  router,
  render: h => h(App)
}).$mount("#app");
ApiService.setVue(vue);
