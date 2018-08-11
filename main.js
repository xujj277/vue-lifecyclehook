// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
console.log(Vue);
import Resource from 'vue-resource'
Vue.use(Resource)

import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
let vm = new Vue({
  // el: '#app',
  components: { App },
  // template: '<App/>',
  data: {
    msg: 'lifecycle',
    arr: [10,12,13]
  },
  methods: {
    getLists () {
      return 'getLists'
    }
  },
  beforeCreate () {
    console.log('beforeCreate',document.querySelectorAll('li').length);
    // console.log('beforeCreate', this.msg, this.getLists());
  },
  //异步数据适合在created阶段中调用，初始化
  created () {


    // console.log('created', this.msg, this.getLists());
    setTimeout(() => {
      this.arr = [4,5,6,7]
      this.$nextTick(() => {
        console.log('nextTick',document.querySelectorAll('li').length);
      })
      // console.log('created',document.querySelectorAll('li').length);
    }, 0);
    setTimeout(() => {
      this.arr = [4,5,6,7,15]
      this.$nextTick(() => {
        console.log('nextTick',document.querySelectorAll('li').length);
      })
      // console.log('created',document.querySelectorAll('li').length);
    }, 1000);
  },
  beforeMount () {
    console.log('beforeMount',document.querySelectorAll('li').length);
  },
  //初始数据的dom渲染完毕，可以获取到dom
  mounted () {
    console.log('mounted',document.querySelectorAll('li').length);
  },
  beforeUpdate () {
    console.log('beforeUpdate',document.querySelectorAll('li').length);
  },
  //数据更新完毕时： 如果对数据更新做统一处理就在updated钩子中处理
  //如果想区别不同的数据更新，同时对dom操作，使用nextTick函数处理
  //（某个数据某一个变化就用nextTick）
  updated () {
    console.log('Updated',document.querySelectorAll('li').length);
  },
  beforeDestroy () {
    console.log('beforeDestroy');

  },
  destroyed () {
    console.log('destroyed');

  },
  activated () {

  },
  deactivated() {

  },

  //对具体某个数据变化作统一处理
  watch :{
    'arr': function name(params) {

    }
  }

}).$mount('#app')


// vm.$destroy()