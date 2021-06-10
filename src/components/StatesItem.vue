<template>
  <div class="container">
    <div v-for="(item, index) in states" :key="index">
      <div class="img-states" v-if="index === 'All'">
        <img src="../assets/covid-estados.jpeg" alt="">
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
    states: Object
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
  .container{
    display: grid;
    grid-template-columns: 225px 225px 225px 225px;
    
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