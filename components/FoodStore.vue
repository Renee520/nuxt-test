<template>
  <div :class="prefixCls">
    <section :class="`${prefixCls}-brandStory box`" v-if="brandStory">
      <div :class="`${prefixCls}-brandStory__img`">
        <img src="~/static/imgs/food/brandStory.webp" alt="">
      </div>
      <h4 :class="`${prefixCls}-brandStory__title title`">全国连锁</h4>
      <p :class="`${prefixCls}-brandStory__content`">品牌故事简介</p>
      <p class="text--center">查看品牌故事</p>
    </section>
    <section :class="`${prefixCls}-sendInfo box`">
      <p :class="`${prefixCls}-sendInfo__title title`">配送信息</p>
      <p :class="`${prefixCls}-sendInfo__send-info`">商家配送提供配送，约31分钟到达，距离18km</p>
      <p :class="`${prefixCls}-sendInfo__send-price`">配送费￥2</p>
    </section>
    <section :class="`${prefixCls}-services box`">
      <p :class="`${prefixCls}-services__title title`">商家服务</p>
      <p :class="`${prefixCls}-services__item`"><span class="tag">赔</span>商家原因导致订单取消，赔付代金券</p>
      <p :class="`${prefixCls}-services__item`"><span class="tag">保</span>该商户食品安全已由国泰产险承担，食品安全有保障</p>
    </section>
    <section :class="`${prefixCls}-realScene box`">
      <p :class="`${prefixCls}-realScene__title title`">商家实景</p>
      <div :class="`${prefixCls}-realScene__item`">
        <img src="~/static/imgs/user/logo.png" alt="">
        <p>其他(3张)</p>
      </div>
      <div :class="`${prefixCls}-realScene__item`">
        <img src="~/static/imgs/user/logo.png" alt="">
        <p>其他(1张)</p>
      </div>
      <div :class="`${prefixCls}-realScene__item`">
        <img src="~/static/imgs/user/logo.png" alt="">
        <p>其他(1张)</p>
      </div>
    </section>
    <section :class="`${prefixCls}-info box`">
      <p :class="`${prefixCls}-info__title title`">商家信息</p>
      <ul>
        <li>冒菜富含各种营养物质，其中还含有一种“软骨素”的营养成分，能大大增强骨细胞活性，具有添骨髓，增血液，减缓衰老，延年益寿，强身美容，健脾补胃，增强记忆的保健功效。</li>
        <li>
          <span class="bold">品类</span>
          <span>冒菜</span>
        </li>
        <li>
          <span class="bold">商家电话</span>
          <span class="contact-merchant"><van-icon name="certificate" />联系商家</span>
        </li>
        <li>
          <span class="bold">地址</span>
          <span class="address">新疆喀什地区巴楚县人民路</span>
        </li>
        <li>
          <span class="bold">营业时间</span>
          <span>09:00-22:30</span>
        </li>
      </ul>
    </section>
    <section :class="`${prefixCls}-qualification title box`">营业资质</section>
  </div>
</template>
<script>
const prefixCls = 'foodStore-index';
export default {
  data() {
    return {
      prefixCls,
      brandStory: true, // 品牌故事
    };
  },
  computed: {},
  watch: {},
  methods: {
  },
  created() {
  },
}
</script>
