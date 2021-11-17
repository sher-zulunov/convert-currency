<template>
  <router-view />
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  components: {},
  props: {},
  data() {
    return {
      currency: "",
      info: null,
      converted: null,
    };
  },
  methods: {
    convertCurrency(currency) {
      const currencAmountArray = currency.match(/[0-9]/g);
      const currencAmountJoined = currencAmountArray.join("");
      const currencyFindRub = currency.endsWith("rub");
      if (currencyFindRub == true) {
        const convertedCurrency = currencAmountJoined * this.info.USDRUB;
        this.converted = convertedCurrency;
      } else {
        const convertedCurrency = currencAmountJoined * this.info.RUBUSD;
        this.converted = convertedCurrency;
      }
      this.currency = "";
    },
    // increment() {
    //   this.$store.commit("increment");
    //   console.log(this.$store.state.count);
    // },
  },
  mounted() {
    axios
      .get(
        "https://currate.ru/api/?get=rates&pairs=USDRUB,RUBUSD&key=3ce08307556c65cfb5263155b8df569f"
      )
      .then((response) => (this.info = response.data.data))
      .catch((error) => console.log(error));
  },
};
</script>
