<template>
  <div>
    <NavBar :items="navbar" />
    <div v-for="map in details" :key="map">
      <div class="state" v-if="map.uf === uf">
      <h1>{{uf}}</h1>
      <img
        :src='map.map'
      />
      <div class="dados">
        <h3>Casos confirmados:</h3>
        <p>{{state.confirmed}}</p>
        <h3>Recuperados:</h3>
        <p>{{state.recovered}}</p>
        <h3>Óbitos:</h3>
        <p>{{state.deaths}} pessoas</p>
      </div>
      </div>

    </div>

</div>
</template>

<script>
import NavBar from "./NavBar";
import { Api } from "../services/Api";
import { Maps } from "../services/Maps";

export default {
  name: "StatesDetails",
  components: {
    NavBar
  },
  data() {
    return {
      navbar: {
        covid: "Covid-19",
        title: "Estados",
      },
      uf: "", //parametro url
      state: '', //objeto que vem da API
      details: [], //objeto para linkar o mapa
    };
  },
  methods: {

  },
  mounted() {
    this.uf = this.$route.params.uf;

    Api.getBrazil().then(resp => this.state = resp.data[`${this.$route.params.uf}`]);

    Maps.forEach(m => this.details.push(m));
  }
};
</script>

<style scoped>
.dados {
  display: grid;
}

.state {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto auto;
  border: #990000 2px solid;
  border-radius: 15px;
  align-items: center;
  padding: 50px;
  margin: 30px 300px 20px 300px;
}

img {
  width: 300px;
  height: 300px;
  border: #fff 2px solid;
  border-radius: 15px;
  padding: 0px;
}

h1 {
  color: black;
  text-align: center;
}
</style>