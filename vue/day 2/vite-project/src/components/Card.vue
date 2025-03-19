
<script>
  export default {
    data () {
      return {

      }
    } , 
    props : {
      title : {
        type :String
      },
      subtitle : {
        type :String
      }, 
      action :{
        type : String
      },
      cardStyle : {
        type : String,
        default : "default"
      } 
    }
  }
</script>


<template>
 <div class="card" :class="cardStyle">
  <h2 v-if="title">{{ title }}</h2>
  <h4 v-if="subtitle">{{ subtitle }}</h4>
  <slot></slot>
  <button v-if="action" class="action">{{ action }}</button>
 </div>
</template>


<style>
  .card {
    padding: 12px;
    width: 400px;
    margin: 40px auto;
    border-radius: 8px;
    text-align: center;
  }
  .default {
    box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
  }
  .outline {
    border: 1px solid #777;
  }
  .tonal {
  background-color: #ddd;
  }

  .action {
    width: 100%;
    padding: 12px;
    background-color: #041d68;
    color: #fff;
    border-radius: 8px;
  }
</style>