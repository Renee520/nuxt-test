<template>
  <div :class="prefixCls">
    <!-- header -->
    <div :class="`${prefixCls}-header text--center`">
      <van-icon name="arrow-left" @click="backToHome" />
      <img :class="`${prefixCls}-header__img`" src="~/static/imgs/food/header.webp" alt />
    </div>
    <!-- wrap -->
    <div :class="`${prefixCls}-wrap box text-center`">
      <!-- title -->
      <van-cell @click="showTitlePopup">
        <div class="row-title flex">
          <h3 class="title text-overflow">仟兹蜜蛋糕烘焙(巴楚县店)</h3>
          <van-icon name="play" />
        </div>
        <p class="info">
          <span class="info-evalute">评价5.0</span>
          <span class="info-order">月售10单</span>
          <span class="info-sendTime">商家配送约41分钟</span>
        </p>
      </van-cell>
      <van-popup class="title-popup" v-model="showTitleDetial" closeable close-icon="close" >
        <div class="title-popup__content box">
          <p class="title text--center bold">仟兹蜜蛋糕烘焙(巴楚县店)</p>
          <ul class="content">
            <li class="content__cell">
              <h4>5</h4>
              <span>评分</span>
            </li>
            <li class="content__cell">
              <h4>10单</h4>
              <span>月售</span>
            </li>
            <li class="content__cell">
              <h4>商家配送</h4>
              <span>约41分钟</span>
            </li>
            <li class="content__cell">
              <h4>0元</h4>
              <span>配送费</span>
            </li>
            <li class="content__cell">
              <h4>1.3km</h4>
              <span>距离</span>
            </li>
          </ul>
          <div class="notice-title">公告</div>
          <p class="notice-content">
            亲爱的各位小主，由于下大雨，平台骑手较少，所以会出现无人配送，配送过慢的情况，在此先跟各位道个歉了
            亲爱的各位小主，由于下大雨，平台骑手较少，所以会出现无人配送，配送过慢的情况，在此先跟各位道个歉了
            如有餐品问题与建议，请联系我们。承接大小团餐，欢迎开店合作。欢迎光临，用餐高峰期请提前下单，谢谢。
          </p>
        </div>
      </van-popup>
      <!-- 优惠券 -->
      <div :class="`${prefixCls}-wrap-coupons`">
        <div v-for="(item, index) in couponsList" :key="index" :class="`${prefixCls}-wrap-coupons__item flex`" :style="{'background-color':item.bgc}" @click="showCoupons">
          <p class="description flex">
            <span class="money bold">￥<span class="large">{{ item.money }}</span>
            </span>
            <span class="text flex"><van-icon name="like" />{{ item.text }}</span>
          </p>
          <span class="get-coupon">领取</span>
        </div>
        <van-popup
          v-model="showcoupons"
          position="bottom"
          closeable
          close-icon="cross"
          :close-on-click-overlay="false"
        >
          <p class="coupon-item__title text--center bold">店铺专享红包</p>
          <p class="desc bold">超级会员特权<span class="light">限超级会员用户兑换</span></p>
          <div class="coupon coupon1">
            <div class="coupon-left">
              <div class="money">￥<span class="large bold">5</span></div>
              <div class="text">
                <p class="bold">满任意金额可用</p>
                <p class="small">限连锁店使用,2019-12-10到期</p>
              </div>
            </div>
            <div class="coupon-right">
              <button>兑换</button>
            </div>
          </div>
          <div class="coupon coupon2">
            <div class="coupon-left">
              <div class="money">￥<span class="large bold">6</span></div>
              <div class="text">
                <p class="bold">满￥199可用</p>
                <p class="small">限连锁店使用,2019-12-10到期</p>
              </div>
            </div>
            <div class="coupon-right">
              <button>领取</button>
            </div>
          </div>
        </van-popup>
      </div>
      <!-- 优惠活动 -->
      <div :class="`${prefixCls}-wrap-activities`">
        <div @click="showActivities" :class="`${prefixCls}-wrap-activities__title`">
          <!-- 如果优惠第一条为满减 -->
          <p v-if="activities[0].attribute" class="activity subtract text-overflow">
            <span v-for="(item, key, index) in activities[0].attribute" :key="index">满{{ key }}减{{ item }}元</span>
          </p>
          <p v-else class="activity text-overflow">{{ activities[0].description }}</p>
          <div class="activities-number float--right">
            <span>{{ activities.length }}个活动</span>
            <span class="triangle"></span>
          </div>
        </div>
        <van-popup
          v-model="showDiscount"
          closeable
          position="bottom"
          close-icon="cross"
        >
          <h4 class="activities__title text--center">优惠活动</h4>
          <div class="activities__content">
            <div v-for="(item, i) in activities" :key="i">
              <span class="iconName">{{ item.iconName }}</span>{{ item.description }}
            </div>
          </div>
        </van-popup>
      </div>
      <!-- 公告 -->
      <p class="notice">公告：欢迎光临，用餐高峰期请提前下单，谢谢。</p>
    </div>
    <div :class="`${prefixCls}-nav`">
      <van-sticky>
        <van-tabs v-model="navActive" :duration="0" line-width="40px">
          <van-tab title="点餐" name="order"></van-tab>
          <van-tab title="评价" name="comment"></van-tab>
          <van-tab title="商家" name="store"></van-tab>
        </van-tabs>
      </van-sticky>
    </div>
    <!-- 点餐 -->
    <FoodOrder :reduceActivities="reduceActivities" :foodListFromFood="foodList" v-if="navActive==='order'"></FoodOrder>
    <!-- 评价 -->
    <FoodComment v-else-if="navActive==='comment'"></FoodComment>
    <!-- 商家 -->
    <FoodStore v-else></FoodStore>
  </div>
</template>
<script>
const prefixCls = "food-index";
import { getStoreById } from '../../apis'
import FoodStore from '@/components/FoodStore.vue'
import FoodComment from '@/components/FoodComment.vue'
import FoodOrder from '@/components/FoodOrder.vue'

export default {
  data() {
    return {
      prefixCls,
      showTitleDetial: false, // 显示title弹出层
      couponsList: [ // 优惠券
        { money: 5, text: "无门槛", bgc: '#ffe578' },
        { money: 6, text: "满199可用", bgc: '#fff4f4' },
      ],
      activities: [ // 优惠活动
        {
          iconName: "满减",
          attribute: { 25: 4, 38: 20, 59: 29 },
          description: "满100元减10元，满200元减20元，满300元减30元"
        },
        {
          iconName: "新客",
          attribute: null,
          description: '新用户首单立减1元',
        },
        {
          iconName: "满减",
          attribute: { 100: 10, 200: 20, 300: 30 },
          description: "满100元减10元，满200元减20元，满300元减30元"
        },
        {
          iconName: "满减",
          attribute: { 100: 10, 200: 20, 300: 30 },
          description: "满100元减10元，满200元减20元，满300元减30元"
        },
        {
          iconName: "满减",
          attribute: { 100: 10, 200: 20, 300: 30 },
          description: "满100元减10元，满200元减20元，满300元减30元"
        },
        {
          iconName: "折扣",
          attribute: null,
          description: "满100元减10元，满200元减20元，满300元减30元"
        },
        {
          iconName: "特价",
          attribute: null,
          description: "特价商品1元起"
        },
        {
          iconName: "首单",
          attribute: null,
          description: "饿了么新用户首单立减17元"
        },
      ],
      showcoupons: false, // 显示优惠券
      showDiscount: false, // 显示优惠活动
      navActive: "order", // nav选中项，默认选中“点餐”
      foodList: [], // 从后台获取到的食物菜单
    };
  },
  computed: {
    reduceActivities() { // 满减活动
      return this.activities.find(item => {
        return item.attribute!==null
      });
    },
  },
  components: {
    FoodStore,
    FoodComment,
    FoodOrder,
  },
  watch: {},
  methods: {
    backToHome() { // 回到首页
      this.$router.go(-1);
    },
    showTitlePopup() { // 点击商家title，显示详情
      this.showTitleDetial = true;
    },
    showCoupons() { // 显示优惠券详情
      this.showcoupons = true;
    },
    showActivities() { // 弹出优惠活动
      this.showDiscount = true;
    },
  },
  created() {
    // 获取食物列表
    console.log('object', this.$route.params);
    getStoreById(this.$route.params.id).then(
      res => {
        if (!res.status) {
          console.log('失败');
        }
        this.foodList = res.data;
      },
      err => {
        console.log(err.message || '失败');
      }
    )
  },
  mounted() {}
};
</script>
