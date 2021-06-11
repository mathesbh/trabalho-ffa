<template>
  <div class="container" v-if="search === null">
    <div v-for="(item, index) in states" :key="index">
      <div class="img-states" v-if="index === 'All'">
        <img src="../assets/covid-estados.jpeg" alt="flag of Brazil" />
      </div>
      <div class="box" v-else>
        <h3>{{index}}</h3>
        <div v-for="(flag, flag_i) in flags" :key="flag_i">
          <span v-if="flag.uf == index">
            <StateFlag :flag="flag.flag" />
          </span>
        </div>
        <router-link class="btn" :to="{path: '/detalhes/' + index}">Detalhes</router-link>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="box">
      <h3>{{search.name}}</h3>
      <div v-for="(flag, flag_i) in flags" :key="flag_i">
        <span v-if="flag.uf == search.name">
          <StateFlag :flag="flag.flag" />
        </span>
      </div>
      <router-link class="btn" :to="{path: '/detalhes/' + search.name}">Detalhes</router-link>
    </div>
  </div>
</template>

<script>
import StateFlag from './StateFlag';
import { Flags } from '../services/Flags';

export default {
  name: 'StatesItem',
  components: {
    StateFlag,
  },
  props: {
    states: Object,
    search: Object
  },
  data(){
    return{
      flags: [],
    }
  },
  methods: {

  },
  mounted(){
    Flags.forEach(f => this.flags.push(f))
  }
}
</script>

<style scoped>
.search {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container{
  display: grid;
  grid-template-columns: 225px 225px 225px 225px;
  margin-bottom: 2%;
}
.box{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 130px;
  margin: 1%;
  border: #990000 2px solid;
  border-radius: 15px;
}

.btn {
  text-decoration: none;
  padding: 3px 15px;
  border-radius: 15px;
  border: #990000;
  background-color: #990000;
  color: aliceblue;
  cursor: pointer;
}

.btn:hover {
  background-color: #f51219;
}

.img-states{
  height: 130px;
  margin: 1%;
}

img{
  width: 220px;
  height: 130px;

  border: #fff 2px solid;
  border-radius: 15px;
}

</style>