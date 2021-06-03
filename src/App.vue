<template>
  <div>
    <Home :info="info"/>
    <router-view/>
  </div>
  
</template>

<script>
import { Api } from './services/Api';
import Home from './components/Home';

export default {
  name: 'App',
  components: {
    Home,
  },
  data(){
    return{
      info: null
    }
  },
  mounted() {
    Api.getBrazil().then(resp  => (this.info = resp.data.All));
  }
}
</script>

<style>

</style>
