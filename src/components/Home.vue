<template>
  <div>
    <NavBar :items="navbar"/>
  </div>
</template>

<script>
import NavBar from './NavBar';

export default {
  name: 'Home',
  props: {

  },
  components: {
    NavBar
  },
  data(){
    return{
      navbar: {
        covid: 'Covid-19',
        title: 'Brasil'
      }    
    }
  },
}
</script>

<style>

</style>