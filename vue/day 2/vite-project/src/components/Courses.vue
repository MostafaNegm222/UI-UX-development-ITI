<script>
  export default {
    data () {
      return {
        
      }
    } , 
    props : {
     level : Number
    }
  }
</script>


<template>
 <div class="card" >
    <div class="header">
        <div :class="level == level ? 'green': 'red'"></div>
        <slot name="header"></slot>
        <hr>
        <slot name="body"></slot>
        <hr>
        <slot name="footer"></slot>
    </div>
 </div>
</template>

<style>

</style>