<template>
  <div>
    <NavBar :items="navbar" />
    <div class="state" v-if="uf === 'Minas Gerais'">
      <h1>{{uf}}</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Minas_Gerais_in_Brazil.svg/300px-Minas_Gerais_in_Brazil.svg.png"
      />
      <div class="dados">
        <h3>População:</h3>
        <p>21.292.666 pessoas</p>
        <h3>Casos confirmados:</h3>
        <p>{{state.confirmed}}</p>
        <h3>Recuperados:</h3>
        <p>{{state.recovered}}</p>
        <h3>Óbitos:</h3>
        <p>{{state.deaths}} pessoas</p>
      </div>
    </div>

    <div class="state" v-if="uf === 'Acre'">
      <h1>{{uf}}</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Acre_in_Brazil.svg/300px-Acre_in_Brazil.svg.png"
      />
      <div class="dados">
        <h3>População:</h3>
        <p>894.470 pessoas</p>
        <h3>Casos confirmados:</h3>
        <p>{{state.confirmed}}</p>
        <h3>Recuperados:</h3>
        <p>{{state.recovered}}</p>
        <h3>Óbitos:</h3>
        <p>{{state.deaths}} pessoas</p>
      </div>
    </div>

    <div class="state" v-if="uf === 'Alagoas'">
      <h1>{{uf}}</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Alagoas_in_Brazil.svg/300px-Alagoas_in_Brazil.svg.png"
      />
      <div class="dados">
        <h3>População:</h3>
        <p>3.351.543 pessoas</p>
        <h3>Casos confirmados:</h3>
        <p>{{state.confirmed}}</p>
        <h3>Recuperados:</h3>
        <p>{{state.recovered}}</p>
        <h3>Óbitos:</h3>
        <p>{{state.deaths}} pessoas</p>
      </div>
    </div>

    <div class="state" v-if="uf === 'Amapa'">
      <h1>Amapá</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Amapa_in_Brazil.svg/300px-Amapa_in_Brazil.svg.png"
      />
      <div class="dados">
        <h3>População:</h3>
        <p>861.773 pessoas</p>
        <h3>Casos confirmados:</h3>
        <p>112.878</p>
        <h3>Recuperados:</h3>
        <p>89.266</p>
        <h3>Óbitos:</h3>
        <p>1.718 pessoas</p>
      </div>
    </div>

    <div class="state" v-if="uf === 'Amazonas'">
      <h1>Amazonas</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Amazonas_in_Brazil.svg/300px-Amazonas_in_Brazil.svg.png"
      />
      <div class="dados">
        <h3>População:</h3>
        <p>4.207.714 pessoas</p>
        <h3>Casos confirmados:</h3>
        <p>389.200</p>
        <h3>Recuperados:</h3>
        <p>333.393</p>
        <h3>Óbitos:</h3>
        <p>13.050 pessoas</p>
      </div>
    </div>

    <div class="state" v-if="uf === 'Bahia'">
      <h1>Bahia</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Bahia_in_Brazil.svg/300px-Bahia_in_Brazil.svg.png"
      />
      <div class="dados">
        <h3>População:</h3>
        <p>14.930.634 pessoas</p>
        <h3>Casos confirmados:</h3>
        <p>1.032.454</p>
        <h3>Recuperados:</h3>
        <p>996.824</p>
        <h3>Óbitos:</h3>
        <p>21.707 pessoas</p>
      </div>
    </div>

    <div class="state" v-if="uf === 'Ceara'">
      <h1>Ceará</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Ceara_in_Brazil.svg/300px-Ceara_in_Brazil.svg.png"
      />
      <div class="dados">
        <h3>População:</h3>
        <p>9.187.103 pessoas</p>
        <h3>Casos confirmados:</h3>
        <p>821.842</p>
        <h3>Recuperados:</h3>
        <p>569.170</p>
        <h3>Óbitos:</h3>
        <p>20.903 pessoas</p>
      </div>
    </div>

    <div class="state" v-if="uf === 'Distrito Federal'">
      <h1>Distrito Federal</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Distrito_Federal_in_Brazil.svg/300px-Distrito_Federal_in_Brazil.svg.png"
      />
      <div class="dados">
        <h3>População:</h3>
        <p>3.055.149 pessoas</p>
        <h3>Casos confirmados:</h3>
        <p>410.059</p>
        <h3>Recuperados:</h3>
        <p>393.383</p>
        <h3>Óbitos:</h3>
        <p>8.790 pessoas</p>
      </div>
    </div>

    <div class="state" v-if="uf === 'Espirito Santo'">
      <h1>Espírito Santo</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Espirito_Santo_in_Brazil.svg/300px-Espirito_Santo_in_Brazil.svg.png"
      />
      <div class="dados">
        <h3>População:</h3>
        <p>4.064.052 pessoas</p>
        <h3>Casos confirmados:</h3>
        <p>488.704</p>
        <h3>Recuperados:</h3>
        <p>459.442</p>
        <h3>Óbitos:</h3>
        <p>10.944 pessoas</p>
      </div>
    </div>

    <div class="state" v-if="uf === 'Goias'">
      <h1>Goiás</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Goias_in_Brazil.svg/300px-Goias_in_Brazil.svg.png"
      />
      <div class="dados">
        <h3>População:</h3>
        <p>7.113.540 pessoas</p>
        <h3>Casos confirmados:</h3>
        <p>621.263</p>
        <h3>Recuperados:</h3>
        <p>590.919</p>
        <h3>Óbitos:</h3>
        <p>17.403 pessoas</p>
      </div>
    </div>

    <div class="state" v-if="uf === 'Maranhao'">
      <h1>Maranhão</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Maranhao_in_Brazil.svg/300px-Maranhao_in_Brazil.svg.png"
      />
      <div class="dados">
        <h3>População:</h3>
        <p>7.114.598 pessoas</p>
        <h3>Casos confirmados:</h3>
        <p>294.632</p>
        <h3>Recuperados:</h3>
        <p>258.038</p>
        <h3>Óbitos:</h3>
        <p>8.275 pessoas</p>
      </div>
    </div>

    <div class="state" v-if="uf === 'Mato Grosso'">
      <h1>Mato Grosso</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Mato_Grosso_in_Brazil.svg/300px-Mato_Grosso_in_Brazil.svg.png"
      />
      <div class="dados">
        <h3>População:</h3>
        <p>3.526.220 pessoas</p>
        <h3>Casos confirmados:</h3>
        <p>413.239</p>
        <h3>Recuperados:</h3>
        <p>389.684</p>
        <h3>Óbitos:</h3>
        <p>10.957 pessoas</p>
      </div>
    </div>

    <div class="state" v-if="uf === 'Mato Grosso do Sul'">
      <h1>Mato Grosso do Sul</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Mato_Grosso_do_Sul_in_Brazil.svg/300px-Mato_Grosso_do_Sul_in_Brazil.svg.png"
      />
      <div class="dados">
        <h3>População:</h3>
        <p>2.809.394 pessoas</p>
        <h3>Casos confirmados:</h3>
        <p>300.243</p>
        <h3>Recuperados:</h3>
        <p>268.375</p>
        <h3>Óbitos:</h3>
        <p>7.072 pessoas</p>
      </div>
    </div>

    <div class="state" v-if="uf === 'Para'">
      <h1>Pará</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Para_in_Brazil.svg/300px-Para_in_Brazil.svg.png"
      />
      <div class="dados">
        <h3>População:</h3>
        <p>8.690.745 pessoas</p>
        <h3>Casos confirmados:</h3>
        <p>523.063</p>
        <h3>Recuperados:</h3>
        <p>489.104</p>
        <h3>Óbitos:</h3>
        <p>14.679 pessoas</p>
      </div>
    </div>

    <div class="state" v-if="uf === 'Paraiba'">
      <h1>Paraíba</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Paraiba_in_Brazil.svg/300px-Paraiba_in_Brazil.svg.png"
      />
      <div class="dados">
        <h3>População:</h3>
        <p>4.039.277 pessoas</p>
        <h3>Casos confirmados:</h3>
        <p>342.192</p>
        <h3>Recuperados:</h3>
        <p>229.062</p>
        <h3>Óbitos:</h3>
        <p>7.820 pessoas</p>
      </div>
    </div>

    <div class="state" v-if="uf === 'Parana'">
      <h1>Paraná</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Parana_in_Brazil.svg/300px-Parana_in_Brazil.svg.png"
      />
      <div class="dados">
        <h3>População:</h3>
        <p>11.516.840 pessoas</p>
        <h3>Casos confirmados:</h3>
        <p>1.115.638</p>
        <h3>Recuperados:</h3>
        <p>772.839</p>
        <h3>Óbitos:</h3>
        <p>27.018 pessoas</p>
      </div>
    </div>

    <div class="state" v-if="uf === 'Pernambuco'">
      <h1>Pernambuco</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pernambuco_in_Brazil.svg/300px-Pernambuco_in_Brazil.svg.png"
      />
      <div class="dados">
        <h3>População:</h3>
        <p>9.616.621 pessoas</p>
        <h3>Casos confirmados:</h3>
        <p>497.906</p>
        <h3>Recuperados:</h3>
        <p>413.346</p>
        <h3>Óbitos:</h3>
        <p>16.243 pessoas</p>
      </div>
    </div>

    <div class="state" v-if="uf === 'Piaui'">
      <h1>Piauí</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Piaui_in_Brazil.svg/300px-Piaui_in_Brazil.svg.png"
      />
      <div class="dados">
        <h3>População:</h3>
        <p>3.281.480 pessoas</p>
        <h3>Casos confirmados:</h3>
        <p>278.152</p>
        <h3>Recuperados:</h3>
        <p>271.166</p>
        <h3>Óbitos:</h3>
        <p>6.042 pessoas</p>
      </div>
    </div>

    <div class="state" v-if="uf === 'Rio Grande do Norte'">
      <h1>Rio Grande do Norte</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Rio_Grande_do_Norte_in_Brazil.svg/300px-Rio_Grande_do_Norte_in_Brazil.svg.png"
      />
      <div class="dados">
        <h3>População:</h3>
        <p>3.534.165 pessoas</p>
        <h3>Casos confirmados:</h3>
        <p>274.255</p>
        <h3>Recuperados:</h3>
        <p>150.649</p>
        <h3>Óbitos:</h3>
        <p>6.260 pessoas</p>
      </div>
    </div>

    <div class="state" v-if="uf === 'Rio Grande do Sul'">
      <h1>Rio Grande do Sul</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Rio_Grande_do_Sul_in_Brazil.svg/300px-Rio_Grande_do_Sul_in_Brazil.svg.png"
      />
      <div class="dados">
        <h3>População:</h3>
        <p>11.422.973 pessoas</p>
        <h3>Casos confirmados:</h3>
        <p>1.109.976</p>
        <h3>Recuperados:</h3>
        <p>1.060.931</p>
        <h3>Óbitos:</h3>
        <p>28.765 pessoas</p>
      </div>
    </div>

    <div class="state" v-if="uf === 'Rio de Janeiro'">
      <h1>Rio de Janeiro</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Rio_de_Janeiro_in_Brazil.svg/300px-Rio_de_Janeiro_in_Brazil.svg.png"
      />
      <div class="dados">
        <h3>População:</h3>
        <p>17.366.189 pessoas</p>
        <h3>Casos confirmados:</h3>
        <p>883.360</p>
        <h3>Recuperados:</h3>
        <p>819.399</p>
        <h3>Óbitos:</h3>
        <p>51.508 pessoas</p>
      </div>
    </div>

    <div class="state" v-if="uf === 'Rondonia'">
      <h1>Rondônia</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Rondonia_in_Brazil.svg/300px-Rondonia_in_Brazil.svg.png"
      />
      <div class="dados">
        <h3>População:</h3>
        <p>1.796.460pessoas</p>
        <h3>Casos confirmados:</h3>
        <p>233.257</p>
        <h3>Recuperados:</h3>
        <p>219.442</p>
        <h3>Óbitos:</h3>
        <p>5.822 pessoas</p>
      </div>
    </div>

    <div class="state" v-if="uf === 'Roraima'">
      <h1>Roraima</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Roraima_in_Brazil.svg/300px-Roraima_in_Brazil.svg.png"
      />
      <div class="dados">
        <h3>População:</h3>
        <p>631.181 pessoas</p>
        <h3>Casos confirmados:</h3>
        <p>105.032</p>
        <h3>Recuperados:</h3>
        <p>98.619</p>
        <h3>Óbitos:</h3>
        <p>1.651 pessoas</p>
      </div>
    </div>

    <div class="state" v-if="uf === 'Santa Catarina'">
      <h1>Santa Catarina</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Santa_Catarina_in_Brazil.svg/300px-Santa_Catarina_in_Brazil.svg.png"
      />
      <div class="dados">
        <h3>População:</h3>
        <p>7.252.502 pessoas</p>
        <h3>Casos confirmados:</h3>
        <p>983.333</p>
        <h3>Recuperados:</h3>
        <p>940.514</p>
        <h3>Óbitos:</h3>
        <p>15.572 pessoas</p>
      </div>
    </div>

    <div class="state" v-if="uf === 'Sao Paulo'">
      <h1>São Paulo</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Sao_Paulo_in_Brazil.svg/300px-Sao_Paulo_in_Brazil.svg.png"
      />
      <div class="dados">
        <h3>População:</h3>
        <p>46.289.333 pessoas</p>
        <h3>Casos confirmados:</h3>
        <p>3.355.201</p>
        <h3>Recuperados:</h3>
        <p>2.998.432</p>
        <h3>Óbitos:</h3>
        <p>114.192 pessoas</p>
      </div>
    </div>

    <div class="state" v-if="uf === 'Sergipe'">
      <h1>Sergipe</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Sergipe_in_Brazil.svg/300px-Sergipe_in_Brazil.svg.png"
      />
      <div class="dados">
        <h3>População:</h3>
        <p>2.318.822 pessoas</p>
        <h3>Casos confirmados:</h3>
        <p>242.709</p>
        <h3>Recuperados:</h3>
        <p>219.425</p>
        <h3>Óbitos:</h3>
        <p>5.200 pessoas</p>
      </div>
    </div>

    <div class="state" v-if="uf === 'Tocantins'">
      <h1>Tocantins</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Tocantins_in_Brazil.svg/300px-Tocantins_in_Brazil.svg.png"
      />
      <div class="dados">
        <h3>População:</h3>
        <p>1.590.248 pessoas</p>
        <h3>Casos confirmados:</h3>
        <p>182.138</p>
        <h3>Recuperados:</h3>
        <p>163.751</p>
        <h3>Óbitos:</h3>
        <p>2.936 pessoas</p>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import { Api } from "../services/Api";

export default {
  name: "StatesDetails",
  components: {
    NavBar
  },
  data() {
    return {
      navbar: {
        covid: "Covid-19",
        title: "Estados"
      },
      uf: "",
      state: '',
    };
  },
  methods: {

  },
  mounted() {
    this.uf = this.$route.params.uf;

    Api.getBrazil().then(resp => this.state = resp.data[`${this.$route.params.uf}`]);
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