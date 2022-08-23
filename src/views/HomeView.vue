<template>
  <div class="home">
    <md-scroll-view ref="scrollView" @scroll="$_onScroll">
      <div class="head_desc">头图</div>
      <div
        class="fillter_view"
        :class="{ fixed_class: bindFixed }"
        :style="setTopStyle"
      >
        筛选区域
      </div>
      <ul class="list_area" title="列表区域">
        <li v-for="(item, index) in list" :key="index" class="li_item">
          {{ item }}
        </li>
      </ul>
    </md-scroll-view>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      list: 50,
      bindFixed: false,
      scrollTop: 0,
    };
  },
  computed: {
    setTopStyle() {
      return this.bindFixed ? { top: `${this.scrollTop}px` } : {};
    },
  },
  methods: {
    $_onScroll({ scrollLeft, scrollTop }) {
      console.log(` ${scrollLeft}, scrollTop: ${scrollTop}`);
      this.scrollTop = scrollTop;
      if (scrollTop >= 150) {
        this.bindFixed = true;
      } else {
        this.bindFixed = false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  height: 100vh;
  box-sizing: border-box;
  .head_desc {
    height: 150px;
    background-color: skyblue;
  }
  .fillter_view {
    height: 80px;
    background-color: rgb(171, 199, 47);
  }
  .li_item {
    border-bottom: 1px solid #ccc;
  }
  .fixed_class {
    position: absolute;
    width: 100vw;
  }
}
</style>
