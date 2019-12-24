<template>
  <div :class="prefixCls">
    <!-- header -->
    <div :class="`${prefixCls}-header`">
      <img src="../static/imgs/supervip/bg1.webp" alt="">
      <div :class="`${prefixCls}-header__content`">
        <p class="sub-title">开通超级会员</p>
        <h3 class="title">每月领<span>￥20</span>专属红包</h3>
        <p class="small">再享4大会员专属特权</p>
        <div class="v-button--svip">
          <span class="font-small">￥</span>
          <span class="font-large bold">6</span>
          <span class="font-small opacity">￥15</span>开通会员
        </div>
      </div>
    </div>
    <!-- 特权 -->
    <div :class="`${prefixCls}-privilege`">
      <!-- 特权1 -->
      <div :class="`${prefixCls}-privilege-frame box`">
        <div :class="`${prefixCls}-privilege-frame__title`">
          <h4>
            <span class="flag">特权1</span>
          每月免费领4个会员红包</h4>
        </div>
        <div :class="`${prefixCls}-privilege-frame__content privi1`">
          <div class="item">
            <p class="money bold">￥<span>5</span>
            </p>
            <p class="info">无门槛</p>
          </div>
          <div class="item">
            <p class="money bold">￥<span>5</span>
            </p>
            <p class="info">无门槛</p>
          </div>
          <div class="item">
            <p class="money bold">￥<span>5</span>
            </p>
            <p class="info">无门槛</p>
          </div>
          <div class="item">
            <p class="money bold">￥<span>5</span>
            </p>
            <p class="info">无门槛</p>
          </div>
        </div>
      </div>
      <!-- 特权2 -->
      <div :class="`${prefixCls}-privilege-frame box`">
        <div :class="`${prefixCls}-privilege-frame__title`">
          <h4>
            <span class="flag">特权2</span>
          会员红包可升级大额商家红包</h4>
        </div>
        <div :class="`${prefixCls}-privilege-frame__content privi2`">
          <van-swipe :autoplay="6000" indicator-color="white">
            <van-swipe-item>
              <van-grid :border="false" :column-num="3">
                <van-grid-item>
                  <div class="img">
                    <img src="../static/imgs/supervip/1.webp" alt="">
                  </div>
                  <p class="title text-overflow">避风塘（锦江店）</p>
                  <div class="info">
                    <span class="price bold">￥<span class="font-large">6</span></span>
                    无门槛
                  </div>
                </van-grid-item>
                <van-grid-item>
                  <div class="img">
                    <img src="../static/imgs/supervip/1.webp" alt="">
                  </div>
                  <p class="title text-overflow">避风塘（锦江店）</p>
                  <div class="info">
                    <span class="price">￥<span class="font-large">6</span></span>
                    无门槛
                  </div>
                </van-grid-item>
                <van-grid-item>
                  <div class="img">
                    <img src="../static/imgs/supervip/1.webp" alt="">
                  </div>
                  <p class="title text-overflow">避风塘（锦江店）</p>
                  <div class="info">
                    <span class="price">￥<span class="font-large">6</span></span>
                    无门槛
                  </div>
                </van-grid-item>
                <van-grid-item>
                  <div class="img">
                    <img src="../static/imgs/supervip/1.webp" alt="">
                  </div>
                  <p class="title text-overflow">避风塘（锦江店）</p>
                  <div class="info">
                    <span class="price">￥<span class="font-large">6</span></span>
                    无门槛
                  </div>
                </van-grid-item>
                <van-grid-item>
                  <div class="img">
                    <img src="../static/imgs/supervip/1.webp" alt="">
                  </div>
                  <p class="title text-overflow">避风塘（锦江店）</p>
                  <div class="info">
                    <span class="price">￥<span class="font-large">6</span></span>
                    无门槛
                  </div>
                </van-grid-item>
                <van-grid-item>
                  <div class="img">
                    <img src="../static/imgs/supervip/1.webp" alt="">
                  </div>
                  <p class="title text-overflow">避风塘（锦江店）</p>
                  <div class="info">
                    <span class="price">￥<span class="font-large">6</span></span>
                    无门槛
                  </div>
                </van-grid-item>
              </van-grid>
            </van-swipe-item>
            <van-swipe-item>
              <van-grid :border="false" :column-num="3">
                <van-grid-item>
                  <div class="img">
                    <img src="../static/imgs/supervip/1.webp" alt="">
                  </div>
                  <p class="title text-overflow">避风塘（锦江店）</p>
                  <div class="info">
                    <span class="price bold">￥<span class="font-large">6</span></span>
                    无门槛
                  </div>
                </van-grid-item>
                <van-grid-item>
                  <div class="img">
                    <img src="../static/imgs/supervip/1.webp" alt="">
                  </div>
                  <p class="title text-overflow">避风塘（锦江店）</p>
                  <div class="info">
                    <span class="price">￥<span class="font-large">6</span></span>
                    无门槛
                  </div>
                </van-grid-item>
                <van-grid-item>
                  <div class="img">
                    <img src="../static/imgs/supervip/1.webp" alt="">
                  </div>
                  <p class="title text-overflow">避风塘（锦江店）</p>
                  <div class="info">
                    <span class="price">￥<span class="font-large">6</span></span>
                    无门槛
                  </div>
                </van-grid-item>
                <van-grid-item>
                  <div class="img">
                    <img src="../static/imgs/supervip/1.webp" alt="">
                  </div>
                  <p class="title text-overflow">避风塘（锦江店）</p>
                  <div class="info">
                    <span class="price">￥<span class="font-large">6</span></span>
                    无门槛
                  </div>
                </van-grid-item>
                <van-grid-item>
                  <div class="img">
                    <img src="../static/imgs/supervip/1.webp" alt="">
                  </div>
                  <p class="title text-overflow">避风塘（锦江店）</p>
                  <div class="info">
                    <span class="price">￥<span class="font-large">6</span></span>
                    无门槛
                  </div>
                </van-grid-item>
                <van-grid-item>
                  <div class="img">
                    <img src="../static/imgs/supervip/1.webp" alt="">
                  </div>
                  <p class="title text-overflow">避风塘（锦江店）</p>
                  <div class="info">
                    <span class="price">￥<span class="font-large">6</span></span>
                    无门槛
                  </div>
                </van-grid-item>
              </van-grid>
            </van-swipe-item>
          </van-swipe>
          <p class="footer text--center">商家可能因位置原因不在服务范围内，实际以当前定位为准。</p>
        </div>
      </div>
      <!-- 特权3 -->
      <div :class="`${prefixCls}-privilege-frame box`">
        <div :class="`${prefixCls}-privilege-frame__title`">
          <h4>
            <span class="flag">特权3</span>
          下单返奖励金，再兑专属红包</h4>
          <p class="subtitle">每下一笔实付满￥20订单，获1个奖励金</p>
        </div>
        <div :class="`${prefixCls}-privilege-frame__content privi3`">
          <div class="item">
            <p class="gold">
              <van-icon name="gold-coin" />
              <span class="count">2个</span>奖励金兑换
            </p>
            <div class="money">
              <div class="num bold">￥<span class="font-lg">4</span></div>
              <div class="info">商家红包</div>
            </div>
          </div>
          <div class="item">
            <p class="gold">
              <van-icon name="gold-coin" />
              <span class="count">2个</span>奖励金兑换
            </p>
            <div class="money">
              <div class="num bold">￥<span class="font-lg">4</span></div>
              <div class="info">商家红包</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 特权4 -->
      <div :class="`${prefixCls}-privilege-frame box`">
        <div :class="`${prefixCls}-privilege-frame__title`">
          <h4><span class="flag">特权4</span>
          会员专属特价商品</h4>
        </div>
        <div :class="`${prefixCls}-privilege-frame__content privi4`">
          <van-swipe :autoplay="6000" indicator-color="white">
            <van-swipe-item>
              <van-grid :border="false" :column-num="2">
                <van-grid-item>
                  <div class="img">
                    <img src="../static/imgs/supervip/2.webp" alt="">
                    <p class="vipdiscount">会员专享5折</p>
                  </div>
                  <p class="title text-overflow">小炒鸡丁拼剁椒茄子套餐</p>
                  <div class="price">
                    <span class="bold">￥<span class="font-large">11.</span>5</span>
                    <span class="old-price">￥29.8</span>
                  </div>
                </van-grid-item>
                <van-grid-item>
                  <div class="img">
                    <img src="../static/imgs/supervip/2.webp" alt="">
                    <p class="vipdiscount">会员专享5折</p>
                  </div>
                  <p class="title text-overflow">小炒鸡丁拼剁椒茄子套餐</p>
                  <div class="price">
                    <span class="bold">￥<span class="font-large">11.</span>5</span>
                    <span class="old-price">￥29.8</span>
                  </div>
                </van-grid-item>
                <van-grid-item>
                  <div class="img">
                    <img src="../static/imgs/supervip/2.webp" alt="">
                    <p class="vipdiscount">会员专享5折</p>
                  </div>
                  <p class="title text-overflow">小炒鸡丁拼剁椒茄子套餐</p>
                  <div class="price">
                    <span class="bold">￥<span class="font-large">11.</span>5</span>
                    <span class="old-price">￥29.8</span>
                  </div>
                </van-grid-item>
                <van-grid-item>
                  <div class="img">
                    <img src="../static/imgs/supervip/2.webp" alt="">
                    <p class="vipdiscount">会员专享5折</p>
                  </div>
                  <p class="title text-overflow">小炒鸡丁拼剁椒茄子套餐</p>
                  <div class="price">
                    <span class="bold">￥<span class="font-large">11.</span>5</span>
                    <span class="old-price">￥29.8</span>
                  </div>
                </van-grid-item>
              </van-grid>
            </van-swipe-item>
            <van-swipe-item>
              <van-grid :border="false" :column-num="2">
                <van-grid-item>
                  <div class="img">
                    <img src="../static/imgs/supervip/2.webp" alt="">
                    <p class="vipdiscount">会员专享5折</p>
                  </div>
                  <p class="title text-overflow">小炒鸡丁拼剁椒茄子套餐</p>
                  <div class="price">
                    <span class="bold">￥<span class="font-large">11.</span>5</span>
                    <span class="old-price">￥29.8</span>
                  </div>
                </van-grid-item>
                <van-grid-item>
                  <div class="img">
                    <img src="../static/imgs/supervip/2.webp" alt="">
                    <p class="vipdiscount">会员专享5折</p>
                  </div>
                  <p class="title text-overflow">小炒鸡丁拼剁椒茄子套餐</p>
                  <div class="price">
                    <span class="bold">￥<span class="font-large">11.</span>5</span>
                    <span class="old-price">￥29.8</span>
                  </div>
                </van-grid-item>
                <van-grid-item>
                  <div class="img">
                    <img src="../static/imgs/supervip/2.webp" alt="">
                    <p class="vipdiscount">会员专享5折</p>
                  </div>
                  <p class="title text-overflow">小炒鸡丁拼剁椒茄子套餐</p>
                  <div class="price">
                    <span class="bold">￥<span class="font-large">11.</span>5</span>
                    <span class="old-price">￥29.8</span>
                  </div>
                </van-grid-item>
                <van-grid-item>
                  <div class="img">
                    <img src="../static/imgs/supervip/2.webp" alt="">
                    <p class="vipdiscount">会员专享5折</p>
                  </div>
                  <p class="title text-overflow">小炒鸡丁拼剁椒茄子套餐</p>
                  <div class="price">
                    <span class="bold">￥<span class="font-large">11.</span>5</span>
                    <span class="old-price">￥29.8</span>
                  </div>
                </van-grid-item>
              </van-grid>
            </van-swipe-item>
          </van-swipe>
          <p class="footer text--center">特价菜品及价格以商家店内实际上架为准</p>
        </div>
      </div>
      <!-- 特权5 -->
      <div :class="`${prefixCls}-privilege-frame box`">
        <div :class="`${prefixCls}-privilege-frame__title`">
          <h4><span class="flag">特权5</span>
          会员专属客服</h4>
        </div>
        <div :class="`${prefixCls}-privilege-frame__content privi5`">
          <div class="img">
            <img src="../static/imgs/supervip/3.webp" alt="">
          </div>
          <p class="privi5-footer">超级会员享有24小时客服专线，配有专属客服，竭诚提供更专业、更优质的服务</p>
        </div>
      </div>
    </div>
    <!-- 开通会员 -->
    <transition name="svipBtn">
      <div v-if="vipFlag" :class="`${prefixCls}-svip-button`">
        <div class="v-button--svip v-button--block text--center">
          <span class="font-small">￥</span>
          <span class="font-large bold">6</span>
          <span class="font-small opacity">￥15</span>开通会员
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
const prefixCls = 'supervip-index';
export default {
  data() {
    return {
      prefixCls,
      vipFlag: false
    };
  },
  computed: {},
  watch: {},
  methods: {
    scrollToShowVip() {
      if (window.scrollY > 200) {
        this.vipFlag = true;
      } else {
        this.vipFlag = false;
      }
    },
  },
  created() {
  },
  mounted() {
    this.scrollToShowVip();
    window.addEventListener('scroll', this.scrollToShowVip);
  }
}
</script>
