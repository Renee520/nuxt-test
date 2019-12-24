<template>
  <div >
    <nuxt/>
  <van-tabbar :class="prefixCls" v-model="active" @change="onChange" style="z-index:1000;">
    <van-tabbar-item name="0" :icon="active !== '0' ? 'wap-home-o' : 'wap-home'">首页</van-tabbar-item>
      <van-tabbar-item name="1" :icon="active !== '1' ? 'eye-o' : 'eye'">发现</van-tabbar-item>
      <van-tabbar-item name="2" :icon="active !== '2' ? 'balance-list-o' : 'balance-list'">订单</van-tabbar-item>
      <van-tabbar-item name="3" :icon="active !== '3' ? 'user-o' : 'manager'">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
const prefixCls = 'nav';
export default {
  data() {
    return {
      prefixCls,
      active: '0',
    };
  },
  computed: {},
  watch: {},
  methods: {
    onChange(event) {
      this.active = event;
      console.log(event);
      switch (event) {
        case '0': // 首页
          this.$router.replace({
            path: '/',
          });
          break;
        case '1': // 发现
          this.$router.replace({
            path: '/find',
          });
          break;
        case '2': // 订单
          this.$router.replace({
            path: '/order',
          });
          break;
        case '3': // 我的
          this.$router.replace({
            path: '/user',
          });
          break;
        default: break;
      }
      // console.log(event);
    }
  },
  created() {
  },
  mounted() { // 页面刷新时让当前路由对应的Tabbar高亮显示
    switch (this.$route.fullPath) {
      case '/home':
        this.active = '0';
        break;
      case '/find':
        this.active = '1';
        break;
      case '/order':
        this.active = '2';
        break;
      case '/user':
        this.active = '3';
        break;
      default: break;
    }
  }
}
</script>
