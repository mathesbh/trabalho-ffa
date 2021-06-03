<template>
<div>
  <h2>Confirmados:</h2>{{ info.confirmed }}
</div>
</template>

<script>
import { Api } from './services/Api';

export default {
  name: 'App',
  components: {
    
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
