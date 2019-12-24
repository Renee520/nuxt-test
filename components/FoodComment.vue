<template>
  <div :class="prefixCls">
    <ul :class="`${prefixCls}-rateRow box`">
      <li class="rate">{{ rate }}</li>
      <li class="start">
        <p class="text">商家评分</p>
        <van-rate size=10 v-model="rate" />
      </li>
      <li class="taste">
        <p class="text">味道</p>
        <span class="large">5.0</span>
      </li>
      <li class="packing">
        <p class="text">包装</p>
        <span class="large">5.0</span>
      </li>
      <li class="send">
        <p class="text">配送</p>
        <span class="large">5.0</span>
      </li>
    </ul>
    <div :class="`${prefixCls}-content box`">
      <div :class="`${prefixCls}-content__tagsBox`">
        <button class="comTag active">全部 1203</button>
        <button class="comTag">好评 13</button>
        <button class="comTag bad">差评 203</button>
        <button class="comTag">有图 103</button>
        <button class="comTag">味道好 12</button>
      </div>
      <p :class="`${prefixCls}-content__tip`">
        <van-icon name="success" />只看有内容的评价
      </p>
      <section :class="`${prefixCls}-content__item flex`" v-for="(item, index) in commentList" :key="index">
        <img src="~/static/imgs/user/logo.png" alt="">
        <div class="user">
          <p class="uname">{{ item.name || '匿名用户' }}
            <span class="date float--right">{{ item.date }}</span>
          </p>
          <div class="rate">
            <van-rate v-model="item.rate" size=10 />
            <span class="rate5" v-if="item.rate===5">超赞</span>
            <span class="rate4" v-else-if="item.rate===4">满意</span>
            <span class="rate3" v-else-if="item.rate===3">一般</span>
            <span class="rate2" v-else-if="item.rate===2">较差</span>
            <span class="rate1" v-else>吐槽</span>
          </div>
          <div v-if="item.comment" class="comment">
            <span v-if="item.mask" class="tag">
              <span v-for="(maskItem, i) in item.mask" :key="i">{{ maskItem }}</span>
            </span>
            {{ item.comment }}</div>
          <div class="merchant-reply" v-if="item.merchantReply">商家回复：{{ item.merchantReply }}</div>
          <div class="img" v-if="item.src">
            <img :src="item.src" alt="">
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
const prefixCls = 'foodComment-index';
export default {
  data() {
    return {
      prefixCls,
      rate: 4.8, // 评分
      commentList: [ // 评论列表
        {
          uname: "评价用户testtest",
          date: "2019-10-11",
          rate: 5,
          comment: "好",
          mask: ["蛋炒饭"],
          merchantReply: "谢谢！",
          src: ""
        },
        {
          uname: "评价用户testtest",
          date: "2019-10-11",
          rate: 4,
          comment: "好",
          src: ""
        },
        {
          uname: "评价用户testtest",
          date: "2019-10-11",
          rate: 3,
          comment: "好",
          merchantReply: "谢谢！",
          src: ""
        },
        {
          uname: "评价用户testtest",
          date: "2019-10-11",
          rate: 2,
          comment: "好",
          mask: ["蛋炒饭", "煎饼"],
          merchantReply: "谢谢！",
          src: ""
        },
        {
          uname: "评价用户testtest",
          date: "2019-10-11",
          rate: 1,
          comment: "好",
          merchantReply: "谢谢！",
          src: ""
        }
      ],
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
