<template>
  <div>
    <select
      v-model="$i18n.locale"
      class="mx-5"
    >
      <option
        v-for="(lang, i) in langs"
        :key="`lang-${i}`"
        :value="lang"
      >
        {{ lang }}
      </option>
    </select>
    <ul class="nav justify-content-center nav-pills nav-fill mx-5">
      <li class="nav-item">
        <a
          class="nav-link active"
          href="#/"
        >{{ $t('message.value') }}</a>

      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          href="#/chart"
        >{{ $t('message.chart') }}</a>
      </li>
    </ul>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-7 mt-3">
          <h3>{{ $t('message.result') }} {{ converted }} </h3>
        </div>
      </div>
      <div class="row justify-content-center mt-2">
        <div class="col-7">
          <input
            v-model="currency"
            @change="convertCurrency(currency)"
            class="form-control form-control-lg"
            type="text"
            :placeholder="[$t('message.placeholder')]"
            aria-label=".form-control-lg example"
          />
        </div>
      </div>
    </div>
  </div>
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
      USD: null,
      RUB: null,
      converted: null,
      langs: ["english", "русский"],
    };
  },
  methods: {
    convertCurrency(currency) {
      const currencAmountArray = currency.match(/[0-9]/g);
      const currencAmountJoined = currencAmountArray.join("");
      const currencyFindRub = currency.endsWith("rub");
      if (currencyFindRub == true) {
        const convertedCurrency = currencAmountJoined * this.USD.RUB;
        this.converted = convertedCurrency.toFixed(2) + this.$t("message.rub");
      } else {
        const convertedCurrency = currencAmountJoined * this.RUB.USD;
        this.converted = convertedCurrency.toFixed(2) + this.$t("message.usd");
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
        "https://freecurrencyapi.net/api/v2/latest?apikey=c539a6d0-475c-11ec-b3f1-ed5902cc8592&base_currency=USD"
      )
      .then((response) => (this.USD = response.data.data))
      .catch((error) => console.log(error));
    axios
      .get(
        "https://freecurrencyapi.net/api/v2/latest?apikey=c539a6d0-475c-11ec-b3f1-ed5902cc8592&base_currency=RUB"
      )
      .then((response) => (this.RUB = response.data.data))
      .catch((error) => console.log(error));
  },
};
</script>