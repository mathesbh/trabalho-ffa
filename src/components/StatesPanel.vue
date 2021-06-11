<template>
  <div>
    <NavBar :items="navbar"/>
    <div class="container">
      <Search :onSearch="handleSearchState" />
      <StateItem :states="states" :search="filter"/>         
    </div>
  </div>
</template>

<script>
import { Api } from '../services/Api';
import NavBar from './NavBar';
import StateItem from './StatesItem';
import Search from './Search';

export default {
  name: 'StatesPanel',
  components: {
    StateItem, NavBar, Search
  },
  data(){
    return{
      navbar: {
        covid: 'Covid-19',
        title: 'Estados',
      },
      states: null,
      filter: null,
    }
  },
  methods: {
    handleSearchState(text){
      const result = this.states[text];
      if(result === undefined){
        this.filter = null;
      } else{
        const stateSearch = {
          name: text,
          confirmed: result.confirmed,
          deaths: result.deaths,
          recovered: result.recovered,
        };
        this.filter = stateSearch;
      }
    } 
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
    padding-bottom: 25px;
  }

</style>