import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Buefy from "buefy";

const buefyOpts = {
  defaultIconPack: "mdi", //mdi, fa, fas, far, fad
  defaultTabsType: "is-boxed", //is-boxed, is-toggle
  defaultTooltipType: "is-black", //is-primary
  defaultToastPosition: "is-top",
  defaultFieldLabelPosition: "on-border", //inside,on-border
  defaultIconNext: "chevron-right",
  defaultIconPrev: "chevron-left",
};

Vue.use(Buefy, buefyOpts);

const app = new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
