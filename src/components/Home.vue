<template>
  <div>
    <NavBar :items="navbar" />
    <div class="container">
      <div class="panel">
        <h2>Informações atuais:</h2>
        <img src="https://s3.static.brasilescola.uol.com.br/be/2021/02/covid-19.jpg" />
        <h3>Última atualização: </h3>
        <p>Confirmados: {{brazil.confirmed}}</p>
        <p>Recuperados: {{brazil.recovered}}</p>
        <p>Óbitos: {{brazil.deaths}}</p>
        <p>População: {{brazil.population}}</p>
      </div>

      <div class="menu">
        <h3>Casos por:</h3>
        <p>Estados Brasileiros</p>
        <router-link class="btn" to="/estados">Acessar</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import { Api } from "../services/Api";

export default {
  name: "Home",
  props: {},
  components: {
    NavBar
  },
  data() {
    return {
      navbar: {
        covid: "Covid-19",
        title: "Brasil"
      },
      brazil: "",
      btnTitle: "Acessar"
    };
  },
  mounted() {
    Api.getBrazil().then(resp => (this.brazil = resp.data.All));
  }
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  max-width: 900px;
  display: grid;
  grid-template-columns: 70% 30%;
}

.panel{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 600px;
}

.panel img{
  width: 80%;
  border-radius: 15px;
  box-shadow: 5px 5px 8px #561008;
}

.menu{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.menu h3, p{
  margin: 1%;
}

.btn {
  text-decoration: none;
  padding: 7px 20px;
  border-radius: 15px;
  border: #990000;
  background-color: #990000;
  color: aliceblue;
  cursor: pointer;
  display: flex;
  align-self: flex-end;
  margin-top: 3%;
}

.btn:hover {
  background-color: #f51219;
}
</style>