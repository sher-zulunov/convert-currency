import Vue from "vue";
import App from "./App.vue";
import store from "./store/index";
import router from './router'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  english: {
    message: {
      value: 'Convert',
      chart: 'Chart',
      result: 'Result is:',
      placeholder: 'what to convert',
      number: '#',
      currency: 'Currency',
      usd: ' USD',
      rub: ' RUB',
      rate: 'Rate'
    }
  },
  русский: {
    message: {
      value: 'Конвертировать',
      chart: 'Курс валют',
      result: 'Результат:',
      placeholder: 'что конвертировать?',
      number: '№',
      currency: 'Валюта',
      usd: ' долларов',
      rub: ' рублей',
      rate: 'Курс'
    }
  },
};

const i18n = new VueI18n({
  locale: 'english',
  messages
});


Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  router,
  i18n
 

}).$mount("#app");
