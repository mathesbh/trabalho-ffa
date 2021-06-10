<template>
  <div class="container">
    <div v-for="(item, index) in states" :key="index">
      <div class="img-states" v-if="index === 'All'">
        <img src="../assets/covid-estados.jpeg" alt="">
      </div>
      <div class="box" v-else>
          <h3>{{index}}</h3>
          <p>Confirmados: {{item.confirmed}}</p>
          <router-link class="btn" :to="{path: '/detalhes/' + index}">Detalhes</router-link>
      </div>    
    </div>
  </div>
</template>

<script>


export default {
  name: 'StatesItem',
  components: {
    
  },
  props: {
    states: Object
  },
  data(){
    return{
      
    }
  },
  methods: {
    
  },
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
    justify-content: space-evenly;
    align-items: center;
    height: 130px;
    margin: 1%;
    border: #990000 2px solid;
    border-radius: 15px;
  }

  h3{
    border-bottom: 1px solid #990000;
  }

  .btn {
  text-decoration: none;
  padding: 7px 20px;
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