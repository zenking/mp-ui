<template>
  <!-- <div class="wrap" v-if="!showWrap" :class="showContent ?'fadein':'fadeout'">{{text}}</div> -->
  <div class="wrap" v-if="!showWrap" >{{text || msg}}</div>
</template>
<script>
export default {
  name: 'Toast',
  props: {
    showWrap: Boolean,
    text: String,
    showContent: Boolean
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {

  }
}
</script>
<style scoped>
  .wrap{
    position: fixed;
    left: 50%;
    top:50%;
    background: rgba(0,0,0,.35);
    padding: 10px;
    border-radius: 5px;
    /* transform: translate(-50%,-50%); */
    color:#fff;
  }
  .fadein {
    animation: animate_in 0.25s;
  }
  .fadeout {
    animation: animate_out 0.25s;
    opacity: 0;
  }
  @keyframes animate_in {
    0% {
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
  @keyframes animate_out {
    0% {
      opacity: 1;
    }
    100%{
      opacity: 0;
    }
  }
</style>
