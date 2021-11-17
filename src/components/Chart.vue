<template>
  <div>
    <select
      v-model="$i18n.locale"
      class="mx-5"
      @change="langChanged()"
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
          class="nav-link"
          href="#/"
        >{{ $t('message.value') }}</a>

      </li>
      <li class="nav-item">
        <a
          class="nav-link active"
          href="#/chart"
        >{{ $t('message.chart') }}</a>
      </li>
    </ul>
    <div class="container col-sm-3">
      <div class="row">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col-1">{{ $t('message.number') }}</th>
              <th scope="col-3">{{ $t('message.currency') }}</th>
              <th scope="col-2">{{ $t('message.rate') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(value, name, num) in info"
              :key="name"
            >
              <td>{{num+1}}</td>
              <td>{{name}}</td>
              <td>{{value}}</td>
            </tr>
          </tbody>
        </table>
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
      info: null,
      converted: null,
      langs: ["english", "русский"],
    };
  },

  methods: {
    langChanged() {
      if (this.$i18n.locale == "english") {
        axios
          .get(
            "https://freecurrencyapi.net/api/v2/latest?apikey=c539a6d0-475c-11ec-b3f1-ed5902cc8592&base_currency=USD"
          )
          .then((response) => (this.info = response.data.data))
          .catch((error) => console.log(error));
        console.log("helllo");
      } else if (this.$i18n.locale == "русский") {
        axios
          .get(
            "https://freecurrencyapi.net/api/v2/latest?apikey=c539a6d0-475c-11ec-b3f1-ed5902cc8592&base_currency=RUB"
          )
          .then((response) => (this.info = response.data.data))
          .catch((error) => console.log(error));
        console.log("Привет");
      }
    },
  },

  mounted() {
    if (this.$i18n.locale == "english") {
      axios
        .get(
          "https://freecurrencyapi.net/api/v2/latest?apikey=c539a6d0-475c-11ec-b3f1-ed5902cc8592&base_currency=USD"
        )
        .then((response) => (this.info = response.data.data))
        .catch((error) => console.log(error));
      console.log("helllo");
    } else if (this.$i18n.locale == "русский") {
      axios
        .get(
          "https://freecurrencyapi.net/api/v2/latest?apikey=c539a6d0-475c-11ec-b3f1-ed5902cc8592&base_currency=RUB"
        )
        .then((response) => (this.info = response.data.data))
        .catch((error) => console.log(error));
      console.log("Привет");
    }
  },
};
</script>