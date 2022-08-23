<!--
 * @Descripttion:
 * @version:
 * @Author: CC
 * @Date: 2022-05-24 15:52:49
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-08-23 16:19:22
-->
<template>
  <div class="div1">
    <div class="div2"></div>
    <div class="div3"></div>
    <div>
      <ul>
        <li class="liii" v-for="item in list" :key="item.index">{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  created() {
    for (var i = 0; i < 30; i++) {
      this.list.push({
        index: i,
        name: '张三' + i
      })
    }
  },
  data() {
    return {
      list: []
    }
  },
  methods: {}
}
</script>

<style>
.div1 {
  height: 100vh;
  position: relative;
}
.div2 {
  width: 100%;
  height: 30%;
  background: skyblue;
}
.liii {
  width: 100%;
  height: 30px;
  color: rgba(245, 122, 7, 0.726);
  line-height: 30px;
  font-size: 15px;
}
.div3 {
  width: 100%;
  height: 20px;
  background: rgb(238, 17, 102);
  position: sticky;
  top: 0;
}
</style>
