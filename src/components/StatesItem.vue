<template>
  <div class="container">
    <div v-for="(item, index) in states" :key="index">
      <div class="img-states" v-if="index === 'All'">
        <img src="../assets/covid-estados.jpeg" alt="">
      </div>
      <div class="box" v-else>
          <h3>{{index}}</h3>
          <p>Atualização: {{handleDate(item.updated)}}</p>
          <button>Detalhes</button>
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
    handleDate(data){
      const date = data.split(" ");
      const formatData = date[0].split("/");
      return `${formatData[2]}-${formatData[1]}-${formatData[0]}`
    }
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