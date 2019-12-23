<template>
  <div :class="prefixCls">
    <!-- 城市选择 -->
    <div :class="`${prefixCls}-city`">
      <div :class="`${prefixCls}-city-header`">
        <van-nav-bar
          title="城市选择"
          left-arrow
          @click-left="backToAddress"
        />
        <div class="search">
          <van-search
            placeholder="输入城市名或者拼音"
            v-model="inputcity"
            shape="round"
            @keydown.13="inputCity"
          />
        </div>
      </div>
      <div :class="`${prefixCls}-city-select`">
        <div v-if="cityflag" :class="`${prefixCls}-city-select__current`">
          <div class="title">当前定位城市</div>
          <div class="content box">{{city}}</div>
        </div>
        <div :class="`${prefixCls}-city-select__index`">
          <van-index-bar>
          <van-index-anchor index="A" />
          <van-cell title="文本" />
          <van-cell title="文本" />
          <van-cell title="文本" />
          <van-index-anchor index="B" />
          <van-cell title="文本" />
          <van-cell title="文本" />
          <van-cell title="文本" />
          <van-cell title="文本" />
          <van-cell title="文本" />
          <van-cell title="文本" />
          <van-cell title="文本" />
          <van-cell title="文本" />
          <van-cell title="文本" />
          <van-cell title="文本" />
          <van-cell title="文本" />
          <van-cell title="文本" />
          <van-cell title="文本" />
          <van-cell title="文本" />
          <van-cell title="文本" />
        </van-index-bar>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
const prefixCls = 'selectCity-index';
export default {
  data() {
    return {
      prefixCls,
      inputcity: '', // 城市名输入值
      cityflag: false, // 标识符，是否存在城市名
      city: '',
    };
  },
  computed: {},
  watch: {},
  methods: {
    backToAddress() { // “选择城市” -> “选择收货地址”
      this.$emit('getCityFromShowCity', this.city, this.cityflag); // 将city数据传递给父组件“选择收货地址”
      this.inputcity = ''; // 清空输入框
    },
    inputCity() { // 输入当前城市，并按回车
      if (this.inputcity) { // 如果输入不为空
        this.city = this.inputcity;
        this.cityflag = true;
        // 将city存入store
        this.$store.dispatch('saveCity', this.city).then(
          () => {
            localStorage.setItem('city', JSON.stringify(this.city)); // 将city存入本地
          },
          err => {
            console.log(err || '地址存入失败');
          }
        );
        this.backToAddress(); // 返回地址组件
      }
    },
  },
  created() {
    let store = this.$store.state.user;
    // 从store中取出city
    if (store.city) {
      this.city = store.city;
      this.cityflag = true;
    } else {
      this.city = '选择城市';
      this.cityflag = false;
    }
  },
}
</script>
