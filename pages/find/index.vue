<template>
  <div :class="prefixCls">
    <!-- 顶部 -->
    <div :class="`${prefixCls}-parts box`">
      <van-row>
        <van-col span="12">
          <div :class="`${prefixCls}-parts__shopcity`">
          <div class="content">
            <p class="font--ml text--warning">金币商城</p>
            <p class="font--md">0元好物在这里</p>
          </div>
          <div class="img float--right">
            <img src="~/static/imgs/find/1.webp">
          </div>
        </div>
        </van-col>
        <van-col span="12">
          <div :class="`${prefixCls}-parts__right flex`">
          <div :class="`${prefixCls}-parts__right--recommend flex`">
            <div class="content">
              <p class="font--ml text--primary">推荐有奖</p>
              <p class="font--md">20元现金拿不停</p>
            </div>
            <div class="img"><img src="~/static/imgs/find/2.webp" alt=""></div>
          </div>
          <div :class="`${prefixCls}-parts__right--around flex`">
            <div class="content">
              <p class="font--ml text--error">周边优惠</p>
              <p class="font--md">领取口碑好券</p>
            </div>
            <div class="img"><img src="~/static/imgs/find/3.webp" alt=""></div>
          </div>
        </div>
        </van-col>
      </van-row>
    </div>

    <!-- 活动 -->
    <div :class="`${prefixCls}-activities box flex`">
      <div :class="`${prefixCls}-activities__title`">
        <p class="font--lg flex"><span class="prev"></span>
          <van-icon name="clock-o" />
          限时好礼
        <span class="next"></span></p>
        <p class="font--md text--center">金币换豪礼</p>
      </div>
      <div :class="`${prefixCls}-activities__content`">
        <van-row>
          <van-col span="8">
            <van-panel title="限时优惠">
              <div>
                <img src="~/static/imgs/find/4.webp" alt="">
                <p class="text-overflow">3元品质联盟红包</p>
                <p class="gold">90金币<span>￥3</span></p>
              </div>
            </van-panel>
          </van-col>
          <van-col span="8">
            <van-panel title="特价换购">
              <div>
                <img src="~/static/imgs/find/4.webp" alt="">
                <p class="text-overflow">数码经络按摩仪</p>
                <p class="gold">9金币<span>￥239</span></p>
              </div>
            </van-panel>
          </van-col>
          <van-col span="8">
            <van-panel title="特价换购">
              <div>
                <img src="~/static/imgs/find/4.webp" alt="">
                <p class="text-overflow">机械手感背光键盘套装</p>
                <p class="gold">9金币<span>￥130</span></p>
              </div>
            </van-panel>
          </van-col>
        </van-row>
      </div>
      <div :class="`${prefixCls}-activities__more`">
        <p>查看更多
          <van-icon name="arrow" />
        </p>
      </div>
    </div>
  </div>
</template>
<script>
const prefixCls = 'find';
export default {
  data() {
    return {
      prefixCls,
    };
  },
  layout(context) {
    return 'index';
  },
  computed: {},
  watch: {},
  methods: {
  },
  created() {
  },
}
</script>
