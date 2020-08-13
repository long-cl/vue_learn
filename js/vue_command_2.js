'user strict'

let vm = new Vue({
  el : '#app',
  data : {
    msg : 'v-cloak指令',
    msg1 : 'v-text指令',
    msg2 : '<p>v-html指令</p>',
    msg3 : 'hi v-bind指令'
  },
  methods : {
    show : function(){
      console.log(1);
    }
  }
})