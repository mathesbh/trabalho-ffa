<template>
  <div>
    <NavBar :items="navbar"/>
    <div class="container">
      <StateItem :states="states"/>         
  </div>
  </div>
</template>

<script>
import { Api } from '../services/Api';
import NavBar from './NavBar';
import StateItem from './StatesItem';

export default {
  name: 'StatesPanel',
  components: {
    StateItem, NavBar,
  },
  data(){
    return{
      navbar: {
        covid: 'Covid-19',
        title: 'Estados',
      } ,
      states: null,
    }
  },
  methods: {
    
  },
  mounted() {
    Api.getBrazil().then(resp  => (this.states = resp.data));
  }
}
</script>

<style scoped>
  .container{
    max-width: 900px;
    margin: 0 auto;
  }

</style>