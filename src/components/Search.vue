<template>
  <div>
    <input type="text" placeholder="Buscar por estado" v-model="search" v-on:keyup="handleSearch">
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: {
    onSearch: Function,
  },
  data(){
    return {
      search: '',
    }
  },
  methods: {
    handleSearch(){
      this.onSearch(this.search);
    }
  }

}
</script>

<style scoped>
  input{
    padding: 10px;
    border: 3px solid #990000;
    border-radius: 15px;
    font-size: 1rem;
  }

  input:focus{
    outline: none;
    border: 3px solid #f51219;
  } 

  div{
    height: 50px;
    display: flex;
    justify-content: center;
    margin-bottom: 2%;
  }

</style>