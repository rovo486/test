<template>
  <div class="test">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <p class="test-xl bg-awesome-color">hellos</p>
    <p> {{msg}} X {{cnt}}     {{val.val1}}</p>
    <button @click="fn1" :title="getTitle">증가</button>
    <button @click="fn2" :title="getTitle">조회</button>
    <input type="text" v-model="val.val1">
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import { getTodos, createTodo } from '@/api/todo'
import { getTodos } from '@/api/todo'
import axios from 'axios'
export default {
  data () {
    return {
      msg: 'blank',
      cnt: 0,
      val: {
        val1: 'val1'
      }
    }
  },
  name: 'Test',
  components: {
    // HelloWorld
  },
  computed: {
    getTitle () {
      return this.cnt > 10 ? '10초과' : '10이하'
    }
  },
  methods: {
    fn1 () {
      this.cnt++
    },
    fn2 () {
      axios({
        method: 'GET',
        // url: '/api/contacts',
        url: 'https://raw.githubusercontent.com/joshua1988/doit-vuejs/master/data/demo.json',
        // url: 'http://112.157.57.2:8501/bildingList?regionCd=11230',
        params: {
        }
      }).then((response) => {
        console.log(response)
        this.result = response.data
      }).catch((ex) => {
        console.log(ex)
      })
    },
    fn3 () {
      getTodos().then(res => {
        this.todos = res
      })
    },
    getMenus () {
      return null
    },
    getTodos () {
      return null
    },
    createTodo () {
      return null
    }
  }
}
</script>
