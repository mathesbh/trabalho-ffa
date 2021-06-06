<template>
  <div>
    <Footer />
    <router-view></router-view>
  </div>
  
</template>

<script>
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Footer
  },
  data(){
    return{

    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
