<template>
  <div>
    <button>{{btnTitle}}</button>
  </div>
</template>

<script>

export default {
  name: 'BtnDetail',
  props: {
    btnTitle: String,
  }
}
</script>

<style>
  button{
    width: 120px;
    height: 28px;
    background-color: #990000;
    border: #990000;
    border-radius: 15px;
    color: aliceblue;
    font-size: 1em;
    cursor: pointer;
  }

  button:hover{
    background-color: #f51219;
  }

</style>