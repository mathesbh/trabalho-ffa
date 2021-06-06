<template>
  <nav>
    <h1>{{items.covid}} - {{items.title}} </h1>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  components: {

  },
  props: {
    items: Object,
  },
  data(){
    return {
      
    }
  },
}
</script>

<style>
  nav{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75px;
    background-color: #f51219;
    margin-bottom: 2%;
  }

  h1{
    color: aliceblue;
    font-size: xx-large;
    font-weight: 700;
  }

</style>