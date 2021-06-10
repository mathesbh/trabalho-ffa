<template>
  <div>
    <img :src="flag" alt="" width="45" height="32">
  </div>  
</template>

<script>

export default {
  name: 'StateFlag',
  components: {

  },
  props: {
    flag: String
  },
  data(){
    return{

    }
  },
  methods: {
    getFlag(){
      console.log(this.flag)
    }
  },
}
</script>

<style scoped>
  div{
    margin-top: 10px;
    margin-bottom: 10px;
  }

  img{
    border: 1px solid #888;
    border-radius: 5px;
  }

</style>