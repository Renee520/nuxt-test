<template>
  <div :class="prefixCls">
    <!-- header -->
    <div :class="`${prefixCls}-header`">
      <div :class="`${prefixCls}-header__back`">
        <van-icon @click="goBack" name="arrow-left" />
      </div>
      <div :class="`${prefixCls}-header__search`">
        <van-search
          v-model="shopOrGoods"
          placeholder="输入商家、商品名称"
          show-action
          @search="onSearch"
        >
          <div slot="action" @click="onSearch">搜索</div>
        </van-search>
      </div>
    </div>
    <!-- history -->
    <div :class="`${prefixCls}-history`">
      <div :class="`${prefixCls}-history__title`">
        <span>历史搜索</span>
        <van-icon name="delete" />
      </div>
      <div :class="`${prefixCls}-history__content`">
        <input type="button" class="v-button--info" value="煲仔饭" v-for="n in 2" :key="n" />
      </div>
    </div>
    <!-- hot search -->
    <div :class="`${prefixCls}-hot`">
      <div :class="`${prefixCls}-hot__title`">
        <span>热门搜索</span>
      </div>
      <div :class="`${prefixCls}-hot__content`">
        <input type="button" class="v-button--info" value="煲仔饭" v-for="n in 12" :key="n" />
      </div>
    </div>
  </div>
</template>
<script>
const prefixCls = 'search-index';
export default {
  data() {
    return {
      prefixCls,
      shopOrGoods: '',
    };
  },
  computed: {},
  watch: {},
  methods: {
    onSearch() {
      console.log('搜索');
    },
    goBack() {
      this.$router.go(-1);
    }
  },
  created() {
  },
}
</script>
